import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Collapsible from 'react-native-collapsible';

export default function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

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

      <TouchableOpacity onPress={toggleExpand}>
        <View>
          <Text style={styles.body}>
            Person 1
          </Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <Text style={styles.body}>
            Meal 1
          </Text>
          <TextInput style={styles.inputBox} keyboardType='number-pad'>
          </TextInput>
        </View>
      </Collapsible>

      {/* container for tax and tip input boxes */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1, margin:10}}>
          <Text style={[styles.body2,{margin:10}]}>Los Angeles Tax</Text>
          <TextInput style={styles.inputBox}>
            
          </TextInput>
        </View>

        <View style={{flex:1, margin:10}}>
          <Text style={[styles.body2,{margin:10}]}>Tip </Text>
          <TextInput style={styles.inputBox}>
            
          </TextInput>
        </View>
        
      </View> 

      {/* <Button title="Submit"></Button> */}

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
  body2: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 18,
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
    borderRadius: 8,
    borderColor: 'gray'
  },
  inputPeopleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  },
  inputItemContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 50
  },
  // used for seeing padding and margins
  redBorder: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'dotted'
  }
});