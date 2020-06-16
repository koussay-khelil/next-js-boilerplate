import axios from 'axios';

import { setAccessTokenIfDefined } from './access-token';
const registerErrorInterceptors = () => {
  axios.interceptors.request.use(
    config =>
      // Do something before request sent
      config,
    error =>
      // Handle request error
      Promise.reject(error),
  );
  axios.interceptors.response.use(
    response =>
      // Do something with the response data
      response,
    error => {
      // Handle response error
      switch (error.response.status) {
        case 401:
          /*
            if you dont have a pamareter called search in your browser 
            delete this test
        */
          if (!setAccessTokenIfDefined())
            // window.location = '/signin';
            break;
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
};

export const errorsExtraction = errors =>
  Object.keys(errors).reduce(
    (acc, errorKey) => [...acc, ...errors[errorKey]],
    [],
  );

export default registerErrorInterceptors;
