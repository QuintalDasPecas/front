<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-12">
                        <div class="panel">
                            <form>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                                        <label for="InputText CEP" class="form-label">CEP</label>
                                        <InputMask id="basic" mask="99.999-999" v-model="cepInput" @blur="fetchCepData" @keyup.enter="fetchCepDataOnEnter" />
                                    </div>
                                    <div class="col-lg-7 col-md-12 col-sm-12 col-12"></div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                                        <label for="InputText Address" class="form-label">Endereço</label>
                                        <InputText  autocomplete="off"  type="text" class="form-control" id="InputText Address" name="address" />
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                                        <label for="InputText Number" class="form-label">Número</label>
                                        <InputText  autocomplete="off"  type="text" class="form-control" id="InputText Number" name="number" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">                                   
                                    <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                                        <label for="InputText Complement" class="form-label">Complemento</label>
                                        <InputText  autocomplete="off"  type="text" class="form-control" id="InputText Complement" />
                                    </div>                                   
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                                        <label for="InputText Neighborhood" class="form-label">Bairro</label>
                                        <InputText  autocomplete="off"  type="text" class="form-control" id="InputText Neighborhood" name="neighborhood" />
                                    </div>
                                </div>    
                                <div class="row g-2 justify-content-lg-center">    
                                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                                        <label for="InputText City" class="form-label">Cidade</label>
                                        <InputText  autocomplete="off"  type="text" class="form-control" id="InputText City" name="city" />
                                    </div>
                                    <div class="col-lg-3 col-12 col-sm-12 col-12">
                                        <label for="InputText Uf" class="form-label">Estado</label>
                                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-10rem" />
                                    </div>
                                </div> 
                                    <div class="row g-2 box-button justify-content-lg-center">
                                        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                            <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                                <i class="pi pi-arrow-left"></i> Voltar
                                            </NuxtLink>
                                        </div>
                                        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                            <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                                <i class="pi pi-check"></i> Confirmar
                                            </NuxtLink>
                                        </div>
                                    </div>  
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
  