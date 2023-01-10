import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationScreen from '../screens/LocationScreen';

const HeaderTop = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.headerContainer}>
          <Icon name="location" size={30} color="#e63946" />
          <View>
            <Text style={styles.textStyle}>
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
          <LocationScreen
            handleModalVisibility={handleModalVisibility}
            navigation={navigation}
          />
        </Modal>
      </View>

      <View style={styles.iconsContainer}>
        <View style={styles.langIconContainer}>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    height: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  langIconContainer: {
    elevation: 50,
    shadowColor: '#52006A',
    padding: 5,
    borderColor: '#D8D5D3',
    borderWidth: 1,
    borderRadius: 10,
  },
  textStyle: {fontSize: 18, color: 'black', fontWeight: '800'},
});

export default HeaderTop;
