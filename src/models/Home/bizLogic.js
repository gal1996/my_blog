import firebase from '@firebase/app';
import '@firebase/firestore';


export const fetchPosts = async () => {
  console.log('hoge')
  const db = firebase.firestore();
  db.collection('posts').get().then((querySnapshot) => {
    console.log(querySnapshot)
    return querySnapshot;
  }).catch((error) => {
    console.log(error);
    return [];
  })
}
