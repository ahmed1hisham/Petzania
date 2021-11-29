import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {lightTextColor, primaryColor} from '../theme/colors';

const PostingUserDetails = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userImageStyle}
        fadeDuration={0}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>{props.name}</Text>
        <Text style={styles.subTextStyle}>{props.type}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={[styles.subTextStyle, {fontWeight: '400'}]}>
          {props.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  subTextStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: lightTextColor,
  },
  userImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  nameContainer: {marginLeft: 10},
  nameStyle: {
    fontSize: 16,
    color: primaryColor,
    fontWeight: '700',
    marginBottom: 2,
  },
  dateContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default PostingUserDetails;
