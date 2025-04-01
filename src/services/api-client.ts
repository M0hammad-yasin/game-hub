import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axoisInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e32c458e81fe43f880f0ad9603e580dd",
  },
});

class APIClient<T> {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  getAll = async (options?: AxiosRequestConfig) => {
    const response = await axoisInstance.get<FetchResponse<T>>(
      this.url,
      options
    );
    return response.data;
  };
  post = async (url: string, data: T) => {
    this.url = url;
    const response = await axoisInstance.post<T>(this.url, data);
    return response.data;
  };
}

export default APIClient;
