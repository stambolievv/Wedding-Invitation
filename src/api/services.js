import * as api from './api';

/**
 * @description A constant representing the path to the Recipient table in the database.
 * @type {string}
 * @constant
 */
const RECIPIENT_TABLE_DB = '/classes/Recipient';

/**
 * @description An object representing the endpoints for making API requests.
 * @type {object}
 * @constant
 */
const endpoints = {
  CREATE_RECIPIENT: `${RECIPIENT_TABLE_DB}`,
  RECIPIENT_BY_ID: id => `${RECIPIENT_TABLE_DB}/${id}`,
};

/**
 * @description Creates a new recipient with the specified name.
 * @param {string} name - The name of the new recipient.
 * @returns {Promise<object>} A Promise that resolves to an object representing the new recipient.
 * @throws {Error} If the API request fails or returns an error.
 */
export function createRecipient(name) {
  return api.POST(endpoints.CREATE_RECIPIENT, { name });
}

/**
 * @description Retrieves the recipient with the specified ID.
 * @param {string} id - The ID of the recipient to retrieve.
 * @returns {Promise<object>} A Promise that resolves to an object representing the recipient.
 * @throws {Error} If the API request fails or returns an error.
 */
export function getRecipient(id) {
  return api.GET(endpoints.RECIPIENT_BY_ID(id));
}