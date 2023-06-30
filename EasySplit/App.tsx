import React, {cloneElement, useState} from 'react';
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
  ScrollView,
} from 'react-native';
import People from './components/people';

export default function App() {
  const [people, setPeople] = useState([
    {key: 1, prices: [0], preTotal:0, postTotal:0, name: 'Person 1'} //Holding a key identifier, price of each meal, a total pre-tax/tip, and a total post-tax/tip 
  ]);

  const [tax, setTax] = useState(0);
  const [tip, setTip] = useState(0);
  // const [numberOfPeople, setNumberOfPeople] = useState(0);

  const addPerson = () => {
    setPeople((prev) => {
      return [
        ...prev,
        {
          // key: Math.floor(Math.random()*1000000).toString(),
          key: people.length + 1,
          prices:[0],
          name: 'Person ' + (people.length + 1)  
        }
      ]
    });
  };

  const delPerson = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key)
    });
  };

  const delLastPerson = () => {
    people.pop();
    setPeople((prev) => {
      return [
        ...prev,
      ]
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
    Array[idx].prices[index] = parseFloat(value);
    setPeople(Array); 
  }

  const log = (key) => {
    const Array = [...people];
    const idx = Array.findIndex(item => item.key == key);
    let j = Array[idx];
    console.log(people);
  }

  const updateTax = (a) => {
    setTax(parseFloat(a));
  } 
  
  const updateTip = (a) => {
    setTip(parseFloat(a));
  } 


  const calcTotal = () => {
    const updatedPeople = people.map((person) => {
      const preTotal = person.prices.reduce((acc, curr) => acc + curr, 0);
      const postTotal = (preTotal * (1 + (tax / 100))) + (tip / people.length);
      return { ...person, preTotal, postTotal };
    });
  
    setPeople(updatedPeople);
    
  }

  const clearAll = () => {
    setPeople([
      {key:'1', prices: [0], preTotal:0, postTotal:0, name: 'Person 1'}
    ])
  }

  const clearMeal = (key) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    while(newArray[idx].prices.length > 0)
    {
      newArray[idx].prices.pop();
    }
    setPeople(newArray);
  }

  return (
    <View>
      {/* nestedScrollEnabled={true} allows us to nest the FlatList in the ScrollView component */}
      {/* <ScrollView nestedScrollEnabled={true}> */}

        {/* group image and title */}
        <View style={styles.header}>
          <Image source={require('./assets/eating_together.png')}/>
          <Text style={styles.headerText}>Easy Split</Text>
        </View>
        

        {/* input box for number of people */}
        <View style={styles.inputPeopleContainer}>
          <Button
            title="-"
            onPress={delLastPerson}
          />
          <Text style={styles.body}>Number of people: {people.length} </Text>

          <Button
            title="+"
            onPress={addPerson}
          />
        </View>

        <FlatList
          data={people}
          renderItem={({ item }) => (
            <People item={item} del={delPerson} add={addMeal} delM={delMeal} updateM={updateMeal} log={log} clearMeal={clearMeal}/>
          )}
        />
        <Button title="Clear All" onPress={clearAll}/>


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
            <Text style={[styles.body2,{margin:10}]}>Tip</Text>
            <TextInput 
              style={styles.inputBox}
              onChangeText={updateTip}
              placeholder='Input Tip $'
              keyboardType="numeric" 
            />
          </View>
          
        </View> 
        <Button title="calc total" onPress={calcTotal}/>
        
        {/* Render the calculated results */}
        <FlatList 
          data={people}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.body}>Person {item.key} pays {item.postTotal}</Text>
            </View>
          )}
        />
    
      {/* </ScrollView> */}
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