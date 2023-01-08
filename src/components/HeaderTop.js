import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationScreen from '../screens/LocationScreen';

const HeaderTop = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.headerContainer}>
          <Icon name="location" size={30} color="#e63946" />
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '800'}}>
              Ganesh Nagar <Icon name="chevron-down" size={20} color="black" />
            </Text>
            <Text style={{color: 'black'}}>Bajpur, Betul</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <LocationScreen handleModalVisibility={handleModalVisibility} />
        </Modal>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            elevation: 50,
            shadowColor: '#52006A',
            padding: 5,
            borderColor: '#D8D5D3',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Icon name="language" size={20} color="#e63946" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile Screen')}>
          <Icon
            name="person-circle"
            size={50}
            color="#a5adff"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  centeredView: {
    flex: 1,
    height: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HeaderTop;
