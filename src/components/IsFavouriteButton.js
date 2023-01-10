import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IsFavouriteButton = ({isFavourite}) => {
  const [isFav, setIsFav] = useState(isFavourite);
  return (
    <View style={styles.isFavContainer}>
      <TouchableOpacity onPress={() => setIsFav(!isFav)}>
        <View style={styles.isFavSubContainer}>
          {isFav ? (
            <Icon name="heart" size={25} color="#e63946" />
          ) : (
            <Icon name="heart-outline" size={25} color="#e63946" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  isFavContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  isFavSubContainer: {
    backgroundColor: '#ffffffaa',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
});

export default IsFavouriteButton;
