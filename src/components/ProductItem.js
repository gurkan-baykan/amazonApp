import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
const ProductItem = ({item, navigation}) => {
  const onPress = () => {
    navigation.navigation.navigate('Product', item);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.viewRow}>
        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            style={{width: 130, height: 100}}
            source={{uri: item.image}}
          />
        </View>

        <View style={{flex: 2, alignItems: 'flex-start'}}>
          <Text> {item.title}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Rating
              size="5"
              ratingCount={5}
              imageSize={20}
              readonly
              onSwipeRating={item.avgRating}
            />
            <Text> {item.ratings}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              from ${item.price}
            </Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                marginLeft: 8,
              }}>
              ${item.oldPrice}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default ProductItem;
