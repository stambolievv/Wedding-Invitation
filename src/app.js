import { page, render } from './lib/lib.js';
import { createInvitation } from './views/invitationCreate.js';
import { viewInvitation } from './views/invitationView.js';

const main = document.getElementById('main');

page.base('/vi-kaniat-na/#svatba');
page(decorateContext);
page('/', createInvitation);
page('/pokana/:id', viewInvitation);

page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  next();
}
