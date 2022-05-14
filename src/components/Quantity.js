import {View, Text} from 'react-native';
import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';

export default function Quantity({params}) {
  const [quantity, setQuantity] = useState(1);
  params.quantity = quantity;
  return (
    <View style={{justifyContent: 'center', alignContent: 'center', margin: 5}}>
      <NumericInput
        value={quantity}
        rounded
        minValue={1}
        iconSize={20}
        textColor="#5fa3c2"
        type={'up-down'}
        onChange={value => setQuantity(value)}
        upDownButtonsBackgroundColor="#E56B70"
        iconStyle={{color: 'white'}}
        borderColor="grey"
      />
    </View>
  );
}
