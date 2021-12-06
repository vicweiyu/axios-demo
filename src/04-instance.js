const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://www.airtouch.com.au/',
  timeout: 1000,
  headers: { channel: 'node' },
});

instance.post('appconfig/at2p.json', { t: String(new Date().getTime()) }, { timeout: 2000 }).then((res) => {
  console.log(res.config);
  console.log(res.status, res.statusText);
});
