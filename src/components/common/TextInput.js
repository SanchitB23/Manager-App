import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

const Input = ({label,value,onChangeText,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export {Input};

const styles = {
  input: {
    color: '#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
  label: {
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  container: {
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
};
