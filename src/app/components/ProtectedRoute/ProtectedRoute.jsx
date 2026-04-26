'use client';

import { useAuth } from '@/app/context/AuthProvider';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push(
                `/Authentication/login?redirect=${encodeURIComponent(pathname)}`
            );
        }
    }, [user, loading, pathname]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white">
                Loading...
            </div>
        );
    }

    if (!user) return null;

    return children;
}