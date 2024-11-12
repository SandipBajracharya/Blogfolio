import { CommonObjectType } from '@/common/types/otherTypes';
import axios from 'axios';

export const getFetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log({ error });
    throw new Error('Error!');
  }
};

export const postFetcher = async (url: string, data: CommonObjectType) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const putFetcher = async (url: string, data: CommonObjectType) => {
  const response = await axios.put(url, data);
  return response.data;
};

export const deleteFetcher = async (url: string) => {
  const response = await axios.delete(url);
  return response.data;
};
