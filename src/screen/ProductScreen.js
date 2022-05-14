import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import AddCart from '../components/AddCart';
import ImageCarousel from '../components/ImageCarousel';
import PickerOptions from '../components/PickerOptions';
import Quantity from '../components/Quantity';

const ProductScreen = ({route, navigator}) => {
  const {titleStyle, descriptionStyle} = styles;

  const {params} = route;

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20, margin: 10}}>
      <ScrollView>
        <Text style={titleStyle}>{params.title.substring(0, 40)}</Text>
        <ImageCarousel params={params} />
        <Text style={[titleStyle, {margin: 10, color: '#178536'}]}>
          Price : ${params.price}
        </Text>
        <View style={{flexDirection: 'row', flex: 1, margin: 5}}>
          <PickerOptions params={params} />
          <Quantity params={params} />
        </View>
        <View style={{flex: 1, marginTop: 8}}>
          <Text style={descriptionStyle}> {params.description}</Text>
        </View>
        <View style={{marginTop: 15}}>
          <AddCart params={params} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
  },
  titleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  descriptionStyle: {
    fontSize: 14,
  },
});
export default ProductScreen;
