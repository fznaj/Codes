import {useState, useEffect} from 'react';
import { Text, ScrollView,ActivityIndicator} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {useRoute} from '@react-navigation/native';

import {DataStore} from 'aws-amplify';
import {Product,CartProduct} from '../../models';

import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCaroussel from '../../components/ImageCaroussel';


const ProductScreen = () => {
 // const [product,setProduct]=useState<Product | undefined>(null);
  const [selectedOption, setSelectedOption]=useState(product.options ? product.options[0] : null);
 // const [selectedOption, setSelectedOption]=useState<string | null>(null);
  const [quantity, setQuantity]=useState(0);

const route = useRoute();

/*useEffect(()=>{
  if(!route?.params[0]?.id){
    return;
  }
  DataStore.query(Product,route.params[0]?.id).then(setProduct);
},[route.params[0]?.id]);

  useEffect(()=>{
    if(product?.options){
      setSelectedOption(product.options[0]);
    }
  },[product]);

  if(!product){
    return <ActivityIndicator></ActivityIndicator>;
  } */

  const onAddToCart = () =>{
   // const newCartProduct = new CartProduct({
      
    //});
  }

  return (
    <ScrollView style={styles.root}>
        <Text style={styles.title}>{product.title}</Text>

        {/*Caroussel */}
        <ImageCaroussel images={product.images}></ImageCaroussel>
        {/*Optionselector */}
        <Picker selectedValue={selectedOption} 
        onValueChange={(itemValue)=>setSelectedOption(itemValue)}>
          {product.options.map(option =>(
            <Picker.Item key={product.id} label={option} value={option}></Picker.Item>
          ))}
          
        </Picker>

        {/**Price */}
        <Text style={styles.price}>€{product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> €{product.oldPrice.toFixed(2)}
            </Text>)}
          </Text>

        {/**Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/**Quantity selector*/}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity}></QuantitySelector>
        {/**Button */}
        <Button txt={"Adddddd"} onPress={onAddToCart}></Button>
        <Button txt={"Buyyy"} onPress={()=>{console.warn("BOUGHT")}}></Button>
    </ScrollView>
  );
};


export default ProductScreen;