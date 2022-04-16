import { StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import React from 'react';

const QuantitySelector = ({quantity,setQuantity}) => {

    const onMinus= () => {
        setQuantity(Math.max(0,quantity-1));
    }

    const onPlus= () => {
        setQuantity(quantity+1);
    }

  return (
    <View style={styles.root}>
        <Pressable onPress={onMinus} style={styles.btn}>
            <Text style={styles.btnTxt}> - </Text>    
        </Pressable>

        <Text style={styles.quantity}>{quantity}</Text>

        <Pressable onPress={onPlus} style={styles.btn}>
            <Text style={styles.btnTxt}> + </Text>    
        </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#eba434',
        width:130,
    },
    btn:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#e3e3e3',
    },
    btnTxt:{ 
        fontSize:18,
    },
    quantity:{
        color:'#007eb9',
    }
});

export default QuantitySelector;