import utils from '@/src/utils/Utils';

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

const option: Options = {
    headers: {
        Accept: 'application/json',
        ContentType: 'application/x-www-form-urlencoded',
        mode: 'cors',
        credentials: 'include'
    },
    method: '',
    body: ''
  };
  

export default class CallApi{

    static endPoint = '';

    static async sactum(){
        let apiUrl = useRuntimeConfig().public.CSRF_URL;
      
        await useFetch( apiUrl, {
            onRequest({ request, options }) {
                options.headers = {
                    'mode' : option.headers.mode,
                    'credentials' : option.headers.credentials,
                    'Accept' : option.headers.Accept,
                   'Content-Type' : option.headers.ContentType
                };
                options.method = 'GET';
            }
        });
    }

    static async auth(myForm: FormData){        
        
        await this.sactum();

        let apiUrl = useRuntimeConfig().public.API_URL + useRuntimeConfig().public.AUTH_URL;               
        option.body = utils.formDataToUrlEncoded(myForm);

       return await useFetch( apiUrl, {
            onRequest({ request, options }) {
                options.headers = {
                    'mode' : option.headers.mode,
                    'credentials' : option.headers.credentials,
                    'Accept' : option.headers.Accept,
                   'Content-Type' : option.headers.ContentType
                };
                options.method = 'POST';
                options.body = option.body;
            },
            onRequestError({ request, options, error }) {
                console.log(error);
            },
            onResponse({ request, response, options }) {
               //return response._data;
            },
            onResponseError({ request, response, options }) {
                //return response._data;               
            }
        });

    }

    static async store(myForm: FormData){

        const apiUrl = useRuntimeConfig().public.API_URL + this.getEndPoint();
        option.body = utils.formDataToUrlEncoded(myForm);
        return await useFetch( apiUrl, {
            onRequest({ request, options }) {
                options.headers = {
                    'mode' : option.headers.mode,
                    'credentials' : option.headers.credentials,
                    'Accept' : option.headers.Accept,
                   'Content-Type' : option.headers.ContentType
                };
                options.method = 'POST';
                options.body = option.body;
            },
            onRequestError({ request, options, error }) {
                console.log(error);
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
        
        const apiUrl = useRuntimeConfig().public.API_URL + this.getEndPoint();
        return await useFetch( apiUrl, {
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
        const apiUrl = useRuntimeConfig().public.API_URL + this.getEndPoint();
        return await useFetch( apiUrl, {
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
        let apiUrl = useRuntimeConfig().public.API_URL + this.getEndPoint();
        apiUrl += '/' + id;
        option.body = utils.formDataToUrlEncoded(FormData);
        return await useFetch( apiUrl, {
            onRequest({ request, options }) {
                options.headers = {
                    'mode' : option.headers.mode,
                    'credentials' : option.headers.credentials,
                    'Accept' : option.headers.Accept,
                   'Content-Type' : option.headers.ContentType
                };
                options.method = 'PUT';
                options.body = option.body;
            },
            onRequestError({ request, options, error }) {
                console.log(error);
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
        const apiUrl = useRuntimeConfig().public.API_URL + this.getEndPoint();
        return await useFetch( apiUrl, {
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

     // Método getter para obter o endPoint atual
    static getEndPoint() {
        return this.endPoint;
    }

    // Método setter para definir o novo endPoint
    static setEndPoint(newEndPoint: string) {
        this.endPoint = newEndPoint;
    }
}