import { html } from 'lit-html';
import { getRecipient } from '../api/services';
import { invitation } from '../templates/invitationTemplate';

/**
 * @description Renders the details of an invitation for a recipient.
 * @param {PageJS.Context} ctx - The context object to use for rendering the details.
 */
export async function viewInvitation(ctx) {
  const { baseUrl, params: { id } } = ctx;
  const { name } = await getRecipient(id);

  const template = invitation(html`<span class="recipient">${name}</span>`, baseUrl);
  ctx.render(template);
}