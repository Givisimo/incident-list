import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import { actionHandlers } from './ActionsHandlers';

createCustomElement('x-550308-incident-list', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    incidents: [],
  },
  actionHandlers: actionHandlers,
});
