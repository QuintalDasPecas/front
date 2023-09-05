<template>

</template>
<script>
import Registerproduct from '@/src/services/RegisterProductsService';

export default {
    
    data(){

    },
    methods: {    
        async handleSearchProduts(){
            const registerproduct = new Registerproduct();
            const { data: responseData, error: responseError } = await registerproduct.getSearchByName('Pneu 175');
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if( status == 200 ){
                console.log(responseData)
            }
        }           
    },

    mounted(){
        this.handleSearchProduts()
    }
}





</script>