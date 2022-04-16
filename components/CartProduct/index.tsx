import {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';


interface CartProductProps{
    cartItem:{
        id:string,
        quantity:number,
        option?:string,
        product: {
            id:string,
            title:string,
            image:string,
            price:number,
            oldPrice?:number,
    };
};
}

const CartProduct = ({cartItem}:CartProductProps )=> {
    const {quantity:quantityProp,product} = cartItem;
    const [quantity,setQuantity]=useState(quantityProp);

  return (
    <View style={styles.root}>
        <View style={styles.row}>
            <Image style={styles.img} source={{uri:product.image}}></Image>

            <View style={styles.info}>
            <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
            <Text style={styles.price}> € {product.price}
                {product.oldPrice &&(
                    <Text style={styles.oldPrice}>€ {product.oldPrice}</Text>
                )}
            </Text>

            </View>
                
        </View>
        <View style={styles.qs}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}></QuantitySelector>
        </View>
    </View>
  );
};

export default CartProduct;