import axios from 'axios';

const FirebaseApi = axios.create({
  baseURL: 'https://movies-app-24db8-default-rtdb.firebaseio.com/',
});

export default FirebaseApi;
