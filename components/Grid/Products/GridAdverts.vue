<template>
    <div class="container">       
        <div class="row">
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
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
                entityId: 1,
                productItem: []
            }
        },
        methods: {
            async handleGetProductsByEntityId(){
                const produservice = new ProductsService();
                const { data: responseData, error: responseError } = await produservice.getProductsByEntityId(this.entityId);
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