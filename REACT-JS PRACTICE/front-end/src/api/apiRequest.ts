import { APIRequestType } from "../dataTypes/APIRequestType";

const baseUrl: string = 'http://localhost:8080/api/v1';

const apiRequest = async (request: APIRequestType): Promise<any> => {
   let URL = baseUrl.concat('/', request.url);
   console.log(request.payload)
  switch (request.method) {
   case 'GET':
      return await fetch(URL, {
      method: request.method,
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => data)
      .catch(error => console.error('Error:', error));

      break;

   case 'POST': 
   return await fetch(URL, {
      method: 'POST',  
      body: JSON.stringify(request.payload),  
      headers:{
        'Content-Type': 'application/json'
       }
        }).then(response => response.json())
        .then(data => {
         return data;
        })
        .catch(error => console.error('Error:', error));

   break;

   default:
      break;
  }

  };

  export {apiRequest};
