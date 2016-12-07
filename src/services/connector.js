const urlBase = 'http://localhost:3000/';

function request({ endpoint }) {
  const url = urlBase + endpoint;
  const options = { mode: 'no-cors' };

  return fetch(url, options);
}

export default { request };
