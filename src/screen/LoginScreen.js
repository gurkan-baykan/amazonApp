import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {signInAuth} from '../redux/thunkAction';

export default function LoginScreen({route, navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {loading} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ImageBackground
        source={require('../assets/images/amazon2.png')}
        resizeMode="contain"
        style={{justifyContent: 'center', height: 100}}
      />
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
          secureTextEntry={passwordVisible}
          onChangeText={text => setPassword(text)}
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
        <View style={{margin: 5}} />
        <Button
          mode="contained"
          loading={loading}
          disabled={loading}
          onPress={() => {
            dispatch(signInAuth({userName, password, navigation}));
          }}>
          Login
        </Button>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Button
            mode="text"
            onPress={() => navigation.navigate('CreateAccount')}>
            Create New Account
          </Button>
        </View>
      </View>
    </View>
  );
}
