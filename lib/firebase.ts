// lib/firebase.ts
import firebase from '@react-native-firebase/app';
import remoteConfig from '@react-native-firebase/remote-config';

const firebaseConfig = {
  apiKey: 'YOUR_KEY',
  authDomain: 'your-app.firebaseapp.com',
  projectId: 'your-id',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'XXXX',
  appId: 'YOUR_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, remoteConfig };

