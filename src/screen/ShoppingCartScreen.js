import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ShoppingCartScreen() {
  const {cart} = useSelector(state => state);
  const calTotal = () => {
    let total = 0;
    cart.cartProduct.map(item => {
      total += item.price;
    });
    return Math.round(total);
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.viewTotal}>
        <Text style={styles.total}> Ara Toplam : ${calTotal()}</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          <FontAwesome name="check-circle" color={'#6ad471'} size={24} />
          <Text style={{fontSize: 17, color: '#6ad471'}}>
            Siparişiniz Kargo Bedava Kapsamındadır.
          </Text>
          <Text style={{fontSize: 15}}>
            Alışverişi tamamlama adımında bu seçeneği seçin.
          </Text>
        </View>
        <View style={{margin: 5}}>
          <Button title={'Alışverişi Tamamla'} color={'#ecf540'} />
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={cart.cartProduct}
          renderItem={({item, index}) => <CartItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  total: {margin: 10, fontSize: 20, fontWeight: 'bold'},
  viewTotal: {flexDirection: 'column'},
  container: {height: 450},
});
