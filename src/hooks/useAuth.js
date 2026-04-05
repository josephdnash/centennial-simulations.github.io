import { useState, useEffect } from 'react';
import { auth, database } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // Update email in DB
                await set(ref(database, `users/${currentUser.uid}/email`), currentUser.email);
                // Check admin role
                const roleSnap = await get(ref(database, `roles/${currentUser.uid}`));
                setIsAdmin(roleSnap.val() === 'admin');
            } else {
                setUser(null);
                setIsAdmin(false);
            }
            setLoading(false);
        });
        
        return () => unsubscribe();
    }, []);

    return { user, loading, isAdmin };
}