const LOCATION = {
  PROTOCOL: 'https:',
  HOSTNAME: 'parseapi.back4app.com',
};
const DATABASE = {
  API_KEY: 'I4lulnv9tmJKVzJoHwu4H2ZzHOYEdQjcdN9NsHY3',
  REST_KEY: 'pnVqc7XdcH9VSBOPThrV2kTABwiCEe0eylDwdVSM'
};

async function request(path, options) {
  try {
    const response = await fetch(`${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}${path}`, options);

    if (response.ok != true) {
      const error = await response.json();
      throw new Error(error.error);
    }

    try {
      return await response.json();
    } catch (err) {
      return response;
    }

  } catch (error) {
    throw error;
  }
}

function createOption(method, data) {
  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': DATABASE.API_KEY,
      'X-Parse-REST-API-Key': DATABASE.REST_KEY
    }
  };

  if (data != undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify({ name: data });
  }

  return options;
}

export function postRecipientDB(name) {
  return request('/classes/Recipient', createOption('POST', name));
}

export function getRecipientDB(id) {
  return request(`/classes/Recipient/${id}`, createOption('GET'));
}