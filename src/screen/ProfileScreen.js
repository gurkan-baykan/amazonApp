import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function ProfileScreen() {
  const {cart} = useSelector(state => state);
  const accountHeaders = [
    'Ödemeleriniz',
    'Profilinizi Yönetin',
    'Siparişlerim',
    'Adres Defteri',
    'Hediye Kartı bakiyeniz',
  ];
  return (
    <ScrollView>
      <View style={styles.rootView}>
        <View style={styles.childView}>
          <Text style={styles.rootText}>
            Merhaba, <Text style={styles.nameText}> Gürkan </Text>
          </Text>

          <Avatar.Icon
            size={64}
            style={{
              backgroundColor: '#aeb1b5',
              padding: 0,
            }}
            icon="account-circle"
            color="#fff"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <Card style={styles.cardStyle}>
              <Card.Title
                title="Siparişlerim"
                elevation={3}
                mode={'outlined'}
              />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1, marginLeft: 5}}>
            <Card style={styles.cardStyle}>
              <Card.Title
                title="Tekrar Satın Al"
                elevation={3}
                mode={'outlined'}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <Card style={styles.cardStyle}>
              <Card.Title title="Hesabım" elevation={3} mode={'outlined'} />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, marginLeft: 5}}>
            <Card style={styles.cardStyle}>
              <Card.Title title="Listelerim" elevation={3} mode={'outlined'} />
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 5, marginTop: 10}}>
          <Text style={styles.nameText}> Siparişlerim </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#e3dfde',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <View>
          <FlatList
            data={cart.cartProduct}
            renderItem={({item, index}) => (
              <Image
                style={{width: 160, height: 120}}
                resizeMode="contain"
                source={{uri: item.image}}
              />
            )}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={{marginBottom: 5, marginTop: 10}}>
          <Text style={styles.nameText}> Listelerim </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#e3dfde',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <TouchableOpacity style={styles.list}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.nameText}>Bir Liste Oluştur</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginBottom: 5, marginTop: 10}}>
          <Text style={styles.nameText}> Hesabım </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#e3dfde',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', margin: 5}}>
          <FlatList
            data={accountHeaders}
            renderItem={({item, index}) => (
              <TouchableOpacity style={{flex: 1, marginLeft: 5}}>
                <Card style={styles.cardStyle}>
                  <Card.Title title={item} elevation={3} mode={'outlined'} />
                </Card>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootView: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
  },
  rootText: {
    fontSize: 20,
  },
  childView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    backgroundColor: '#e3e3e3',
    borderRadius: 45,
    alignContent: 'center',
  },
  list: {
    border: 1,
    padding: 20,
    borderBottomColor: '#9c9797',
    borderBottomWidth: 1,
    borderTopColor: '#9c9797',
    borderTopWidth: 1,
    borderRightColor: '#9c9797',
    borderRightWidth: 1,
    borderLeftColor: '#9c9797',
    borderLeftWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  },
});
