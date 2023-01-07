import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileCardItem = ({icon, itemName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={`${icon}-outline`} color="grey" size={20} />
      </View>
      <View style={styles.itemNameContainer}>
        <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
          {itemName}
        </Text>
        <Icon name="chevron-forward-outline" color="black" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: '#D8D5D3aa',
    padding: 5,
  },
  itemNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D5D3',
    flex: 2,
  },
});

export default ProfileCardItem;
