import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ConfirmLocationButton = () => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Icon name="location" size={30} color="#ff4d6d" />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
              Ganesh Nagar
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              Bajpur, Betul
            </Text>
          </View>
        </View>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View>
              <Text style={styles.textStyle}>Confirm location</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 60,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 15,
    paddingTop: 20,
    paddingHorizontal: 16,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 20,
      height: 15,
    },

    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#ff4d6d',
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ConfirmLocationButton;
