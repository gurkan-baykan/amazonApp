import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {cartAction} from '../redux/actions/cart';

export default function AddCart({params}) {
  //const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const {cart} = useSelector(state => state);

  return (
    <View stye={styles.viewRow}>
      <View>
        <Button
          style={styles.button}
          color="#ecf540"
          onPress={() =>
            dispatch(cartAction({type: 'addItem', payload: params}))
          }
          title="Add To Cart"
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button style={styles.button} color="#f79539" title="Buy Now" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'column',
    marginTop: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    fontColor: 'black',
    margin: 10,
  },
});
