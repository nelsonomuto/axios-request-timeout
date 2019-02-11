import axiosRequest from '../index';

test('request', async () => {
  let resp = await axiosRequest({
    url: 'https://www.cnn.com/',
    method: 'GET'
  });
  expect(resp.status).toEqual(200);

});
test('cancel request', async () => {
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
});