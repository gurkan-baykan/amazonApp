import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import products from '../data/products';
import ProductItem from '../components/ProductItem';
import AppBar from '../components/AppBar';

const HomeScreen = navigation => {
  const {viewStyle} = styles;
  return (
    <SafeAreaView>
      <View style={viewStyle}>
        <AppBar title={'Home Screnn'} navigation={navigation.navigation} />
        <FlatList
          data={products}
          style={{marginTop: 10}}
          renderItem={({item}) => (
            <ProductItem item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    flexDirection: 'column',
  },
});

export default HomeScreen;
