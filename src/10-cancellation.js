const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

/*
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

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
*/

const controller = new AbortController();
axios
  .get(url, {
    timeout: 5000,
    signal: controller.signal,
  })
  .then((res) => {
    console.log(res.status);
  })
  .catch((e) => {
    if (axios.isCancel(e)) {
      console.log('Request canneled:', e);
    } else {
      console.error(e);
    }
  });

setTimeout(() => {
  controller.abort('Operation canceled after 2000ms');
}, 2 * 1000);
