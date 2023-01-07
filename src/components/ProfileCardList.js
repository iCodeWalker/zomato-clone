import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileCardList = () => {
  const data = [
    {
      title: 'Food Orders',
      cardData: [
        {
          icon: 'fast-food',
          name: 'Your orders',
        },
        {
          icon: 'heart',
          name: 'Favorite orders',
        },
        {
          icon: 'home',
          name: 'Address book',
        },
        {
          icon: 'chatbox-ellipses',
          name: 'Online ordering help',
        },
      ],
    },

    {
      title: 'Badges 2022',
      cardData: [
        {
          icon: 'medal',
          name: 'Your badges',
        },
      ],
    },
    {
      title: 'Credits & Gift Cards',
      cardData: [
        {
          icon: 'cash',
          name: 'Zomato Credits',
        },
        {
          icon: 'gift',
          name: 'Claim gift card',
        },
      ],
    },
    {
      title: 'More',
      cardData: [
        {
          icon: 'language',
          name: 'Choose language',
        },
        {
          icon: 'star-half',
          name: 'Rate us on play store',
        },
        {
          icon: 'bulb',
          name: 'About',
        },
        {
          icon: 'clipboard',
          name: 'Send feedback',
        },
        {
          icon: 'alert-circle',
          name: 'Report a safety emergency',
        },
        {
          icon: 'log-out',
          name: 'logout',
        },
      ],
    },
  ];
  return data.map(item => {
    return <ProfileCard title={item.title} data={item.cardData} />;
  });
};

export default ProfileCardList;
