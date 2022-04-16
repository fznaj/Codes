import { StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import React from 'react';

interface BtnProps{
    txt:string,
    onPress:()=>void;
}

const Button = ({txt,onPress}) => {

  return (
    <Pressable style={styles.root} onPress={onPress}>
        <Text style={styles.btnTxt}>{txt}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:20,
        height:40,
        marginVertical:10,
        backgroundColor:'#bf1f9a',
        borderWidth:1,
        borderColor:'black'
    },
    btnTxt:{ 
        fontSize:18,
        fontWeight: 'bold',
    },
});

export default Button;