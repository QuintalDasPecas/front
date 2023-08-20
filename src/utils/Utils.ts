export default class Utils {

    static formDataToUrlEncoded(formData: FormData): string 
    {
        const urlSearchParams = new URLSearchParams();

        // Percorra todas as chaves no FormData e adicione os pares chave-valor ao URLSearchParams
        for (const [key, value] of formData.entries()) {
            urlSearchParams.append(key, value.toString());
        }

        // Retorne a string no formato application/x-www-form-urlencoded
        return urlSearchParams.toString();
    }

    static getEnviroment(): string
    {   
        const hostName: string = useRequestURL().origin;
        const hostProd: string = useRuntimeConfig().public.enviroment.prod.host;
        return hostProd === hostName ? 'production' : 'development';
    }

    static getEnviromentHost( route: string ): string
    {   
        if( this.getEnviroment() === 'development' ){
            return useRuntimeConfig().public.enviroment.dev.host + useRuntimeConfig().public.apiUrl + route;
        }
        return useRuntimeConfig().public.enviroment.prod.host  + useRuntimeConfig().public.apiUrl + route;
    }
      
}