import {View, Text} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default function AppBar({title, navigation}) {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Appbar.Action
        icon="exit-to-app"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
  },
});
