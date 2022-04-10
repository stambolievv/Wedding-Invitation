import { html } from '../lib/lib.js';
import { getRecipientDB } from '../api/api.js';
import { invitation } from './invitationTemplate.js';

export async function viewInvitation(ctx) {
  const recipient = await getRecipientDB(ctx.params.id);
  const template = invitation(html`<span class="recipient">${recipient.name}</span>`);

  ctx.render(template);
}