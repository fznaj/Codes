import { StyleSheet, Text, View, Image, FlatList,useWindowDimensions} from 'react-native';
import {useState,useCallback} from 'react';

const ImageCaroussel = ({images}:{images:string[]}) => {
    const [activeIndex,setActiveIndex]=useState(0);
    const windowWidth=useWindowDimensions().width;

    const onFlatListUpdate=useCallback(({viewableItems}) => {
        if(viewableItems.length>0){
            setActiveIndex(viewableItems[0].index || 0);
        }
    },[]);

  return (
    <View style={styles.root}>
        <FlatList
        data={images}
        renderItem={({item})=>(
            <Image style={[styles.img, {width:windowWidth-20}]} source={{uri:item}}></Image>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth-40}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
            viewAreaCoveragePercentThreshold:50,
        }}
        onViewableItemsChanged={onFlatListUpdate}
        >
        </FlatList>
            <View style={styles.dots}>
            {images.map((image, index) =>(
                <View style={[styles.dot,
                    {backgroundColor:index===activeIndex?"#c9c9c9":"#ededed"}]}></View>
            ))}    
            </View>
            
    </View>
  );
};

const styles=StyleSheet.create({
    root:{

    },
    img:{
        margin:10,
        height:250,
        resizeMode:'contain',
    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor:"#c9c9c9",
        margin:5,
    },
    dots:{
        flexDirection:'row',
        justifyContent: 'center'
    }
});

export default ImageCaroussel;