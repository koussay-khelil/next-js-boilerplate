export const requestHeader = options => ({
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token'),
    'Accept-Language': `en-US`,
    ...options,
  },
});
export const getToken = () => localStorage.getItem('token');
