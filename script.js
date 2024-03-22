'use strict';

const getUrl = './db/db.json';
const sendUrl = 'https://jsonplaceholder.typicode.com/posts';

const getData = () => {
  return fetch('./db/db.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
};

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

getData()
  .then((data) => {
    sendData(sendUrl, data);
  })
  .catch((e) => console.log(`Error ${e}`));


