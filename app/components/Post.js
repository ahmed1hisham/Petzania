import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Entypo';

import {lightTextColor, primaryColor, secondaryBGColor} from '../theme/colors';

const {width, height} = Dimensions.get('window');

const Post = props => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const {pet} = props;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.imageStyle}
            source={
              pet.photos.length > 0
                ? {
                    uri: pet.photos[0].medium,
                    priority: FastImage.priority.normal,
                  }
                : require('../assets/images/DefaultPetImage.png')
            }
            resizeMode={FastImage.resizeMode.cover}
            onLoadStart={() => {
              setIsImageLoading(true);
            }}
            onLoadEnd={() => {
              setIsImageLoading(false);
            }}
          />
          {isImageLoading ? (
            <View style={styles.imageLoaderContainer}>
              <ActivityIndicator size="small" color={secondaryBGColor} />
            </View>
          ) : null}
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardContentContainer}>
            <Text style={styles.nameStyle} numberOfLines={1}>
              {pet.name}
            </Text>
            <Text style={styles.subTextStyle}>{pet.type}</Text>
            <Text style={[styles.subTextStyle]}>{pet.age}</Text>
            <View style={styles.addressContainer}>
              <Icon name="location-pin" size={18} color={lightTextColor} />
              <Text
                style={[
                  styles.subTextStyle,
                  {
                    width: '90%',
                    marginBottom: 0,
                  },
                ]}
                numberOfLines={1}>
                {pet.contact.address.city +
                  ', ' +
                  pet.contact.address.state +
                  ', ' +
                  pet.contact.address.country}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    width: width - 60,
    height: width * 0.45 - 30,
  },
  imageContainer: {
    width: width * 0.4,
    height: width * 0.5,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: lightTextColor,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  imageLoaderContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTextStyle: {
    color: lightTextColor,
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -4,
  },
  cardContentContainer: {
    height: '100%',
    padding: 20,
  },
  cardContainer: {flex: 1},
});

export default React.memo(Post);
