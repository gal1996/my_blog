import firebase from '@firebase/app';
import '@firebase/firestore';


export const fetchPosts = async () => {
  const db = firebase.firestore();
  const querySnapshot = await db.collection('posts').get()
  return querySnapshot;
}
