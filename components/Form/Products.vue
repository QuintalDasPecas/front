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
                    <PartialsProductsMainFeatures @handleSubmitPredict="handleSubmitPredict"/>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <PartialsProductsCategory  :formList="formList" @handleGetSelected="handleGetSelected"/>
                </div>               
                <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-for="(value, key) in componentData" v-if="ver">
                    <PartialsProductsModelos :component="value" :options="[]" :value="formData" id="key" />
                    <!-- <PartialsProductsRegulatoryInformation /> -->
                </div>
                <!-- <div class="col-lg-8 col-md-12 col-sm-12 col-12">
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
                </div>                                   -->
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
            formList: [],
            formData: {},
            componentData: {type: '', name: '', hint: ''},
            ver: false
        };
    },
    methods: {
        async handleOnSubmit(){
           
        },
        async handleGetAttributeByCategoryId( value ){
            this.componentData = [];
            const attribute = new Attribute();
            const { data: responseData, error: responseError } = await attribute.getAttributeByCategoryId(value);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
            this.handleForm(responseData._rawValue.data);            
        },
        async handleSubmitPredict( value ){    
            this.componentData = [];   
            this.formList = [];     
            const preditor = new Preditor();
            const { data: responseData, error: responseError } = await preditor.getPreditorCategories(value);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if( status == 200 ){
                let form = [];
                this.formList = [];
                responseData._rawValue.data.forEach(function( value, key ){
                    form[key] = { code: value.category_id, name: value.category_name + " - " + value.domain_name };
                });
                this.formList = form;
            }
        },
        async handleGetSelected( value ){
            if( value?.code ){
                this.handleGetAttributeByCategoryId( value.code );
            }            
        },
        async handleForm( value ){
            let comp = [];
            let options = [];
            value.forEach(function( value, key ){
                value.value_type = value.value_type == 'string' && value.values ? 'list' : value.value_type;
                let opt = value.values ?? [];
                options = [];
                opt.forEach(function( valueOpt, keyOpt ){
                    options[keyOpt] = {code: valueOpt.id, name: valueOpt.name}
                });                
                comp[key] = {type: value.value_type, name: value.name, hint: value.hint, options: options }
            });

            this.componentData = comp;
            this.ver = true;
        }
    }
}
</script>