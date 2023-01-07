import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilePageUserRating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Icon name="star-outline" color="grey" size={20} />
        </View>
        <Text style={styles.textContainer}>Your rating</Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.ratingContainer}>
          4.69 <Icon name="star" color="yellow" />
        </Text>
        <Icon name="chevron-forward-outline" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    borderRadius: 15,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: '#D8D5D3aa',
    padding: 5,
  },
  textContainer: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginLeft: 5,
  },
  ratingContainer: {
    backgroundColor: '#D8D5D3aa',
    borderRadius: 5,
    padding: 2,
  },
});

export default ProfilePageUserRating;
