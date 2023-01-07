import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import VegIcon from '../components/VegIcon';
import AddButton from '../components/AddButton';
import BottomSlideButton from '../components/BottomSlideButton';
import PlaceOrderButton from '../components/PlaceOrderButton';

const OrderScreen = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
            marginHorizontal: 30,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Cake Walkers
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="ticket-percent"
              color="#3f37c9"
              size={20}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'blue',
                marginLeft: 5,
              }}>
              Coupons
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 10,
            marginVertical: 10,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: 10,
            borderRadius: 20,
          }}>
          <Icon name="alarm" color="green" size={25} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'black',
              marginLeft: 10,
            }}>
            Delivery in 37 min
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            paddingTop: 16,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
              borderLeftWidth: 5,
              borderLeftColor: 'red',
              borderRadius: 4,
              paddingLeft: 15,
              marginTop: 5,
              marginBottom: 10,
            }}>
            Your Order
          </Text>

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 16,
              }}>
              <VegIcon />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '600',
                  marginLeft: 10,
                }}>
                Black Forest Cake
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 16,
                marginHorizontal: 16,
                borderTopWidth: 1,
                borderTopColor: '#D8D5D3',
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
                Add more items
              </Text>
              <Icon name="chevron-forward-outline" color="black" size={20} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 16,
                marginHorizontal: 16,
                borderTopWidth: 1,
                borderTopColor: '#D8D5D3',
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
                Add cooking instructions
              </Text>
              <Icon name="chevron-forward-outline" color="black" size={20} />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            padding: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="ticket-percent"
              color="#3f37c9"
              size={20}
            />
            <Text
              style={{
                fontWeight: '800',
                fontSize: 17,
                color: 'black',
                marginLeft: 10,
              }}>
              Use coupons
            </Text>
          </View>
          <Icon name="chevron-forward-outline" color="black" size={20} />
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
              borderLeftWidth: 5,
              borderLeftColor: 'red',
              borderRadius: 4,
              paddingLeft: 15,
              marginTop: 15,
              marginBottom: 10,
            }}>
            Bill Summary
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
              Item total
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
              $20.00
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              Delivery charge
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              $4
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              Govt. taxes
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              $4
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'grey'}}>
              Feeding India donation |
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#ff4d6d',
                marginLeft: 5,
              }}>
              Donate $3
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              paddingVertical: 15,
              borderTopWidth: 1,
              marginHorizontal: 15,
              borderTopColor: '#D8D5D3',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
              Grand Total
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
              $30.00
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            padding: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                color: 'black',
              }}>
              Your details
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: 'grey',
                marginTop: 2,
              }}>
              Vaibhav Kadwey, 9926702406
            </Text>
          </View>
          <Icon name="chevron-forward-outline" color="black" size={20} />
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            padding: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                color: 'black',
              }}>
              Order for someone else
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: 'grey',
                marginTop: 2,
              }}>
              Send personalised message and e-card
            </Text>
          </View>
          <Icon name="chevron-forward-outline" color="black" size={20} />
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            padding: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                color: 'black',
              }}>
              Cancellation Policy
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: 'grey',
                marginTop: 2,
                paddingRight: 10,
              }}>
              100% cancellation fee will be applicable if you decide to cancel
              the order anytime after order placement. Avoid cancellation as it
              leads to food wastage
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            margin: 10,
            padding: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 14,
                color: 'red',
              }}>
              Orders once placed cannot be cancelled and are non-refundable
            </Text>
          </View>
        </View>
      </ScrollView>
      <PlaceOrderButton navigation={navigation} />
    </View>
  );
};

export default OrderScreen;
