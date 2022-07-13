const axios = require('axios').default;
const MockAdapter = require('axios-mock-adapter').default;

const instance = axios.create({
  timeout: 5000,
});

const mock = new MockAdapter(instance, { delayResponse: 2000 });

mock.onGet('/users', { params: { id: 1 } }).reply(200, {
  users: [{ id: 1, name: 'Victor' }],
});

console.log(0);

const fetch = async (id) => {
  console.log(1);
  const res = await instance.get('/users', { params: { id } });
  console.log(res.data);
  console.log(2);
};

fetch(1);

console.log(3);
