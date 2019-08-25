import { createAppContainer, createStackNavigator } from 'react-navigation';

import TopPage from './src/screens/TopPage';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import firebase from 'firebase';
import ENV from './env.json';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Home: { screen: TopPage },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
},
{
  defaultNavigationOptions: {
    headerTitle: 'Login',
    headerTintColor: 'black',
    headerBackTitle: null,
  },
});

export default createAppContainer(App);