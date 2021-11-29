import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/Entypo';

const PageHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onBackPress}
        style={styles.leftIconContainer}>
        <Icon name="chevron-left" size={32} color={'white'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onChatPress}
        style={styles.rightIconContainer}>
        <Icon name="chat" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight() + 15,
    width: '100%',
    paddingHorizontal: 20,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PageHeader;
