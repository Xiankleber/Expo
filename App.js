import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>

      
       <TextInput
         placeholder ="Teste1"
         style={{ width:200, borderColor: "black",borderWidth: 1, padding: 10}}
       />
     <Button title ='Adicionar'/> 
     </View>
      <View/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  
});
