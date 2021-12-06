const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

axios(url, { timeout: 2000 })
  .then((res) => {
    console.log(res.status, res.statusText);
  })
  .catch((e) => {
    if (e.response) {
      console.log(0);
      console.log(e.status);
      console.log(e.response.data);
    } else if (e.request) {
      console.log(1);
      console.log(e.request);
    } else {
      console.log(2);
      console.log(e.message);
    }
    console.log(3);
    console.log(e.config);
  });
