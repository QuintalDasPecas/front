<template>
    <Message severity="error" v-if="isValid"  :closable="false">{{ message }}</Message>
    <Card>
        <template #title>Indique o produto, marca, modelo e pricipais características  </template>
        <template #subtitle>Você também pode inserir o códico universal que o identifica. <span>Como posso encontrá-lo?</span> </template>
        <template #content>
            <div class="row">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    <span class="p-input-icon-left" style="width: 100%;">
                        <i class="pi pi-search" />
                        <InputText @keydown.enter="handleSearchProduts()" v-model="formData.name" placeholder="Ex.: Lanterna traseira lado direito" :name="'predict'" size="large" class="input-text-main-features" />
                    </span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 d-grid gap-2 d-md-flex justify-content-start">
                    <Button label="Buscar" outlined @click="handleSearchProduts()" />
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 g-4">
                    <Listbox v-model="selectedCity" :options="options" filter optionLabel="name" class="w-full md:w-14rem" />
                
                    <template>
                        <div class="card flex justify-content-center">
                            <Listbox v-model="selectedCountry" :options="options" optionLabel="name" class="w-full md:w-14rem" listStyle="max-height:250px">
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                                        <div>{{ slotProps.option.name }}</div>
                                    </div>
                                </template>
                            </Listbox>
                        </div>
                    </template>
                </div>
                
            </div>
        </template> 
        <template #footer>
           
        </template>
    </Card>
</template>
<script>
import Registerproduct from '@/src/services/RegisterProductsService';

export default {
    data(){
        return {
            formData: {
                name: ''
            },
            message: '',
            isValid: false,
            options: []
        };
    },
    methods: {
        async handleSearchProduts(){
            const registerproduct = new Registerproduct();
            const { data: responseData, error: responseError } = await registerproduct.getSearchByName(this.formData.name);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if( status == 200 ){
                const values = responseData._rawValue.data;
                const list=[]; 
                values.forEach(function( v, k){
                    list[k] = { code: v.id, name: v.title };
                });
                this.options = list;
            }
        }    
    }
}
</script>