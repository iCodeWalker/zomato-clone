import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileCardItem from './ProfileCardItem';

const ProfileCard = ({title, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => {
        return (
          <ProfileCardItem key={index} icon={item.icon} itemName={item.name} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 10,
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    borderLeftWidth: 5,
    borderLeftColor: 'red',
    borderRadius: 4,
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default ProfileCard;
