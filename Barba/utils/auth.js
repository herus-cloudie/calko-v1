
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
export const LoginFunc = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    
    // Check for HTTP response status
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    return { message: error.message };
  }
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

