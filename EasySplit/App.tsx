import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View>

       {/* group image and title */}
      <View style={styles.header}>
        <Image source={require('./assets/eating_together.png')}/>
        <Text style={styles.headerText}>Easy Split</Text>
      </View>
      <Text style={styles.body}>Number of people</Text>

      {/* input box for number of people */}
      <View style={styles.inputPeopleContainer}>
        <Button
          title="-"
        />
        <TextInput style={styles.inputBox} keyboardType="number-pad"></TextInput>
        <Button
          title="+"
        />
      </View>

      <Button title="Submit"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 100,
    // lineHeight: 150
  },
  heading1: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 70,
    // lineHeight: 105
  },
  heading2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 50,
    // lineHeight: 75
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 21,
    // lineHeight: 45
  },
  header:{
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  },
  headerText:{
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    fontWeight: '700',
    // lineHeight: 45,
    color: 'black',
  },
  inputBox: {
    borderWidth: 1,
  },
  inputPeopleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  },
  // used for seeing padding and margins
  redBorder: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  }
});


