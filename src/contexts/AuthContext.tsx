import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db, googleProvider } from '../lib/firebase';
import { onAuthStateChanged, User, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface UserData {
  role: 'admin' | 'user';
  email: string;
  displayName: string;
  status: string;
  profileCompleted?: boolean;
  industryInterest?: string;
  fundingCapacity?: string;
  institutionalAffiliation?: string;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data() as UserData);
          } else {
            const isAdmin = currentUser.email === 'team@marketingtusk.com';
            const newUserData: UserData = {
              role: isAdmin ? 'admin' : 'user',
              email: currentUser.email || '',
              displayName: currentUser.displayName || '',
              status: isAdmin ? 'active' : 'pending',
              profileCompleted: isAdmin ? true : false,
            };
            await setDoc(userRef, newUserData);
            setUserData(newUserData);
          }
        } catch (error) {
          console.error("Firestore error, likely using dummy config:", error);
          // Fallback user data if Firestore is unreachable
          const isAdmin = currentUser.email === 'team@marketingtusk.com';
          setUserData({
            role: isAdmin ? 'admin' : 'user',
            email: currentUser.email || '',
            displayName: currentUser.displayName || '',
            status: isAdmin ? 'active' : 'pending',
            profileCompleted: isAdmin ? true : false,
          });
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const refreshUserData = async () => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data() as UserData);
        }
      } catch (error) {
        console.error("Firestore error in refreshUserData:", error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, signInWithGoogle, logout, refreshUserData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
