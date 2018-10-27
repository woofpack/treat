import axios from 'react-native-axios';
import config from './config.js';

const fi = axios.create({ baseURL: config.FETCH_URL });

const spot = (base64, zip) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await fi.post('/spot', { data: base64, zip });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { spot };
