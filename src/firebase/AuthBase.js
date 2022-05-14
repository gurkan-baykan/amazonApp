import {View, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

export default function AuthBase({userName, password, navigation}) {
  auth()
    .signInWithEmailAndPassword(userName, password)
    .then(() => {
      console.log('success entry :)');
      navigation.navigate('HomeTabs');
    })
    .catch(error => {
      console.error(error);
    });
}
