import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL

  baseURL: "https://us-central1-sep-4e18b.cloudfunctions.net/api"
});
 
export default instance;
