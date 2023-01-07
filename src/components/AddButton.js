import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSlideButton from './BottomSlideButton';

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

  // useEffect(() => {
  //   return () => {
  //     emptySlideBtnData();
  //   };
  // });

  return itemCount === 0 ? (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          padding: 5,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#ff4d6d',
          backgroundColor: '#fae0e4',
        }}>
        <Text
          style={{
            color: '#ff4d6d',
            fontWeight: '700',
            fontSize: 20,
            textAlign: 'center',
          }}>
          ADD
        </Text>
        <View style={{position: 'absolute', top: 0, right: 8}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#ff4d6d'}}>
            +
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={{
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ff4d6d',
        backgroundColor: '#ff4d6d',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleDecreaseCount}>
        <Icon name="remove-outline" size={20} color="#ffffff" />
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: '700', color: '#ffffff'}}>
        {itemCount}
      </Text>
      <TouchableOpacity onPress={handleClick}>
        <Icon name="add-outline" size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
