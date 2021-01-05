import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity }from 'react-native';

export default function app (){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');  

  function handleSubmit (){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert ('Você está abaixo do peso! ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9){
      alert ('Você está no peso ideal! ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34,9){
      alert ('Você está levemente acima do peso! ' + imc.toFixed(2));
    }  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC.</Text>
        <TextInput 
          style={styles.textInput}
          value={peso}
          onChangeText={ (peso) => setPeso(peso) }
          placeholder={"Digite seu Peso (Kg)"}
          keyboardType="numeric"
        />

        <TextInput 
          style={styles.textInput}
          value={altura}
          onChangeText={ (altura) => setAltura(altura) }
          placeholder={"Digite sua altura(Cm)"}
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ffeecc',    
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginTop: 20,
    textAlign:'center'
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10, 
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  }, 
  button:{
    justifyContent:'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#41aef4',
    borderRadius: 10,     
  },
  buttonText:{
    color: '#fff',
    fontSize: 23
  }
});