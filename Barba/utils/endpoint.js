import { API_BASE_URL } from "../constants";
import { getJWT } from "./auth";

export const getUserService = async () => {
    const token = await getJWT();
    const response = await fetch(`${API_BASE_URL}/services/user-available-service-list`, {
      method: 'GET',
      headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`}
    });
  
    const data = await response.json();
    return data;
  };
  
export const getBrands = async () => {
    const response = await fetch(`${API_BASE_URL}/brand/list`, {
      method: 'GET',
      headers: {'accept' : 'application/json'}
    });
  
    const data = await response.json();
    return data;
  };
  export const getServiceByBrandAndUser = async (id) => {
    const token = await getJWT();
    const response = await fetch(`${API_BASE_URL}/services/user-available-service-list?brand_id=${id}`, {
      method: 'GET',
      headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`},
    });
  
    const data = await response.json();
    return data;
  };
  