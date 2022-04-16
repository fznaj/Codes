import { Text, View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface ProductProps{
    item: {
        id:string,
        title:string,
        image:string,
        price:number,
        oldPrice?:number,
        colors?:string[],
        options?:string[],
    };
}

const ProductItem = ({item}:ProductProps )=> {
    const navigation = useNavigation();

    const onPress=()=>{
        navigation.navigate('productDetails' as never,{id:item.id} as never);
    };

  return (
    <Pressable onPress={onPress} style={styles.root}>
        <Image style={styles.img} source={{uri:item.image}}></Image>

        <View style={styles.info}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            <Text style={styles.price}>€{item.price.toFixed(2)}
                {item.oldPrice &&(
                    <Text style={styles.oldPrice}>€ {item.oldPrice.toFixed(2)}</Text>
                )}
            </Text>
            <View style={styles.icon}>
                <FontAwesome
                name="heart-o"
                size={25}></FontAwesome>
            </View>
        </View>

    </Pressable>
  );
};

export default ProductItem;