import firebase from 'firebase';
import * as AuthService from './AuthService';

export const followUser = userToFollow => {
  const currentUser = AuthService.getCurrentUser();
  return firebase.firestore().doc(`/users/${userToFollow.uid}/followers/${currentUser.uid}`)
    .set({ timestamp: firebase.firestore.FieldValue.serverTimestamp() })
};

export const updateUserData = ({ displayName = '', userName = '', photoURL = '' }) => {
  const currentUser = AuthService.getCurrentUser();
  const parsedValues = {
    displayName, userName, photoURL
  };
  return firebase.firestore().doc(`/users/${currentUser}`).set(parsedValues, { merge: true })
};

export const getUserData = userId => firebase.firestore().doc(`/users/${userId}`).get();

export const createUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
