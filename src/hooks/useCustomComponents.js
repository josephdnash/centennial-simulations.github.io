import { useState, useEffect } from 'react';
import { database } from '../utils/firebase';
import { ref, onValue } from 'firebase/database';

export default function useCustomComponents(user) {
    const [customComponents, setCustomComponents] = useState({});

    useEffect(() => {
        if (!user) return;
        
        const customRef = ref(database, `users/${user.uid}/customComponents`);
        const unsubscribe = onValue(customRef, (snapshot) => {
            if (snapshot.exists()) {
                setCustomComponents(snapshot.val());
            } else {
                setCustomComponents({});
            }
        });
        
        return () => unsubscribe();
    }, [user]);

    return customComponents;
}