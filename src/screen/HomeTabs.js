import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const {cart} = useSelector(state => state);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 60, marginBottom: 5},
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profil',
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'Sepet',
          headerShown: false,
          tabBarBadge: cart.cartProduct.length,
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="cart-plus" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
