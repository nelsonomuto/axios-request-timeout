# axios-request-timeout
wrapper to add timeout to axios request
- [x] will throw an error when the timeout is passed and the code in the catch block will be executed.

## install
```
yarn add @nelsonomuto/axios-request-timeout
```
or `npm i @nelsonomuto/axios-request-timeout`

## usage
```
import axiosRequest from '@nelsonomuto/axios-request-timeout';

try {
  await axiosRequest({
    url: 'https://www.cnn.com/',
    method: 'GET',
    timeout: 10
  });
} catch(error) {
  console.log({ error });
  expect(error).toEqual({'message': 'timeout cancel'});
}
```
