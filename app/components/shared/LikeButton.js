import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {primaryColor} from '../../theme/colors';

const LikeButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Icon name="heart" size={26} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 55,
    borderRadius: 20,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LikeButton;
