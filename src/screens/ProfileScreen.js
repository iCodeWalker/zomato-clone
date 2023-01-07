import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileCardList from '../components/ProfileCardList';
import ProfilePageUserCard from '../components/ProfilePageUserCard';
import ProfilePageUserRating from '../components/ProfilePageUserRating';
import QuickLinkCard from '../components/QuickLinkCard';

const quickLinks = [
  {
    iconName: 'heart-outline',
    title: 'Likes',
  },
  {
    iconName: 'card-outline',
    title: 'Payments',
  },
  {
    iconName: 'settings-outline',
    title: 'Settings',
  },
];

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-outline"
          size={25}
          style={styles.iconStyle}
          color="black"
        />
      </TouchableOpacity>

      <ProfilePageUserCard />

      <ScrollView>
        <View>
          <View style={styles.quickLinksContainer}>
            {quickLinks.map((item, index) => {
              return (
                <QuickLinkCard
                  key={index}
                  iconName={item.iconName}
                  title={item.title}
                />
              );
            })}
          </View>
          <ProfilePageUserRating />
          <ProfileCardList />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf2fb',
    flex: 1,
  },
  quickLinksContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    margin: 16,
  },
});

export default ProfileScreen;
