import axios from 'axios';
const CancelToken = axios.CancelToken;

/**
 * Axios request with timeout throw
 */
export default async function axiosRequest(config) {
  const { timeout } = config;

  let cancel;
  if(timeout) {
    console.log({ timeout });
    config.cancelToken = new CancelToken(c => cancel = c);
    setTimeout(() => {
      cancel('timeout cancel', { timeout });
    }, timeout);
  }

  return await axios(config);
}
