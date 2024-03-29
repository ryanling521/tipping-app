import React, {cloneElement, useState, useRef} from 'react';
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
    {key: 1, prices: [], preTotal:0, postTotal:0, name: 'Person 1', color: true}, 
    {key: 2, prices: [], preTotal:0, postTotal:0, name: 'Person 2', color: true} //Holding a key identifier, price of each meal, a total pre-tax/tip, and a total post-tax/tip 
  ]);

  const [tax, setTax] = useState(0);
  const [tip, setTip] = useState(0);
  
  // const [numberOfPeople, setNumberOfPeople] = useState(0);

  const resetColor = () => {
    const newArray = [...people];
    for(let i = 0; i < newArray.length; i++)
    {
      newArray[i].color = true;
    }
    setPeople(newArray);
  }

  const changeColor = (key) => {
    const Array = [...people];
    const idx = Array.findIndex(item => item.key == key);
    Array[idx].color = !(Array[idx].color)
    setPeople(Array); 
    console.log(Array)
  }

  const addPerson = () => {
    const temp = [...people,
      {
        key: people.length + 1,
        prices:[],
        name: 'Person ' + (people.length + 1)  ,
        color: true
      }
    ];
    for(let i = 0; i < temp.length; i++)
    {
      temp[i].key = i+1;
    }
    setPeople(temp);
  };

  const delPerson = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key)
    });
  };

  const delLastPerson = () => {
    if (people.length > 2) {
      people.pop();
      setPeople((prev) => {
        return [
          ...prev,
        ]
      });
    }
  };

  const splitMeal = (key, index) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    const price = newArray[idx].prices[index];
    let count = 1;
    for(let i = 0; i < newArray.length; i++)
    {
      if(newArray[i].color == false)
      count++;
    }
    const amt = price/count;

    for(let i = 0; i < newArray.length; i++)
    {
      if(newArray[i].key == key)
      {
        newArray[i].prices[index] = amt;
        continue;
      }
      if(newArray[i].color == false)
      {
        newArray[i].prices.push(amt);
      }
    }
    setPeople(newArray);
  }

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

  const setName = (key, name) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    newArray[idx].name = name;
    setPeople(newArray);
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
      const preTotal = person.prices.reduce((acc, curr) => acc + curr, 0).toFixed(2);
      const postTotal = (preTotal * (1 + (tax / 100))) + (tip / people.length);
      return { ...person, preTotal, postTotal };
    });
  
    setPeople(updatedPeople);
    
  }

  const clearAll = () => {
      setPeople([
        {key:'1', prices: [], preTotal:0, postTotal:0, name: 'Person1'},
        {key:'2', prices: [], preTotal:0, postTotal:0, name: 'Person2'}
      ])
  }

  const clearMeal = (key) => {
    const newArray = [...people];
    const idx = newArray.findIndex(item => item.key == key);
    while(newArray[idx].prices.length > 0)
    {
      newArray[idx].prices.pop();
    }
    newArray[idx].prices.push(0);
    setPeople(newArray);
  }

  return (
    <View>
      {/* nestedScrollEnabled={true} allows us to nest the FlatList in the ScrollView component */}
      <ScrollView nestedScrollEnabled={true}>

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

        {people.map((item) => (
          <People
            persons={people}
            key={item.key}
            itemKey={item.key}
            key={item.key}
            item={item}
            del={delPerson}
            add={addMeal}
            delM={delMeal}
            updateM={updateMeal}
            log={log}
            clearMeal={clearMeal}
            setN={setName}
            color={changeColor}
            splitMeal={splitMeal}
            resetColor={resetColor}
          />
        ))}


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

        <View>
          {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.body}>{item.name} pays {item.postTotal}</Text>
            </View>
          ))}
        </View>
    
      </ScrollView>
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