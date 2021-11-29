import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import HomeHeader from '../components/HomeHeader';
import Post from '../components/Post';
import {getAccessToken, getImages} from '../services/PostsService';
import {mainBGColor, primaryColor, secondaryBGColor} from '../theme/colors';

const Home = props => {
  const [images, setImages] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    authenticateAndFetch();
  }, []);

  const fetchPosts = async replace => {
    await getImages(currPage, 7)
      .then(res => {
        if (replace) setImages(res.data.animals);
        else setImages(old => [...old, ...res.data.animals]);
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  const authenticateAndFetch = async () => {
    setIsFetching(true);
    await getAccessToken()
      .then(async res => {
        await fetchPosts(false);
      })
      .catch(err => {
        Alert.alert(err.message);
      });

    setIsFetching(false);
  };

  const refresh = async () => {
    setCurrPage(1);
    setIsRefreshing(true);
    await fetchPosts(true);
    setIsRefreshing(false);
  };

  const loadMore = async () => {
    if (!isFetchingMore) {
      setCurrPage(old => old + 1);
      setIsFetchingMore(true);
      await fetchPosts(false);
      setIsFetchingMore(false);
    }
  };

  const goToPostDetails = item => {
    props.navigation.navigate('PostDetails', {pet: item});
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <StatusBar backgroundColor={secondaryBGColor} barStyle="dark-content" />
        {isFetching ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={primaryColor} />
          </View>
        ) : (
          <>
            <HomeHeader
              city="Cairo"
              country="Egypt"
              userImage="https://static.onecms.io/wp-content/uploads/sites/20/2016/07/taylor-hill-600x450.jpg"
            />

            <FlatList
              style={styles.listStyle}
              contentContainerStyle={styles.listContentStyle}
              data={images}
              renderItem={({item}) => {
                return (
                  <Post
                    pet={item}
                    onPress={() => {
                      goToPostDetails(item);
                    }}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return index;
              }}
              onRefresh={refresh}
              refreshing={isRefreshing}
              ItemSeparatorComponent={() => {
                return <View style={styles.dividerStyle} />;
              }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.01}
              onEndReached={loadMore}
              ListFooterComponent={() => {
                return isFetchingMore ? (
                  <View style={styles.pageLoaderContainer}>
                    <ActivityIndicator size="large" color={primaryColor} />
                  </View>
                ) : null;
              }}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: secondaryBGColor},
  container: {
    flex: 1,
    backgroundColor: secondaryBGColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageLoaderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  dividerStyle: {height: 70},
  listStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: mainBGColor,
  },
  listContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 45,
  },
});

export default Home;
