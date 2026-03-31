import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD7zsSlVfRuTevKoU-2g3Xrkz5ZPLaILyQ",
    authDomain: "msfs-panel.firebaseapp.com",
    databaseURL: "https://msfs-panel-default-rtdb.firebaseio.com",
    projectId: "msfs-panel",
    storageBucket: "msfs-panel.firebasestorage.app",
    messagingSenderId: "622903655366",
    appId: "1:622903655366:web:12ca8db100f1c104b790c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);