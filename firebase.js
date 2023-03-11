import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBasz-2arohPiNrecxUv4ClBKy7LBuoKaY",
  authDomain: "tor1-1baed.firebaseapp.com",
  projectId: "tor1-1baed",
  storageBucket: "tor1-1baed.appspot.com",
  messagingSenderId: "644712941888",
  appId: "1:644712941888:web:74935415006bde9e5752a5",
  measurementId: "G-5ZYSBJ2FN1"
};
export default firebase.initialiazeApp(firebaseConfig);
const analytics = getAnalytics(app);