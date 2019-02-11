# axios-request-timeout
wrapper to add timeout to axios request

## usage
```
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
