export type APIRequestType = {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    payload?: object
 }