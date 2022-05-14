/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './src/screen/ProductScreen';
import LoginScreen from './src/screen/LoginScreen';
import CreateAccount from './src/screen/CreateAccount';
import HomeTabs from './src/screen/HomeTabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen
            name="HomeTabs"
            options={{headerShown: false}}
            component={HomeTabs}
          />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
