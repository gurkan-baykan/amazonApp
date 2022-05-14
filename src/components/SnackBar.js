import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Snackbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

export default function SnackBar({title}) {
  const {snackBar} = useSelector(state => state.cart);
  const [visible, setVisible] = React.useState(true);
  const onDismissSnackBar = () => setVisible(false);

  console.log(snackBar);
  if (!snackBar) {
    return false;
  }
  console.log(4645);
  return (
    <View style={styles.container}>
      <Snackbar
        style={styles.snackBar}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'iptal',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        <Text style={{fontSize: 18}}> {title} </Text>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  snackBar: {
    backgroundColor: '#69b048',
  },
});
