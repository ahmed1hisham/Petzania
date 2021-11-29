import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {lightTextColor, primaryColor, secondaryBGColor} from '../theme/colors';

const HomeHeader = props => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="menu" size={35} color={primaryColor} />
      </View>
      <View style={styles.middleContentContainer}>
        <Text style={styles.subTextStyle}>Location</Text>
        <Text style={styles.locationTextStyle}>
          {props.city}, <Text style={{fontWeight: '400'}}>{props.country}</Text>
        </Text>
      </View>
      <View>
        <Image
          style={styles.userImageStyle}
          fadeDuration={0}
          source={{
            uri: props.userImage,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: secondaryBGColor,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleContentContainer: {justifyContent: 'center', alignItems: 'center'},
  subTextStyle: {
    color: lightTextColor,
    fontSize: 14,
    fontWeight: '500',
  },
  userImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  locationTextStyle: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
