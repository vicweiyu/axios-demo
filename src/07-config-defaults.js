const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

const f = async (p) => {
  await axios(url).then((res) => {
    console.log(p, res.status, res.config.timeout);
  });
};

// lib/defaults.js
f(0);

// Custom Default
axios.defaults.timeout = 1000;
f(1);

// Request
const f2 = () => {
  instance
    .get(url, {
      timeout: 3000,
    })
    .then((res) => {
      console.log(3, res.status, res.config.timeout);
    });
};

// Instance
const instance = axios.create({
  timeout: 2000,
});
instance
  .get(url)
  .then((res) => {
    console.log(2, res.status, res.config.timeout);
  })
  .then(f2);
