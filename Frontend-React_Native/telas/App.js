import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios'
import Header from './Header'
//<Button onPress={() => navigation.navigate('tela1')} title='ir para proxima pagina' color='#000'/>
//() => navigation.navigate('tela1')
export default function App({navigation}) {

  const [header, setH] = React.useState('');
  const [queryS, setQueryS] = React.useState('');
  const [red, setRed] = React.useState('white');
  const [borda, setBorda] = React.useState('black');

  async function buscar(){
    const res = await axios.get('http://rcfvinicius.pythonanywhere.com/login')
        const endereco = {
            data:res.data.Datalog
        } 
        setH(JSON.stringify(endereco))
    }
  //
async function envHeader(){
/* axios({method: 'post', url: 'http://rcfvinicius.pythonanywhere.com/axios', data: {header:header}}); */
setQueryS('')
    await axios.post('http://rcfvinicius.pythonanywhere.com/login', {chave:header})
    //console.log('a')
    let res = await axios.get('http://rcfvinicius.pythonanywhere.com/logon')
    //console.log(res.data.query)
    if(res.data.query == 'ok'){
    setRed('white')
    setBorda('black')
    navigation.navigate('tela1')
    }
    else{
      setQueryS('CHAVE INCORRETA')
      setRed('red')
      setBorda('red')
    }
  }

  return (
    <>
    <Header title='Login' fundo={{backgroundColor:red}} cor={{color:'black'}}/>
    <View style={styles.container}>
      <Text style={styles.text}>Digite a chave de acesso.</Text>
      <TextInput
            placeholder="Digite a chave"
            onChangeText={function(tex){setH(tex)}}
            style={[styles.textImput, {borderColor:borda}]}
            secureTextEntry={true}
            />
      <Text style={styles.err}>{queryS}</Text>

      <Button title="   enviar   " onPress={envHeader} color='#000'/>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textImput:{
    //borderColor: 'black',
    borderRadius: 0,
    backgroundColor: '#fff',
    width:300,
    borderWidth:2
  },
  err:{
    color:'red'
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    paddingLeft:26,
  }
});
