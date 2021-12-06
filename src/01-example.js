const axios = require('axios').default;

const MAGT_CONFIG_URL = 'https://www.airtouch.com.au/appconfig/at2p.json';
const url = MAGT_CONFIG_URL + '?t=' + String(new Date().getTime());

/*
axios
  .get(MAGT_CONFIG_URL, {
    params: {
      t: String(new Date().getTime()),
    },
  })
  .then((res) => {
    console.log(res.status, res.statusText);
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });
*/

const getConfig = async () => {
  try {
    const res = await axios.get(url);
    console.log(res.status, res.statusText);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

getConfig();
