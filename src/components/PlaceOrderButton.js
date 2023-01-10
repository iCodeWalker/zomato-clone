import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceOrderButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.amountStyle}>$30.00</Text>

            <Text style={styles.amountStyle}>Total</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Order Placed Screen')}>
            <View>
              <Text style={styles.textStyle}>
                Place Order{' '}
                <Icon name="caret-forward-outline" size={14} color="#ffffff" />
              </Text>
            </View>
          </TouchableOpacity>
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#ff4d6d',
  },
  amountStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginRight: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default PlaceOrderButton;
