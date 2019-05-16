import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyAF0-6o_fvfRjqdc4RGnoJSfBPcpFdVN5E',
  authDomain: 'vue-authenticaion.firebaseapp.com',
  databaseURL: 'https://vue-authenticaion.firebaseio.com',
  projectId: 'vue-authenticaion"',
  storageBucket: 'vue-authenticaion.appspot.com',
  messagingSenderId: '521051079335',
  appId: '1:521051079335:web:438dbd5040696209'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
