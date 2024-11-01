
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../constants';



// working with jwt in AsyncStorage
export const storeJWT = async (token) => {

  try {
    await AsyncStorage.setItem('jwt', token);
  } catch (error) {
    console.log('Error storing the token', error);
  }
};

export const getJWT = async () => {
  
  try {
    const token = await AsyncStorage.getItem('jwt');
    console.log(token)
    return token;
    
  } catch (error) {
    console.log('Error retrieving the token', error);
    return null;
  }
};

export const deleteJWT = async () => {
  try {
    await AsyncStorage.removeItem('jwt');
    console.log('JWT token deleted');
  } catch (error) {
    console.error('Error deleting JWT token:', error);
  }
};


// call endpoint and api (related to jwt)
export const LoginFunc = async (email, password) => {

  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {'accept' : 'application/json' , 'Content-Type' : "application/json"},
    body: JSON.stringify({email, password }),
  });

  const data = await response.json();
  return data;
};

export const getUserProfile = async () => {
  const token = await getJWT();
  
  const response = await fetch(`${API_BASE_URL}/info`, {
    method: 'GET',
    headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`}
  });

  const data = await response.json();
  return data;
};

// export const refreshToken = async () => {
//   const token = await getJWT();
//   const response = await fetch(`${API_BASE_URL}/refresh`, {
//     method: 'GET',
//     headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`}
//   });

//   const data = await response.json();
//   if(data.message == 'Unauthenticated'){
//     await AsyncStorage.clear()
//   }
//   else storeJWT(data.access_token);
// };

