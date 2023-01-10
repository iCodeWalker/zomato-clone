import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomSlideButton = ({data, navigation}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 12,
              }}>
              {data.length} ITEM -
            </Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: 16,
                }}>
                $120
              </Text>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: 12,
                }}>
                plus taxesss
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Order Screen')}>
            <View>
              <Text style={{...styles.textStyle, fontSize: 18}}>
                Next{' '}
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
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 15,
    paddingTop: 20,
    paddingHorizontal: 16,
    shadowColor: 'red',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#ff4d6d',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontWeight: '700',
    color: '#ffffff',
    marginRight: 3,
    marginVertical: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default BottomSlideButton;
