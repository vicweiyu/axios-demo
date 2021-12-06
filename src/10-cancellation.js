const axios = require('axios').default;

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

axios(url, { timeout: 5000, cancelToken: source.token })
  .then((res) => {
    console.log(res.status, res.statusText);
  })
  .catch((e) => {
    if (axios.isCancel(e)) {
      console.log('Request canneled:', e.message);
    }
    console.log(e);
  });

setTimeout(() => {
  source.cancel('Operation canceled after 2000ms');
}, 2000);
