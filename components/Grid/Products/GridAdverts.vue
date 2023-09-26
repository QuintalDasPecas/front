<template>
    <div class="container">       
        <div class="row">
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
                <div class="row justify-content-lg-center">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                        <NuxtLink to="/" class="btn btn-primary btn-lg btn-width-defult">
                            Página Principal
                        </NuxtLink>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6"></div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink @click="handleImportItems()" class="btn btn-primary btn-lg btn-width-defult">
                            <i class=""></i> Importar itens do Mercado Livre
                        </NuxtLink>
                    </div> 
                 </div>   
                <div class="row justify-content-lg-center">    
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">                
                        <PartialsProductsGrid :items="productItem" />
                    </div>                    
                </div>
            </form>
         </div>
    </div>
</template>

<script>
    import ProductsService from "@/src/services/ProductService";

    export default{
        data() {
            return {
                entityId: '',
                productItem: []
            }
        },
        methods: {
            async handleGetProductsByEntityId(){
                const productservice = new ProductsService();
                this.entityId = localStorage.getItem('entityId');
                const { data: responseData, error: responseError } = await productservice.getProductsByEntityId(this.entityId);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);                 
             
                if (status === 200){
                    const data = responseData._rawValue.data;
                    this.productItem = data;
                }
            },
            async handleImportItems(){
                const productservice = new ProductsService();
                const form = new FormData();
                this.entityId =  localStorage.getItem('entityId');
                form.append('entity_id',this.entityId);
                
                const { data: responseData, error: responseError } = await productservice.importItems(form);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null); 

                if (status === 200){
                    const data = responseData._rawValue.data;
                    this.productItem = data;
                }
            }
        },
        mounted() {
            this.handleGetProductsByEntityId()
        }
    }

</script>