import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from 'react-native';

import {secondaryColor} from '../../theme/colors';

const {width, height} = Dimensions.get('window');
const PinkButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 130,
    height: 55,
    borderRadius: 20,
    backgroundColor: secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {fontSize: 18, color: 'white', fontWeight: 'bold'},
});

export default PinkButton;
