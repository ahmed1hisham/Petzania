import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  IMAGE_LIST_BASE_URL,
  PET_FINDER_API_KEY,
  PET_FINDER_SECRET,
} from '../env';

export const getAccessToken = async () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: PET_FINDER_API_KEY,
    client_secret: PET_FINDER_SECRET,
  };
  return await axios
    .post(IMAGE_LIST_BASE_URL + 'oauth2/token', data)
    .then(res => {
      AsyncStorage.setItem('accessToken', res.data.access_token);
      return res;
    })
    .catch(err => {
      throw err;
    });
};

export const getImages = async (page, limit) => {
  const token = await AsyncStorage.getItem('accessToken');
  const options = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    params: {page, limit},
  };
  return await axios
    .get(IMAGE_LIST_BASE_URL + 'animals', options)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};
