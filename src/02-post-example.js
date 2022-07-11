const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

axios
  .post(MAGT_CONFIG_URL, {
    t: String(new Date().getTime()),
  })
  .then((res) => {
    console.log(res.status, res.statusText);
    console.log(res.data);
  })
  .catch(console.error);

const f1 = () => {
  return axios.get(url);
};

const f2 = () => {
  return axios.get(url);
};

Promise.all([f1(), f2()]).then((results) => {
  console.log(results[0].status);
  console.log(results[1].status);
});
