import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
      root: {
        top:20,
        borderRadius:5,
        borderColor:'black',
        backgroundColor: '#fff',
        marginVertical:5,
        margin:20,
      },
      row:{
        flexDirection:'row',
      },
      img: {
        flex:2,
        width:150,
        height:100,
        resizeMode:'cover',
        margin:5,
      },
      info:{
          padding:10,
          flex:3,
    },
      title:{
        fontSize:16,
      },
      price:{
        fontSize:16,
        fontWeight:'bold',
      },
      oldPrice:{
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through',
      },
      qs:{
        marginVertical:10,
        alignItems: 'flex-end',
        margin:15,
      },

    });

    export default styles;