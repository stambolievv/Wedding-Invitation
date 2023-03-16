import page from 'page';
import { decorateContext } from './middleware/context';

import { createInvitation } from './views/invitationCreate';
import { viewInvitation } from './views/invitationView';

page(decorateContext);
page('/', createInvitation);
page('/pokana/:id', viewInvitation);

page.start();