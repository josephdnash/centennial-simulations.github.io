import { useState, useEffect } from 'react';
import { database } from '../utils/firebase';
import { ref, onValue } from 'firebase/database';

export default function useLayoutData(user, currentProfile) {
    const [pagesData, setPagesData] = useState(
        new Array(10).fill(null).map(() => new Array(24).fill(""))
    );

    useEffect(() => {
        if (!user || !currentProfile) return;
        
        const layoutRef = ref(database, `users/${user.uid}/layouts/${currentProfile}`);
        const unsubscribe = onValue(layoutRef, (snapshot) => {
            const data = snapshot.val();
            let safePages = new Array(10).fill(null).map(() => new Array(24).fill(""));
            
            if (data) {
                for (let p = 0; p < 10; p++) {
                    if (data[p]) {
                        Object.keys(data[p]).forEach(key => {
                            let index = parseInt(key);
                            // Bounds checking & defensive mapping
                            if (!isNaN(index) && index >= 0 && index < 24) {
                                safePages[p][index] = data[p][key] || "";
                            }
                        });
                    }
                }
            }
            setPagesData(safePages);
        });
        
        return () => unsubscribe();
    }, [user, currentProfile]);

    return { pagesData, setPagesData };
}