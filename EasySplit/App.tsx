import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


function App(): JSX.Element {
  return (
    <View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.heading1}>Heading 1</Text>
      <Text style={styles.heading2}>Heading2</Text>
      <Text style={styles.body}>Body</Text>
      <Image source={require('./assets/eating_together.png')}/>
      <Text style={styles.headerText}>Easy Split</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 100,
    lineHeight: 150
  },
  heading1: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 70,
    lineHeight: 105
  },
  heading2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 50,
    lineHeight: 75
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 45
  },
  header:{
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  },
  headerText:{
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45
  }
});

export default App;
