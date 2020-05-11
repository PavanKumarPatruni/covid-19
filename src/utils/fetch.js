/* eslint-disable compat/compat */
export const fetchGetData = apiData => {
  return fetch(apiData.url, {
    method: 'GET',
  }).then(res => res.json());
};
