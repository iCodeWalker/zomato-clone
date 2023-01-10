import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MenuListItem from './MenuListItem';
import Icon from 'react-native-vector-icons/Ionicons';

const CuisineSection = ({
  cuisines,
  handleSlideSection,
  handleSlideBtnData,
  emptySlideBtnData,
  slideBtnData,
}) => {
  const [itemClicked, setItemClicked] = useState(0);

  const handleSectionClick = id => {
    setItemClicked(prevId => (prevId === id ? null : id));
  };

  return cuisines.map((item, index) => {
    return (
      <View key={index} style={styles.container}>
        {itemClicked === index ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                handleSectionClick(index);
              }}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>
                  {item.sectionName} ({item.dishes.length})
                </Text>
                <Icon name="chevron-up" size={25} style={{color: 'black'}} />
              </View>
            </TouchableOpacity>
            <View>
              {item.dishes.map(item => {
                return (
                  <MenuListItem
                    item={item}
                    handleSlideSection={handleSlideSection}
                    handleSlideBtnData={handleSlideBtnData}
                    emptySlideBtnData={emptySlideBtnData}
                    slideBtnData={slideBtnData}
                  />
                );
              })}
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleSectionClick(index);
            }}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                {item.sectionName} ({item.dishes.length})
              </Text>
              <Icon name="chevron-down" size={25} style={{color: 'black'}} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 16,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#52006A',
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#ff4d6d',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
});

export default CuisineSection;
