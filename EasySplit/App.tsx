import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native';
import People from './components/people';

export default function App() {
  const [people, setPeople] = useState([
    {key:'1', prices: [0]} 
  ]);

  const [tax, setTax] = useState(0);
  const [tip, setTip] = useState(0);

  const addPerson = () => {
    setPeople((prev) => {
      return [
        ...prev,
        {
          key: Math.floor(Math.random()*1000000).toString(),
          prices:[0]
        }
      ]
    });
  };

  const delPerson = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key)
    });
  };

  const addMeal = (key) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    newArray[idx].prices.push(0);
    setPeople(newArray);
  }

  const delMeal = (key) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    newArray[idx].prices.pop();
    setPeople(newArray);
  }

  const updateMeal = (key, value, index) => {
    const Array = [...people];
    const idx = Array.findIndex(item => item.key == key);
    Array[idx].prices[index] = value;
    setPeople(Array);
  }

  const show = (key) => {
    const Array = [...people];
    const idx = Array.findIndex(item => item.key == key);
    let j = Array[idx];
    console.log(j)
  }

  const updateTax = (a) => {
    setTax(parseFloat(a));
  } 

  const updateTip = (a) => {
    setTip(parseFloat(a));
  } 

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

      <FlatList
        data={people}
        renderItem={({ item }) => (
          <People item={item} del={delPerson} add={addMeal} delM={delMeal} updateM={updateMeal} show={show}/>
        )}
      />
    <Button title="Add Person" onPress={addPerson}/>


      {/* container for tax and tip input boxes */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1, margin:10}}>
          <Text style={[styles.body2,{margin:10}]}>Los Angeles Tax</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={updateTax}
            placeholder='Input Tax %'
            keyboardType="numeric" 
          />
        </View>

        <View style={{flex:1, margin:10}}>
          <Text style={[styles.body2,{margin:10}]}>Tip </Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={updateTip}
            placeholder='Input Tip $'
            keyboardType="numeric" 
          />
        </View>
        
      </View> 
      {<Button title="Submit"></Button>}

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