import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.header}>
      <Image source={require('./assets/eating_together.png')}/>
      <Text style={styles.headerText}>Easy Split</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  }
})