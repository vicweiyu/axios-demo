const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

axios({
  method: 'POST',
  url: MAGT_CONFIG_URL,
  data: {
    t: String(new Date().getTime()),
  },
})
  .then((res) => {
    console.log(0, res.config.method, res.status, res.statusText);
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });

// Default Get
axios(url)
  .then((res) => {
    console.log(1, res.config.method, res.status, res.statusText);
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });
