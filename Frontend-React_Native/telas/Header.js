import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Header(props){

    return (
        <View style={[styles.container, props.fundo]}>
            <Text>.</Text>
            <Text style={[styles.texto, props.cor]}>{props.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
   container: {
     height:60,
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    fontWeight:'bold',
    //color:'black',
}
 });


export default Header;