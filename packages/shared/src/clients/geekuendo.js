import axios from 'axios-observable';

const client = axios.create({
  baseURL: 'http://localhost:3030/api/v1',
  headers: { 'Content-type': 'application/json' }
});

export const fetchArticles = () => client.get('/articles');
