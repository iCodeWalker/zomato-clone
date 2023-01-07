import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilePageUserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.userNameStyle}>Vaibhav</Text>
        <View style={styles.viewActivityContainer}>
          <Text style={styles.viewActivityText}>View activity</Text>
          <View style={styles.iconContainer}>
            <Icon name="caret-forward-outline" color="red" size={10} />
          </View>
        </View>
      </View>
      <View>
        <Icon name="person-circle" size={120} color="#a5adff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 50,
    shadowColor: 'red',
  },
  textContainer: {display: 'flex', justifyContent: 'space-evenly'},
  userNameStyle: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  viewActivityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewActivityText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'red',
  },
  iconContainer: {
    marginLeft: 5,
  },
});

export default ProfilePageUserCard;
