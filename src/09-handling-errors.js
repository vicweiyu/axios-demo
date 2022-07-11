const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

axios(url, { timeout: 2000 })
  .then((res) => {
    console.log(res.status, res.statusText);
  })
  .catch((e) => {
    if (e.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.log(0);
      console.log(e.status);
      console.log(e.response.data);
    } else if (e.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      console.log(1);
      console.log(e.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(2);
      console.log(e.message);
    }
    console.log(3);
    console.log(e.config);
  });
