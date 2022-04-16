import { StyleSheet, Text, View, Image, FlatList,ScrollView} from 'react-native';
import CartProduct from '../../components/CartProduct';
import cartProducts from '../../data/cart';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {

  const navigation = useNavigation();

  const totalPrice = cartProducts.reduce(
    (sum,item)=>
    sum + item.product.price * item.quantity,0);

  const onCheckout=()=>{
    navigation.navigate("address" as never);
  }

  return (
    <View style={styles.page}>

        {/*Product Component*/}

        <FlatList
        data={cartProducts}
        contentContainerStyle={{paddingBottom:30,}}
        renderItem={({item})=><CartProduct cartItem={item}></CartProduct>}
        showsVerticalScrollIndicator={false}></FlatList>

      <View style={styles.pricing}>
        <Text style={styles.sub}>Subtotal ({cartProducts.length} item(s)) : {' '}
        <Text style={styles.total}>€{totalPrice.toFixed(2)}</Text>
        </Text>

        <Button
          txt="Checkout"
          onPress={onCheckout}></Button>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    paddingBottom:100,
  },
  sub:{
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'sans-serif-medium',
  },
  total:{
    fontSize:18,
    fontWeight:'bold',
    color:'#bf1f9a',
  },
  pricing:{
    padding:10,
  },
});


export default CartScreen;