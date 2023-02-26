import page from 'page.js';
import { html } from 'lit-html';
import { createRecipient } from '../api/services';
import { invitation } from '../templates/invitationTemplate';

/**
 * @description Renders a form for creating a new invitation to a recipient.
 * @param {object} ctx - The context object to use for rendering the form.
 */
export function createInvitation(ctx) {
  const template = invitation(html`<input @keydown=${onSubmit} class="recipient" type="text" name="recipient" />`);

  ctx.render(template);
}

/**
 * @description Handles the "keydown" event on the recipient input field, creating a new recipient and redirecting to the new invitation page if the `Enter` key is pressed.
 * @param {KeyboardEvent} event - The "keydown" event.
 */
async function onSubmit(event) {
  if (event.key !== 'Enter') return;

  const { objectId } = await createRecipient(event.target.value);
  return page.redirect(`/pokana/${objectId}`);
}