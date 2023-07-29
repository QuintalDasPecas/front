<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-12">
                        <div class="panel">
                            <form>
                                <PartialsAddress></PartialsAddress>
                            </form>
                        </div>
                   </div>
               </div>
           </div>
       </section>
   </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import CepService from '@/src/services/CepService';

export default {
   
    setup() {

        const cep = ref('');
        const cepInput = ref('');        
        const address = ref('');

        async function fetchCepData()
        {
            const responseData  = await CepService.fetchCepData(cepInput.value);          

            console.log(responseData?.data.value?.logradouro);
        }
        
        const fetchCepDataOnEnter = (event: any) => {
            if (event.key === 'Enter') {
                fetchCepData();
            }
        };

        return {
            address,
            cep,
            cepInput,            
            fetchCepData,
            fetchCepDataOnEnter
        };
    },
};
</script>
  