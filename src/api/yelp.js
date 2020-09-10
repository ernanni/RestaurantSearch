import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer KbYRFb7qpjBqC61twqHqIVBIa6wtEt_3zRbF1Db50R_wC-J36Ak6qW8lh1mvzE2ib0yquBu74F_A7M115O_N75JQnasltNod6ACNQus1NwE6yuoBxvbn3CIGhApXX3Yx',
  },
});
