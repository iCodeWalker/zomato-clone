import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import MapComponent from '../components/MapComponent';
import GetLocation from 'react-native-get-location';
import Icon from 'react-native-vector-icons/Ionicons';
import PlaceOrderButton from '../components/PlaceOrderButton';

const MapScreen = ({navigation}) => {
  const [coordinates, setCoordinates] = useState({lat: 0, long: 0});

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setCoordinates({lat: location.latitude, long: location.longitude});
        console.log(location.latitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return <MapComponent coordinates={coordinates} navigation={navigation} />;
  // <View>
  {
    /* <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            size={25}
            style={styles.iconStyle}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
          Choose delivery location
        </Text>
      </View> */
  }
  {
    /* 
      <View style={styles.textInputContainer}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="search" size={25} color="#e63946" />
          <TextInput
            placeholder="Search for area, street name..."
            style={{fontSize: 15}}
          />
        </View>
      </View> */
  }
  //   <View style={{flex:1, width: '100%'}}>
  //     <MapComponent coordinates={coordinates} navigation={navigation} />
  //   </View>
  {
    /* </View> */
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf2fb',
    flex: 1,
  },

  iconStyle: {
    margin: 16,
  },

  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 10,
    padding: 5,
    borderColor: '#D8D5D3',
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

export default MapScreen;
