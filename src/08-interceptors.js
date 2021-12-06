const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

const reqInterceptor = axios.interceptors.request.use(
  (config) => {
    console.log('reqInterceptor', config.method);
    return config;
  },
  (e) => {
    console.log('reqInterceptor', e);
    return Promise.reject(e);
  }
);

const resInterceptor = axios.interceptors.response.use(
  (res) => {
    console.log('resInterceptor', res.status);
    return res;
  },
  (e) => {
    console.log('resInterceptor', e);
    return Promise.reject(e);
  }
);

const f = async () => {
  const res1 = await axios(url, { timeout: 5000 });
  console.log(res1.status);

  axios.interceptors.request.eject(reqInterceptor);

  const res2 = await axios(url, { timeout: 5000 });
  console.log(res2.status);

  axios.interceptors.response.eject(resInterceptor);
  const res3 = await axios(url, { timeout: 5000 });
  console.log(res3.status);
};

f();
