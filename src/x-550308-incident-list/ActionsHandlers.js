import { actionTypes } from '@servicenow/ui-core';
import { INCIDENT_FETCH_SUCCESS, FETCH_LATEST_INCIDENT } from './constants';
import { getIncidents } from './getHttpEffect';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export const actionHandlers = {
  [COMPONENT_BOOTSTRAPPED]: ({ dispatch }) => dispatch(FETCH_LATEST_INCIDENT),

  [FETCH_LATEST_INCIDENT]: getIncidents,

  [INCIDENT_FETCH_SUCCESS]: ({ action, updateState }) => {
    const { result } = action.payload;
    updateState({ incidents: result });
  },
};
