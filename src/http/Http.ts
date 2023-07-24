import constants from 'src/constants/Constants';
import utils from 'src/utils/Utils';

interface Options{
    headers:{
        Accept:string,
        ContentType:string,
        mode:string,
        credentials:string
    },
    method:string,
    body:string
}

const options: Options = {
    headers: {
        Accept: 'application/json',
        ContentType: 'application/x-www-form-urlencoded',
        mode: '',
        credentials: ''
    },
    method: '',
    body: ''
  };
  

export default class Http{
    
    static async store(FormData: FormData){

        options.headers.mode = FormData.get('password') ? 'cors' : '';
        options.headers.credentials = FormData.get('password') ? 'include' : '';
        options.method = 'POST';
        options.body = utils.formDataToUrlEncoded(FormData);
        
        await useFetch( constants.API_URL, {
            onRequest({ request, options }) {
                options = options;
            },
            onResponse({ request, response, options }) {
                return response._data;
            },
            onResponseError({ request, response, options }) {
                return response._data;
            }
        });
    }

    static async find(id: Number){
      
        await useFetch( constants.API_URL, {
            onRequest({ request, options }) {
                options.query = {'id' : id};
                options.method = 'GET';
            },
            onResponse({ request, response, options }) {
                return response._data;
            },
            onResponseError({ request, response, options }) {
                return response._data;
            }
        });

    }

    static async all(){
        await useFetch( constants.API_URL, {
            onRequest({ request, options }) {
                options.method = 'GET';
            },
            onResponse({ request, response, options }) {
                return response._data;
            },
            onResponseError({ request, response, options }) {
                return response._data;
            }
        });
    }

    static async update(id: number, FormData: FormData){
        await useFetch( constants.API_URL, {
            onRequest({ request, options }) {
                options.query = {'id' : id};
                options.method = 'PUT';
                options.body = FormData;
            },
            onResponse({ request, response, options }) {
                return response._data;
            },
            onResponseError({ request, response, options }) {
                return response._data;
            }
        });
    }

    static async destroy(id: number){
        await useFetch( constants.API_URL, {
            onRequest({ request, options }) {
                options.query = {'id' : id};
                options.method = 'DELETE';
            },
            onResponse({ request, response, options }) {
                return response._data;
            },
            onResponseError({ request, response, options }) {
                return response._data;
            }
        });
    }
}