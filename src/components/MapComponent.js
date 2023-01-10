import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import ConfirmLocationButton from './ConfirmLocationButton';

const MapComponent = ({coordinates, navigation}) => {
  //   const access_key = '34a7bcf3c5d93c2057665ee9ee8644b0';
  //   const lat = 40.7638435;
  //   const long = -73.9729691;
  //   let url = `http://api.positionstack.com/v1/reverse?access_key=${access_key}&query=${lat},${long}`;

  //   useEffect(() => {
  //     const params = {
  //       access_key: access_key,
  //       query: '40.7638435,-73.9729691',
  //     };

  //     axios
  //       .get('https://api.positionstack.com/v1/reverse/', {params})
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          region={{
            latitude: coordinates.lat,
            longitude: coordinates.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}>
          <Marker
            draggable
            coordinate={{
              latitude: coordinates.lat,
              longitude: coordinates.long,
            }}
            title={'Your order will be delivered here'}
            description={'Move the pin to your exact location'}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <ConfirmLocationButton navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  map: {
    height: '100%',
  },
  buttonContainer: {
    position: 'relative',
    bottom: 0,
    right: 0,
  },
});

export default MapComponent;
