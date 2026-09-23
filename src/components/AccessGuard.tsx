import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

interface AccessGuardProps {
  level: 'Public' | 'Teaser' | 'Data Room';
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AccessGuard({ level, children, fallback }: AccessGuardProps) {
  const { user, userData, loading } = useAuth();

  if (loading) return null;

  if (level === 'Public') {
    return <>{children}</>;
  }

  if (level === 'Teaser') {
    if (user && (userData?.status === 'active' || userData?.role === 'admin')) {
      return <>{children}</>;
    }
    return (
      fallback || (
        <div className="bg-decipher-blue/30 border border-white/5 p-8 rounded-xl text-center">
          <Lock className="mx-auto mb-4 text-decipher-grey/50" size={24} />
          <h3 className="text-white font-medium mb-2">Verified Access Required</h3>
          <p className="text-sm text-decipher-grey">You must be a verified investor to view these details.</p>
        </div>
      )
    );
  }

  // Data Room level would require specific deal approval, 
  // but as a generic guard, we just check if admin, or we let the specific component handle it.
  if (level === 'Data Room') {
    if (userData?.role === 'admin') return <>{children}</>;
    // Since Data Room needs deal-specific checks, it's better handled within SecureDataRoom 
    // or passed a boolean `isApproved` flag.
    return <>{children}</>;
  }

  return <>{children}</>;
}
