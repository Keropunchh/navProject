import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';

const App = () => {

  const getDataUsingaxios = async () =>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
      alert(JSON.stringify(response.data));
    } catch (error) {
      //handle error
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style= {{fontSize: 20, textAlign: 'center'}}>
        Example of axios in React Native
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingaxios}      
      >
        <Text>Get Data Using axios get</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {   
    justifyContent: 'center',    
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',   padding: 10,width: '100%',
    marginTop: 16,
  },
});
export default App