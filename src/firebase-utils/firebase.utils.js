import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "crown-clothing-af14a.firebaseapp.com",
    databaseURL: "https://crown-clothing-af14a.firebaseio.com",
    projectId: "crown-clothing-af14a",
    storageBucket: "crown-clothing-af14a.appspot.com",
    messagingSenderId: "222967204509",
    appId: "1:222967204509:web:d772fb836bd4868bc56274"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, photoURL, email, createdAt, ...additonalData
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGogle = () => auth.signInWithPopup(provider);

export default firebase;