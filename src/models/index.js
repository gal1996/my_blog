import firebase from '@firebase/app';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyApXTBX3TSpb2-1mTWuhbZS5EWcjCtRrsw",
    authDomain: "my-blog-bee05.firebaseapp.com",
    databaseURL: "https://my-blog-bee05.firebaseio.com",
    projectId: "my-blog-bee05",
    storageBucket: "my-blog-bee05.appspot.com",
    messagingSenderId: "58211795415"
};


const initFirebase = () => {
    firebase.initializeApp(config);
    const db = firebase.firestore();
    console.log(db)
    const exp = db.collection('posts');
    console.log(exp);
}

export default initFirebase;
