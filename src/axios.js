import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL:"https://us-central1-fir-eefcc.cloudfunctions.net/api",
  baseURL: "http://127.0.0.1:5001/fir-eefcc/us-central1/api",
});

export default instance;

