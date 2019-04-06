import firebase from '@firebase/app';
import '@firebase/firestore';


export const getPosts = () => {

  const db = firebase.firestore();
  db.collection('posts').get().then((querySnapshot) => {
    const actions = [];
    querySnapshot.forEach((doc) => {
      actions.push({ type: 'SET_POSTS_FULFILLED', post: querySnapshot });
    });
    return actions;
  }).catch((error) => {
    console.log(error);
    return [];
  })
}
