'use strict'

const getData = () => fetch('./db.json');

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());

};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData))
  .then((data) => console.log(data))
  .catch((e) => console.log(`Error ${e}`));

