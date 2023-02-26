import { html } from 'lit-html';
import { getRecipient } from '../api/services';
import { invitation } from '../templates/invitationTemplate';

/**
 * @description Renders the details of an invitation for a recipient.
 * @param {object} ctx - The context object to use for rendering the details.
 * @param {object} ctx.params - The parameters of the request, including the ID of the recipient.
 * @param {string} ctx.params.id - The ID of the recipient to display details for.
 */
export async function viewInvitation(ctx) {
  const recipient = await getRecipient(ctx.params.id);
  const template = invitation(html`<span class="recipient">${recipient.name}</span>`);

  ctx.render(template);
}