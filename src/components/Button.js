import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {cartAction} from '../redux/actions/cart';
import {useDispatch} from 'react-redux';
export default function Button({id}) {
  const dispatch = useDispatch();
  const removeItem = () => {
    console.log(3423);
    dispatch(cartAction({type: 'removeItem', payload: id}));
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => removeItem()}>
        <Text style={styles.text}> Delete </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f07878',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
