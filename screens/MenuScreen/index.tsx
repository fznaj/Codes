import { StyleSheet, SafeAreaView, View, Image, FlatList,ScrollView} from 'react-native';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {

    const onLogout=()=>{
        Auth.signOut();
    };

  return (
    <SafeAreaView>
        <Button txt="Sign Out" onPress={onLogout}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});


export default MenuScreen;