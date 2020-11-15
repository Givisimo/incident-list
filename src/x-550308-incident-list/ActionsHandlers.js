import { actionTypes } from '@servicenow/ui-core';
import {
  INCIDENT_FETCH_SUCCEEDED,
  FETCH_LATEST_INCIDENT_STARTED,
} from './constants';
import { getIncidents } from './getHttpEffect';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export const actionHandlers = {
  [COMPONENT_BOOTSTRAPPED]: ({ dispatch }) =>
    dispatch(FETCH_LATEST_INCIDENT_STARTED),

  [FETCH_LATEST_INCIDENT_STARTED]: getIncidents,

  [INCIDENT_FETCH_SUCCEEDED]: ({ action, updateState }) => {
    const { result } = action.payload;
    updateState({ incidents: result });
  },
};
