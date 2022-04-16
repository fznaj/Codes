import {useState} from 'react';
import { Text, TextInput,View, ScrollView,Alert,KeyboardAvoidingView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const countries=countryList.getData();

const AddressScreen = () => {
    const [country,setCountry]=useState(countries[0].code);
    const [fullname,setFullname]=useState('');
    const [phone, setPhone]=useState('');
    const [address, setAddress]=useState('');
    const [city, setCity]=useState('');
    const [zip, setZip]=useState('');

    const onCheckout = () => {
        if(!fullname){
            Alert.alert('Please fill in the fullname field');
        }
    }

    return (

        <KeyboardAvoidingView>
        {/**Verify the view on ios*/}
        <ScrollView style={styles.root}>
        {/*Countries */}
        <View style={styles.row}>
            <Picker selectedValue={country} onValueChange={setCountry}>
                {countries.map(country=>
                    <Picker.Item key={country.code} value={country.code} label={country.name}></Picker.Item>)}
            </Picker>
        </View>

        {/*FullName */}
        <View style={styles.row}>
            <Text style={styles.txt}>Full name</Text>
            <TextInput style={styles.input} placeholder="Full name" value={fullname}
            onChangeText={setFullname}></TextInput>
        </View>
        {/*Phone */}
        <View style={styles.row}>
            <Text style={styles.txt}>Phone Number</Text>
            <TextInput style={styles.input} placeholder="Phone Number" value={phone}
            onChangeText={setPhone} keyboardType={"phone-pad"}></TextInput>
        </View>
        {/*Address */}
        <View style={styles.row}>
            <Text style={styles.txt}>Address</Text>
            <TextInput style={styles.input} placeholder="Address" value={address}
            onChangeText={setAddress}></TextInput>
        </View>
        {/*City */}
        <View style={styles.row}>
            <Text style={styles.txt}>City</Text>
            <TextInput style={styles.input} placeholder="City" value={city}
            onChangeText={setCity}></TextInput>
        </View>
        {/*ZipCode */}
        <View style={styles.row}>
            <Text style={styles.txt}>Zip Code</Text>
            <TextInput style={styles.input} placeholder="Zip Code" value={zip}
            onChangeText={setZip}></TextInput>
        </View>

        <Button txt="Checkout" onPress={onCheckout}></Button>
    </ScrollView>
    </KeyboardAvoidingView>
    
  );
};




export default AddressScreen;