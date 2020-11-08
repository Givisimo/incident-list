import { createHttpEffect } from '@servicenow/ui-effect-http';
import { URL_INCIDENT_TABLE, INCIDENT_FETCH_SUCCESS } from './constants';

export const getIncidents = createHttpEffect(URL_INCIDENT_TABLE, {
  method: 'GET',
  successActionType: INCIDENT_FETCH_SUCCESS,
});
