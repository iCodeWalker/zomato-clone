import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const QuickLinkCard = ({iconName, title}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={30} color="black" />
      <Text style={{fontWeight: '600', color: 'black', fontSize: 13}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
});

export default QuickLinkCard;
