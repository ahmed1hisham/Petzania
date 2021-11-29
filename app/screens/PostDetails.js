import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';

import {secondaryBGColor} from '../theme/colors';
import LikeButton from '../components/shared/LikeButton';
import PageHeader from '../components/shared/PageHeader';
import PinkButton from '../components/shared/PinkButton';
import PostingUserDetails from '../components/PostingUserDetails';
import PostDetailsMiddleCard from '../components/PostDetailsMiddleCard';

const {width, height} = Dimensions.get('window');
const PostDetails = props => {
  const {pet} = props.route.params;
  const featureInProgress = () => {
    Alert.alert('Feature In Progress');
  };
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <PageHeader
        onBackPress={() => {
          props.navigation.goBack();
        }}
        onChatPress={featureInProgress}
      />
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={{paddingBottom: 30}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.coverImageStyle}
            source={
              pet.photos.length > 0
                ? {
                    uri: pet.photos[0].large,
                  }
                : require('../assets/images/DefaultPetImage.png')
            }
            fadeDuration={0}
          />
          <PostDetailsMiddleCard pet={pet} />
          <View style={styles.bottomContentContainer}>
            <PostingUserDetails
              name="Solly Almazz"
              type="Owner"
              date="Nov 07, 2019"
              image="https://cdn.pixabay.com/photo/2021/02/27/15/44/portrait-6054910_960_720.jpg"
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTextStyle}>{pet.description}</Text>
            </View>
            <View style={styles.bottomButtonsContainer}>
              <LikeButton onPress={featureInProgress} />
              <PinkButton onPress={featureInProgress} title="Adoption" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryBGColor,
    alignItems: 'center',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  descriptionTextStyle: {
    fontSize: 13,
    color: '#9e9ea0',
    fontWeight: '600',
    lineHeight: 20,
  },
  coverImageStyle: {width: width, height: height * 0.6, resizeMode: 'cover'},
  descriptionContainer: {flex: 1, marginTop: 20},
  bottomContentContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default PostDetails;
