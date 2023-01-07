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

const PlaceOrderButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#ffffff',
                  }}>
                  $30.00
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#ffffff',
                      marginRight: 2,
                    }}>
                    Total
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Order Placed Screen')}>
                <View>
                  <Text style={styles.textStyle}>
                    Place Order{' '}
                    <Icon
                      name="caret-forward-outline"
                      size={14}
                      color="#ffffff"
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Pressable>
        </View>
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

export default PlaceOrderButton;
