import {FHIR_KEY, FHIR_URL} from 'env';

export default function FHIRRequest(endpoint, options = {}) {
  return fetch(`${FHIR_URL}${endpoint}`, {
    ...options,
    headers: {
      'x-api-key': FHIR_KEY
    }
  });
}
