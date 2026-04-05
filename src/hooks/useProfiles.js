import { useState, useEffect } from 'react';
import { database } from '../utils/firebase';
import { ref, onValue, set } from 'firebase/database';

export default function useProfiles(user) {
    const [availableProfiles, setAvailableProfiles] = useState({});

    useEffect(() => {
        if (!user) return;
        
        const profilesRef = ref(database, `users/${user.uid}/profiles`);
        const unsubscribe = onValue(profilesRef, (snapshot) => {
            if (snapshot.exists()) {
                setAvailableProfiles(snapshot.val());
            } else {
                // Initialize default profile for new users
                const defaultProfile = { Default: { name: "Default", aircraftTag: "Global" } };
                set(profilesRef, defaultProfile);
                setAvailableProfiles(defaultProfile);
            }
        });
        
        return () => unsubscribe();
    }, [user]);

    return availableProfiles;
}