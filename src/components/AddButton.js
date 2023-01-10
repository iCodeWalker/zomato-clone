import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddButton = ({
  dish,
  handleSlideSection,
  handleSlideBtnData,
  emptySlideBtnData,
  slideBtnData,
}) => {
  const [itemCount, setItemCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([{}]);

  const handleClick = () => {
    setItemCount(itemCount + 1);
    handleSlideSection(!modalVisible);
    setData(prev => {
      console.log(prev);
    });
  };

  const handleDecreaseCount = () => {
    setItemCount(itemCount - 1);
    setData([]);
  };

  useEffect(() => {
    handleSlideBtnData(dish);

    if (data?.length === 0) {
      handleSlideSection(false);
      emptySlideBtnData();
    }
  }, [data]);

  if (data?.length === 0) {
    handleSlideSection(false);
  }

  return itemCount === 0 ? (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.addTextStyle}>ADD</Text>
        <View style={styles.addIconContainer}>
          <Text style={styles.addIconStyle}>+</Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={{...styles.container, backgroundColor: '#ff4d6d'}}>
      <TouchableOpacity onPress={handleDecreaseCount}>
        <Icon name="remove-outline" size={20} color="#ffffff" />
      </TouchableOpacity>
      <Text style={styles.itemCountStyle}>{itemCount}</Text>
      <TouchableOpacity onPress={handleClick}>
        <Icon name="add-outline" size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ff4d6d',
    backgroundColor: '#fae0e4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addIconContainer: {position: 'absolute', top: 0, right: 8},
  addIconStyle: {fontSize: 18, fontWeight: '600', color: '#ff4d6d'},
  addTextStyle: {
    color: '#ff4d6d',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  itemCountStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default AddButton;
