import {View, Image, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import Button from './Button';
export default function CartItem({item}) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          flex: 1,
          marginBottom: 5,
        }}>
        <View>
          <Image
            resizeMode="contain"
            style={{width: 100, height: 100}}
            source={{uri: item.image}}
          />
        </View>
        <View style={{marginLeft: 5, flex: 1}}>
          <Text style={{fontSize: 18}}>{item.title}</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <NumericInput
          value={quantity}
          key={item.id}
          minValue={1}
          iconSize={20}
          textColor="#5fa3c2"
          onChange={value => setQuantity(value)}
          borderColor="grey"
        />
        <Button id={item.id} />
      </View>

      <View
        style={{
          borderBottomColor: '#e3dfde',
          borderBottomWidth: 1,
        }}
      />
    </ScrollView>
  );
}
