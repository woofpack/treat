import axios from 'react-native-axios';

const GEO_URL = 'http://api.geonames.org';
const gi = axios.create({ baseURL: GEO_URL });

const getZip = (lat, lng) =>
  new Promise(async (resolve, reject) => {
    try {
      const params = `/findNearbyPostalCodesJSON?lat=${lat}&lng=${lng}&username=carloslahrssen`;
      const { data } = await gi.get(`${params}`);
      const zip = data.postalCodes[0].postalCode;
      resolve(zip);
    } catch (e) {
      reject(e);
    }
  });

export default { getZip };
