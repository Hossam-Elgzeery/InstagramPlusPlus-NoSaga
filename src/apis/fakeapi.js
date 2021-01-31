import axios from 'axios';

//const path='http://10.0.2.2:3000';
const path='https://my-json-server.typicode.com/Hossam-Elgzeery/dbTest';

export default axios.create({
baseURL:path
});