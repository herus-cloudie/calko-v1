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
  const response = await fetch(`${API_BASE_URL}/brand/list?perPage=25`, {
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

export const ChangeServiceStatus = async (id) => {
  const token = await getJWT();
  const response = await fetch(`${API_BASE_URL}/services/add-code-to-user?voucher_code_id=${id}`, {
    method: 'POST',
    headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`},
  });

  const data = await response.json();
  return data;
};

export const getUserServicesStatus = async () => {
  const token = await getJWT();
  console.log(token)
  const response = await fetch(`${API_BASE_URL}/services/user-used-code-list`, {
    method: 'GET',
    headers: {'accept' : 'application/json' , Authorization: `Bearer ${token}`},
  });

  const data = await response.json();
  return data;
};