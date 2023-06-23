import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

import Collapsible from 'react-native-collapsible';

export default function People({ item, del, add, delM, updateM, log, clearMeal}) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpand = () => {
        setCollapsed(!collapsed);
      };

    return (
        <View>
            <TouchableOpacity onPress={toggleExpand}>
                <View>
                <Text style={styles.body}>
                    Person {item.key}
                </Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
              {item.prices.map((price, index) => {
                return (
                  <View key={index}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                      <Text style={styles.body}>
                          Meal {index+1}
                      </Text>
                      <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:20}}>$</Text>
                          <TextInput 
                            style={styles.inputBox} 
                            keyboardType='number-pad'
                            onChangeText={value => updateM(item.key, value, index)}
                          />
                      </View>
                    </View>
                  </View>
                )})}
                <Button title='Add Meal' onPress={() => add(item.key)} />
                <Button title='Delete Meal' onPress={() => delM(item.key)} />
                <Button title='Delete Person' onPress={() => del(item.key)}/>
                <Button title='Clear All Meals' onPress={() => clearMeal(item.key)}/>
                <Button title='console.log (debug)' onPress={() => log(item.key)}/>
                
            </Collapsible>
        </View>
    )
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