import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddButton from './AddButton';
import VegIcon from './VegIcon';
import NonVegIcon from './NonVegIcon';

const MenuListItem = ({
  item,
  handleSlideSection,
  handleSlideBtnData,
  emptySlideBtnData,
  slideBtnData,
}) => {
  const ratingArray = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.vegIconContainer}>
          {item.isVeg ? <VegIcon /> : <NonVegIcon />}
        </View>

        <Text style={styles.dishNameStyle}>{item.dishName}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingIconContainer}>
            {ratingArray.map((item, index) => {
              return (
                <Icon
                  name="star"
                  size={14}
                  color="#fdc500"
                  style={{marginLeft: 2}}
                />
              );
            })}
          </View>
          <View>
            <Text style={styles.reviewTextStyle}>{item.reviews} reviews</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={styles.dishPriceTextStyle}>{item.dishPrice}</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/images/burger.jpg')}
          style={styles.imageStyle}
        />
        <View style={styles.buttonContainer}>
          <AddButton
            dish={item}
            handleSlideSection={handleSlideSection}
            handleSlideBtnData={handleSlideBtnData}
            emptySlideBtnData={emptySlideBtnData}
            slideBtnData={slideBtnData}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderStyle: 'dashed',
  },
  subContainer: {
    width: '50%',
  },
  vegIconContainer: {
    marginVertical: 10,
  },
  dishNameStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fff6cc',
    borderWidth: 1,
    borderColor: '#ffe97f',
    borderRadius: 5,
  },
  reviewTextStyle: {
    marginLeft: 10,
    fontWeight: '600',
    color: 'black',
  },
  dishPriceTextStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 15,
    borderWidth: 2,
  },
  buttonContainer: {
    position: 'absolute',
    top: 130,
    right: 20,
    left: 20,
  },
});

export default MenuListItem;
