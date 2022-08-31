import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUmD-afg3JDFBWhnq-Wwd2LQamfdHHQUM                                       ",
    authDomain: "rn-instagram-clone-f8f0f.firebaseapp.com",
    projectId: "rn-instagram-clone-f8f0f",
    storageBucket: "rn-instagram-clone-f8f0f.appspot.com",
    messagingSenderId: "33897150109",
    appId: "1:354819800383:android:c44d66eba9f4713500a78a"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;