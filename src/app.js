import page from 'page.js';
import { decorateContext } from './middleware/context';

import { createInvitation } from './views/invitationCreate';
import { viewInvitation } from './views/invitationView';

page.base('/vi-kaniat-na/#svatba');
page(decorateContext);
page('/', createInvitation);
page('/pokana/:id', viewInvitation);

page.start();