import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA2ioyJCMKrGSwZKt94ya-ojzwfzFFT138",
        authDomain: "fresh-clothing-db.firebaseapp.com",
        databaseURL: "https://fresh-clothing-db.firebaseio.com",
        projectId: "fresh-clothing-db",
        storageBucket: "fresh-clothing-db.appspot.com",
        messagingSenderId: "609714582858",
        appId: "1:609714582858:web:2599cc7324c56c6faa3db3",
        measurementId: "G-7RBH2W7X64"
      }

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists){
          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          } catch (error){
            console.log("error creating user", error.message);
          }
        }

        return userRef
      }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase