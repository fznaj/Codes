import {Dimensions, StyleSheet} from 'react-native';

const width=Dimensions.get("screen").width/2-20;

const styles = StyleSheet.create({
      root: {
        height:250,
        backgroundColor:'white',
        width:width,
        marginHorizontal:10,
        borderRadius:10,
        borderColor:'red',
        marginBottom:10,
        padding:10,
      },
      img: {
        flex:3,
        width:width-25,
        height:100,
        resizeMode:'contain',
      },
      info:{
        
        },

      title:{
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'sans-serif-medium',
      },
      price:{
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'sans-serif-medium',
      },
      oldPrice:{
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through',
      },
      icon:{
        alignItems: 'flex-end',
      }

    });
    
    export default styles;