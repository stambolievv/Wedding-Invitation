import page from 'page';
import { decorateContext } from './middleware/context';

import { createInvitation } from './views/invitationCreate';
import { viewInvitation } from './views/invitationView';

import.meta.env.PROD && page.base('/vi-kaniat-na/#'); // The `vi-kaniat-na` is the name of the repo.

page(decorateContext);
page('/', createInvitation);
page('/pokana/:id', viewInvitation);

page.start();