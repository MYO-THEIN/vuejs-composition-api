import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDyKUVNfqHC4lvotqHxZ4ykUcEFTsuv0PQ",
    authDomain: "vue-blog-system-6ee42.firebaseapp.com",
    projectId: "vue-blog-system-6ee42",
    storageBucket: "vue-blog-system-6ee42.appspot.com",
    messagingSenderId: "477115734394",
    appId: "1:477115734394:web:a93221f31e3cabf4535ec3"
};

// initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// setup Cloud Firestore
let firestoreDB = getFirestore(firebaseApp);

export {
    firebaseApp,
    firestoreDB,
    serverTimestamp
};
