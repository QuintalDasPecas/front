<template> 
    <div class="container">       
        <div class="row">
            <form class="row justify-content-lg-center g-4">
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <h2>
                        <p>Vamos começar identificando seu produto.</p>
                    </h2>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showpredict">
                    <PartialsProductsMainFeatures @handleSubmitPredict="handleSubmitPredict"/>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showcategory" >
                    <PartialsProductsCategory :formList="formList" @handleGetSelected="handleGetSelected" />                                     
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showlistcategory">
                    <h4>Categoria</h4>
                    <Listbox :options="formList" optionLabel="name"/>                    
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12 d-grid gap-3 d-md-flex justify-content-end" v-if="showlistcategory">
                    <Button label="Pesquisar outra categoria" outlined @click="{ showpredict = true; showlistcategory = false; showcomponent = 0 }" />
                </div>
              
                <!-- <div class="row justify-content-lg-center"> -->
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="1" :attribute_id="0" v-if="showcomponent === 1" :component="'TEXT_INPUT'" :label="'Preencha o título do anúncio'" :options="itemWarratyOption" :hint="'Inclua somente o produto, marca, modelo e características principais. Lembre-se de que, quando receber uma venda, você nao poerá editá-lo'" :tooltip="''" :name="'titleitem'" @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :hidden="false" :componentKey="1"/>
                   
                        <PartialsProductsAutoComponent :id="2" :attribute_id="0" v-if="showcomponent === 2" :component="'COMBO'" :label="'Você oferece garantia?'" :options="itemWarratyOption" :hint="''" :tooltip="'Informe se o produto terá garantia.'" :name="'itemWarraty'" @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="2" :hidden="false" />
                   
                        <PartialsProductsAutoComponent :id="3" :attribute_id="0" v-if="showcomponent === 3" :component="'CURRENCY_INPUT'" :label="'Preço'" :hint="'Informe o preço do produto.'" :tooltip="'Preço de comercialização do produto.'" :options="[]" :name="'price'"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="3" :hidden="false" />
                 
                        <span v-for="(group) in componentData">
                            <PartialsProductsAutoComponent v-if="showcomponent === group.position" :id="group.position" :attribute_id="group.id" :component="group.component" :label="group.name" :hint="group.hint" :tooltip="group.tooltip" :options="group.options" :name="group.ml_attribute_id"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="group.position"  :hidden="group.hidden"  />                       
                        </span>
                    </div>
                   
                    <!-- <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <PartialsProductsUploads />
                    </div>  -->
                <!-- </div>                                -->
            </form>
        </div>
    </div>
    <br>
</template>
<script>
import Preditor from '@/src/services/PreditorCategoriesService';
import Attribute from '@/src/services/AttributeService';

export default {
    data(){
        return {
            formList: [],
            formData: {},
            componentData: {},
            showcomponent: 0,
            showcategory: false,
            showlistcategory: false,
            itemWarratyOption:[
                { code: '00', name: 'Selecione'},
                { code: '01', name: 'Com garantia' },
                { code: '02', name: 'Sem garantia' }
            ],
            formData: [],
            increment: 0,
            showpredict: true
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
                this.showcategory = true;
                let form = [];
                this.formList = [];
                responseData._rawValue.data.forEach(function( value, key ){
                    form[key] = { code: value.category_id, name: value.category_name + " - " + value.domain_name };
                });
                this.formList = form;
            }
            this.showpredict = false;  
        },
        async handleGetSelected( value ){
            if( value?.code ){
                this.formList = [];
                this.handleGetAttributeByCategoryId( value.code );
                this.formList[0] = value;
                this.showcategory = false;
                this.showlistcategory = true;
            }            
        },
        async handleForm( value ){
            this.showcomponent = 1;
            this.increment = 0;
            const comp = [];

            value.forEach(function( value, key ){               
                let opt = value.values ?  JSON.parse(value.values) : [];
                let options = [];
                opt.forEach(function( valueOpt, keyOpt ){
                    options[keyOpt] = {code: valueOpt.id, name: valueOpt.name};
                });                
                comp[key] = value;
                comp[key].position = (key+4);
                comp[key].options = options;
                comp[key].required = JSON.parse(value.tags)?.required ? true : false;
                comp[key].hidden = JSON.parse(value.tags)?.hidden ? true : false;
                comp[key].variation_attribute = JSON.parse(value.tags)?.variation_attribute ? true : false;
                comp[key].catalog_required = JSON.parse(value.tags)?.catalog_required ? true : false; 
               
            });
            this.componentData = comp;
        },
        async handleConfirm( value ){           
            this.formData[value.name] = value;
            this.showcomponent = (value.position + 1);
        },
        async handleNaoAplica( key ){
            this.showcomponent = (key + 1);
        },
        mounted(){
            this.increment = 1;
        }
    }
}
</script>