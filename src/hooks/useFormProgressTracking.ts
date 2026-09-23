import { useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

export function useFormProgressTracking(formName: string) {
  const trackingIdRef = useRef<string | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Initialize tracking session
    const initTracking = async () => {
      try {
        const docRef = await addDoc(collection(db, 'form_tracking'), {
          formName,
          status: 'started',
          startedAt: serverTimestamp(),
          lastStep: 1,
          timeSpentMs: 0
        });
        trackingIdRef.current = docRef.id;
      } catch (error) {
        console.error('Failed to init form tracking', error);
      }
    };
    initTracking();

    return () => {
      // Clean up / mark abandoned if unmounted before completion
      // (Handling true abandonment reliably in browser is hard, but we can do our best)
    };
  }, [formName]);

  const trackStep = async (step: number) => {
    if (!trackingIdRef.current) return;
    const timeSpent = Date.now() - startTimeRef.current;
    try {
      await updateDoc(doc(db, 'form_tracking', trackingIdRef.current), {
        lastStep: step,
        timeSpentMs: timeSpent
      });
    } catch (error) {}
  };

  const trackSubmission = async () => {
    if (!trackingIdRef.current) return;
    const timeSpent = Date.now() - startTimeRef.current;
    try {
      await updateDoc(doc(db, 'form_tracking', trackingIdRef.current), {
        status: 'submitted',
        completedAt: serverTimestamp(),
        timeSpentMs: timeSpent
      });
    } catch (error) {}
  };

  return { trackStep, trackSubmission };
}
