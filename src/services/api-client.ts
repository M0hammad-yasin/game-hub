import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e32c458e81fe43f880f0ad9603e580dd",
  },
});
