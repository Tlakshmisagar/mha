import axios from 'axios';
import Config from 'react-native-config';

export default axios.create({ baseURL: 'http://192.168.56.1:5000/' });
// export default axios.create({ baseURL: Config.BASE_URL });