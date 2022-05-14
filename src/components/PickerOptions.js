import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function PickerOptions({params}) {
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View style={styles.pickerStyle}>
      <View style={styles.textView}>
        <Text style={styles.text}>Color: </Text>
      </View>

      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 180}}
        mode={'dropdown'}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {params.options.map(item => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  textView: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {fontSize: 17, fontWeight: 'bold'},
});
