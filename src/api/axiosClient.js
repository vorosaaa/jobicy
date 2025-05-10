const axiosClient = axios.create({
  baseURL: "https://jobicy.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
  timeout: 10000,
});

const onRequestError = (error) => {
  console.error(error);
  return Promise.reject(error);
};

axiosClient.interceptors.request.use(onRequestError);

export default axiosClient;
