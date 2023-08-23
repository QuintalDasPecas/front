<template> 
    <div class="container">       
        <div class="row">
            <form class="row justify-content-lg-center g-4">
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <h2>
                        <p>Vamos começar identificando seu produto.</p>
                    </h2>
                </div>
                <Button @click="handleOnSubmit()"></Button>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsMainFeatures />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsCategory />
                </div>               
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsRegulatoryInformation />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsProductDataSheet />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsCondition />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsTitleItem />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsItemWarranty />
                </div>                                  
            </form>
        </div>
    </div>
    <br>
</template>
<style>
.bd-callout-info {
    --bd-callout-color: var(--bs-info-text-emphasis);
    --bd-callout-bg: var(--bs-info-bg-subtle);
    --bd-callout-border: var(--bs-info-border-subtle);
}
.bd-callout {
    --bs-link-color-rgb: var(--bd-callout-link);
    --bs-code-color: var(--bd-callout-code-color);
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    color: var(--bd-callout-color, inherit);
    background-color: #f8f9fa;
    border-left: 0.25rem solid #0d6efd;
}
</style>
<script>
import Preditor from '@/src/services/PreditorCategoriesService';
import Attribute from '@/src/services/AttributeService';

export default {

    data(){
        return {
           
        };
    },
    methods: {
        async handleOnSubmit(){

            const preditor = new Preditor();
            const valuePreditor = 'lanterna traseira'   

            const { data: responseData, error: responseError } = await preditor.getPreditorCategories(valuePreditor);
          let status = responseData.value ? responseData._rawValue.status : null;
          status = status ?? (responseError.value ? responseError.value.statusCode : null);
          //console.log(responseData, responseError);
            this.handleGetAttributeByCategoryId('MLB46612');
        },
        async handleGetAttributeByCategoryId(value){
            const attribute = new Attribute();

            const { data: responseData, error: responseError } = await attribute.getAttributeByCategoryId(value);
          let status = responseData.value ? responseData._rawValue.status : null;
          status = status ?? (responseError.value ? responseError.value.statusCode : null);
          console.log(responseData, responseError);
        }
    }
}
</script>