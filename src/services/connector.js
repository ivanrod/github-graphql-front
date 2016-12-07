const urlBase = 'http://localhost:3000/';

function checkStatus(response) {
  if (response.ok) {
    return response.json().catch(() => response);
  }

  const error = new Error(response.statusText);

  error.status = response.status;
  error.response = response;
  throw error;
}

function request({ endpoint, method, data }) {
  const url = urlBase + endpoint;
  const options = {
    body: data,
    method,
  };

  return fetch(url, options).then(checkStatus);
}

function get(endpoint) {
  return request({ endpoint, method: 'GET' });
}

function post(endpoint) {
  return request({ endpoint, method: 'POST' });
}

export default {
  get,
  post,
  request,
};
