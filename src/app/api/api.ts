import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USERNAME = process.env.NEXT_PUBLIC_API_USERNAME;
const PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;

if (!BASE_URL || !USERNAME || !PASSWORD) {
  throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
}

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const credentials = `${USERNAME}:${PASSWORD}`;
const encodedCredentials = btoa(credentials);


export const authorizedClient=axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
     Authorization: `Basic ${encodedCredentials}`,
  },
});


