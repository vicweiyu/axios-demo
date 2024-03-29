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
  await axios(url, { timeout: 5000 });

  console.log('**********');

  axios.interceptors.request.eject(reqInterceptor);
  await axios(url, { timeout: 5000 });

  console.log('**********');

  axios.interceptors.response.eject(resInterceptor);
  const res = await axios(url, { timeout: 5000 });
  console.log(res.status);
};

// f();

const instance = axios.create({
  timeout: 5000,
});
const ff = (timeout) => {
  instance.get(url, { timeout }).then((res) => {
    console.log('ff', res.status);
  });
};

console.log(0);

ff(3000);

console.log(1);

instance.interceptors.request.use(
  (config) => {
    console.log('reqInterceptor', config.method, config.timeout);
    return config;
  },
  (e) => {
    console.log('reqInterceptor', e);
    return Promise.reject(e);
  }
);
instance.interceptors.response.use(
  (res) => {
    console.log('resInterceptor', res.status, res.config.timeout);
    return res;
  },
  (e) => {
    console.log('resInterceptor', e);
    return Promise.reject(e);
  }
);

console.log(2);

ff(5000);

console.log(3);
