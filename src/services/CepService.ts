
export default class CepService{
    
    static async fetchCepData(cepInput: string)
    {
        let cep = cepInput.replace('.','').replace('-','');

        if (cep) {    
            return await useFetch( `http://viacep.com.br/ws/${cep}/json/`, {
                onRequest({ request, options }) {                    
                    options.headers = {                           
                        'Accept' : 'application/json'
                    };
                    options.method = 'GET';
                }
            });
        }
    }
}