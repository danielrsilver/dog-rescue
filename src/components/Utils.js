export const API_URL = "http://localhost:3300";

export function getQueryParams(query) {
  let queryUrl = '';
  for (let key in query) {
    if (query[key])
      queryUrl += `&${key}=${query[key]}`
  }
  return queryUrl;
}

export function getProp(obj) {
  if (!obj) {
    return null
  }
  return obj['$t'];
}
