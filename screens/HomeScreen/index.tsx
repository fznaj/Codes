import { StyleSheet, View, FlatList} from 'react-native';
import ProductItem from '../../components/Product';
import {useState, useEffect} from 'react';
import {DataStore} from 'aws-amplify';
import {Product} from '../../models';

//import products from '../../data/products';

const HomeScreen=({searchVal}:{searchVal:string})=> {
  console.warn(searchVal);

  const[products,setProducts]=useState<Product[]>([]);

  /*useEffect(() => {
    const fetchProducts = async () => {
      const results = await DataStore.query(Product);
      setProducts(results);
    }
    fetchProducts();
  },[]);*/

  useEffect(()=>{
    DataStore.query(Product).then(setProducts);
  },[]);

  return (
    <View style={styles.page}>
        {/*Product Component*/}

        <FlatList columnWrapperStyle={{justifyContent: 'flex-start'}}
         numColumns={2}
         data={products}
        renderItem={({item})=><ProductItem item={item}></ProductItem>}
        showsVerticalScrollIndicator={false}></FlatList>

    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
  },
});

export default HomeScreen;