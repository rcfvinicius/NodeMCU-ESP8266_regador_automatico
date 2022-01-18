//import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, useCallback } from 'react-native';
import Header from './Header'
import axios from 'axios'
//import { withSafeAreaInsets } from 'react-native-safe-area-context';
//import { set } from 'react-native-reanimated';
//
export default function tela1() {
  const [jsonA, setJsonA] = React.useState('');
  const [jsonB, setJsonB] = React.useState('');
  const [jsonC, setJsonC] = React.useState('');
  const [jsonD, setJsonD] = React.useState('');
  const [jsonE, setJsonE] = React.useState('');
  const [jsonF, setJsonF] = React.useState('');

  const [hora0, setHora0] =React.useState('');
  const [hora1, setHora1] =React.useState('');
  const [hora2, setHora2] =React.useState('');
  const [hora3, setHora3] =React.useState('');
  const [hora4, setHora4] =React.useState('');
  const [hora5, setHora5] =React.useState('');
  const [hora6, setHora6] =React.useState('');
  const [hora7, setHora7] =React.useState('');
  const [hora8, setHora8] =React.useState('');
  const [hora9, setHora9] =React.useState('');
  const [hora10, setHora10] =React.useState('');
  const [hora11, setHora11] =React.useState('');
  const [hora12, setHora12] =React.useState('');
  const [hora13, setHora13] =React.useState('');
  const [hora14, setHora14] =React.useState('');
  const [hora15, setHora15] =React.useState('');
  const [hora16, setHora16] =React.useState('');
  const [hora17, setHora17] =React.useState('');
  const [hora18, setHora18] =React.useState('');
  const [hora19, setHora19] =React.useState('');
  const [hora20, setHora20] =React.useState('');
  const [hora21, setHora21] =React.useState('');
  const [hora22, setHora22] =React.useState('');
  const [hora23, setHora23] =React.useState('');

  const [largura0, setLargura0] =React.useState(0);
  const [largura1, setLargura1] =React.useState(0);
  const [largura2, setLargura2] =React.useState(0);
  const [largura3, setLargura3] =React.useState(0);
  const [largura4, setLargura4] =React.useState(0);
  const [largura5, setLargura5] =React.useState(0);
  const [largura6, setLargura6] =React.useState(0);
  const [largura7, setLargura7] =React.useState(0);
  const [largura8, setLargura8] =React.useState(0);
  const [largura9, setLargura9] =React.useState(0);
  const [largura10, setLargura10] =React.useState(0);
  const [largura11, setLargura11] =React.useState(0);
  const [largura12, setLargura12] =React.useState(0);
  const [largura13, setLargura13] =React.useState(0);
  const [largura14, setLargura14] =React.useState(0);
  const [largura15, setLargura15] =React.useState(0);
  const [largura16, setLargura16] =React.useState(0);
  const [largura17, setLargura17] =React.useState(0);
  const [largura18, setLargura18] =React.useState(0);
  const [largura19, setLargura19] =React.useState(0);
  const [largura20, setLargura20] =React.useState(0);
  const [largura21, setLargura21] =React.useState(0);
  const [largura22, setLargura22] =React.useState(0);
  const [largura23, setLargura23] =React.useState(0);

  const [titulo, setTitulo] = React.useState('');
  const [cor, setCor] = React.useState('');


  function calcLargura(arr){
    let maior = 0
    let i=0
    let largura = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    while(i < 24){
      if(arr[i] > maior){maior = arr[i];}
      i++
    }
    i=0
    while(i < 24){
        if(arr[i] == 0){largura[i] = 0}
        else{largura[i] = (arr[i] * 390)/maior}
      i++
    }
    setLargura0(largura[0]);
    setLargura1(largura[1]);
    setLargura2(largura[2]);
    setLargura3(largura[3]);
    setLargura4(largura[4]);
    setLargura5(largura[5]);
    setLargura6(largura[6]);
    setLargura7(largura[7]);
    setLargura8(largura[8]);
    setLargura9(largura[9]);
    setLargura10(largura[10]);
    setLargura11(largura[11]);
    setLargura12(largura[12]);
    setLargura13(largura[13]);
    setLargura14(largura[14]);
    setLargura15(largura[15]);
    setLargura16(largura[16]);
    setLargura17(largura[17]);
    setLargura18(largura[18]);
    setLargura19(largura[19]);
    setLargura20(largura[20]);
    setLargura21(largura[21]);
    setLargura22(largura[22]);
    setLargura23(largura[23]);

  }

  function hora(){
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let i=0
    while(i < 24){
      if(jsonA.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      if(jsonB.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      if(jsonC.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      if(jsonD.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      if(jsonE.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      if(jsonF.slice(2, -16) == i){arr[i] = arr[i] + 1;}
      i++
    }
    arr[0] = arr[0]-1
    setHora0(arr[0]);
    setHora1(arr[1]);
    setHora2(arr[2]);
    setHora3(arr[3]);
    setHora4(arr[4]);
    setHora5(arr[5]);
    setHora6(arr[6]);
    setHora7(arr[7]);
    setHora8(arr[8]);
    setHora9(arr[9]);
    setHora10(arr[10]);
    setHora11(arr[11]);
    setHora12(arr[12]);
    setHora13(arr[13]);
    setHora14(arr[14]);
    setHora15(arr[15]);
    setHora16(arr[16]);
    setHora17(arr[17]);
    setHora18(arr[18]);
    setHora19(arr[19]);
    setHora20(arr[20]);
    setHora21(arr[21]);
    setHora22(arr[22]);
    setHora23(arr[23]);

    calcLargura(arr);

  }





  async function nivel(){
    const res = await axios.get('http://rcfvinicius.pythonanywhere.com/nivel')
        setJsonF(JSON.stringify(res.data.n));
    }

  async function dat(){
    const res = await axios.get('http://rcfvinicius.pythonanywhere.com/dados')
        setJsonA(JSON.stringify(res.data.a));
        setJsonB(JSON.stringify(res.data.b));
        setJsonC(JSON.stringify(res.data.c));
        setJsonD(JSON.stringify(res.data.d));
        setJsonE(JSON.stringify(res.data.e));
        hora();
        nivel();
    }
    
   dat()

    useEffect(() => {
      if(jsonF == '["Normal"]'){
        setCor('green')
        setTitulo('Nivel de água normal')
      }
      else{
        setCor('red')
        setTitulo('Nivel de água baixo')
      }
    })    
    
  return (
    <>
    <Header title={titulo}  fundo={{backgroundColor:cor}} cor={{color:'white'}}/>
      <ScrollView style={styles.container}>
      <View style={styles.view}>
      <Text style={styles.texto}>{jsonA.slice(2, -2)}</Text>
      <Text style={styles.texto}>{jsonB.slice(2, -2)}</Text>
      <Text style={styles.texto}>{jsonC.slice(2, -2)}</Text>
      <Text style={styles.texto}>{jsonD.slice(2, -2)}</Text>
      <Text style={styles.texto}>{jsonE.slice(2, -2)}</Text>
      </View>
      </ScrollView>

      <ScrollView style={styles.viewdash}>
      <View style={[styles.div, {width:largura0}]}><Text style={styles.textodash}>00:00</Text><Text style={styles.textohora}>{hora0}</Text></View>
      <View style={[styles.div, {width:largura1}]}><Text style={styles.textodash}>01:00</Text><Text style={styles.textohora}>{hora1}</Text></View>
      <View style={[styles.div, {width:largura2}]}><Text style={styles.textodash}>02:00</Text><Text style={styles.textohora}>{hora2}</Text></View>
      <View style={[styles.div, {width:largura3}]}><Text style={styles.textodash}>03:00</Text><Text style={styles.textohora}>{hora3}</Text></View>
      <View style={[styles.div, {width:largura4}]}><Text style={styles.textodash}>04:00</Text><Text style={styles.textohora}>{hora4}</Text></View>
      <View style={[styles.div, {width:largura5}]}><Text style={styles.textodash}>05:00</Text><Text style={styles.textohora}>{hora5}</Text></View>
      <View style={[styles.div, {width:largura6}]}><Text style={styles.textodash}>06:00</Text><Text style={styles.textohora}>{hora6}</Text></View>
      <View style={[styles.div, {width:largura7}]}><Text style={styles.textodash}>07:00</Text><Text style={styles.textohora}>{hora7}</Text></View>
      <View style={[styles.div, {width:largura8}]}><Text style={styles.textodash}>08:00</Text><Text style={styles.textohora}>{hora8}</Text></View>
      <View style={[styles.div, {width:largura9}]}><Text style={styles.textodash}>09:00</Text><Text style={styles.textohora}>{hora9}</Text></View>
      <View style={[styles.div, {width:largura10}]}><Text style={styles.textodash}>10:00</Text><Text style={styles.textohora}>{hora10}</Text></View>
      <View style={[styles.div, {width:largura11}]}><Text style={styles.textodash}>11:00</Text><Text style={styles.textohora}>{hora11}</Text></View>
      <View style={[styles.div, {width:largura12}]}><Text style={styles.textodash}>12:00</Text><Text style={styles.textohora}>{hora12}</Text></View>
      <View style={[styles.div, {width:largura13}]}><Text style={styles.textodash}>13:00</Text><Text style={styles.textohora}>{hora13}</Text></View>
      <View style={[styles.div, {width:largura14}]}><Text style={styles.textodash}>14:00</Text><Text style={styles.textohora}>{hora14}</Text></View>
      <View style={[styles.div, {width:largura15}]}><Text style={styles.textodash}>15:00</Text><Text style={styles.textohora}>{hora15}</Text></View>
      <View style={[styles.div, {width:largura16}]}><Text style={styles.textodash}>16:00</Text><Text style={styles.textohora}>{hora16}</Text></View>
      <View style={[styles.div, {width:largura17}]}><Text style={styles.textodash}>17:00</Text><Text style={styles.textohora}>{hora17}</Text></View>
      <View style={[styles.div, {width:largura18}]}><Text style={styles.textodash}>18:00</Text><Text style={styles.textohora}>{hora18}</Text></View>
      <View style={[styles.div, {width:largura19}]}><Text style={styles.textodash}>19:00</Text><Text style={styles.textohora}>{hora19}</Text></View>
      <View style={[styles.div, {width:largura20}]}><Text style={styles.textodash}>20:00</Text><Text style={styles.textohora}>{hora20}</Text></View>
      <View style={[styles.div, {width:largura21}]}><Text style={styles.textodash}>21:00</Text><Text style={styles.textohora}>{hora21}</Text></View>
      <View style={[styles.div, {width:largura22}]}><Text style={styles.textodash}>22:00</Text><Text style={styles.textohora}>{hora22}</Text></View>
      <View style={[styles.div, {width:largura23}]}><Text style={styles.textodash}>23:00</Text><Text style={styles.textohora}>{hora23}</Text></View>

      </ScrollView>
      <Button title='atualizar' onPress={dat}/>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    
  },
  texto:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    paddingLeft:26,
  },
  textodash:{
    color:'white',
    fontSize:12,
/*     marginTop:7,
    marginLeft:7 */
  },
  textohora:{
    color:'white',
    fontSize:20,
    
  },
  view:{
    marginTop:10,
    alignItems:'center',
    color:'white'
  },
  div:{
    width:100,
    height:50,
    backgroundColor:'black',
    marginBottom:5,
    marginTop:10,
  },
  viewdash:{
    backgroundColor:'green',
    height:500
  } 
});