import { html } from '../lib/lib.js';
import { postRecipientDB } from '../api/api.js';
import { invitation } from './invitationTemplate.js';

export function createInvitation(ctx) {
  async function onSubmit(e) {
    if (e.key == 'Enter') {
      const response = await postRecipientDB(e.target.value);
      return ctx.page.redirect(`/pokana/${response.objectId}`);
    }
  }
  const template = invitation(html`<input @keydown=${onSubmit} class="recipient" type="text" name="recipient" />`);

  ctx.render(template);
}