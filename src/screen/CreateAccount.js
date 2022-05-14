import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {createAccount} from '../redux/thunkAction';
import SnackBar from '../components/SnackBar';

export default function CreateAccount() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{margin: 12}}>
      <TextInput
        label="UserName"
        value={userName}
        onChangeText={text => setUserName(text)}
        mode="outlined"
      />
      <View style={{margin: 5}} />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        onChangeText={text => setPassword(text)}
      />
      <View style={{margin: 5}} />
      <Button
        mode="contained"
        onPress={() => {
          dispatch(
            createAccount({
              userName: userName,
              password: password,
            }),
          );
        }}>
        Be Register
      </Button>
      <SnackBar title={'Kayıt işlemi başarılı bir şekildeyapılmıştır'} />
    </View>
  );
}
