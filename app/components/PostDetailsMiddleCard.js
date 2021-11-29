import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {lightTextColor, primaryColor} from '../theme/colors';

const {width} = Dimensions.get('window');

const PostDetailsMiddleCard = props => {
  const {pet} = props;
  return (
    <View style={styles.cardContainerStyle}>
      <Text style={styles.nameStyle} numberOfLines={1}>
        {pet.name}
      </Text>
      <View style={styles.secondRowContainer}>
        <Text style={styles.subTextStyle}>{pet.type}</Text>
        <Text style={styles.subTextStyle}>{pet.age + ' ' + pet.gender}</Text>
      </View>
      <View style={styles.thirdRowContainer}>
        <Icon name="location-outline" size={22} color={lightTextColor} />
        <Text
          style={[
            styles.subTextStyle,
            {
              marginBottom: 0,
              marginLeft: 1,
            },
          ]}
          numberOfLines={1}>
          {pet.contact.address.city +
            ', ' +
            pet.contact.address.state +
            ', ' +
            pet.contact.address.country +
            ' ' +
            pet.contact.address.postcode}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: width - 60,
    height: 122,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginTop: -61,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  nameStyle: {
    color: primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTextStyle: {
    color: lightTextColor,
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
  },
  secondRowContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  thirdRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -4,
  },
});

export default PostDetailsMiddleCard;
