<template> 
    <div class="container">       
        <div class="row">
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <h2>
                            <p>Vamos começar identificando seu produto.</p>
                        </h2>
                    </div>               
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showpredict">
                        <PartialsProductsMainFeatures @handleSubmitPredict="handleSubmitPredict"/>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showcategory">
                        <PartialsProductsCategory :formList="formList" @handleGetSelected="handleGetSelected" @handleSearchOtherCategory="handleSearchOtherCategory"/>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12" v-if="showlistcategory">
                        <h4>Categoria</h4>
                        <Listbox :options="formList" optionLabel="name"/>                    
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 d-grid gap-3 d-md-flex justify-content-end" v-if="showlistcategory">
                        <Button label="Pesquisar outra categoria" outlined @click="handleSearchOtherCategory" />
                    </div>
                </div>

                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent 
                            v-if="showcomponent[1]"
                            :id="1" 
                            :attribute_id="'TITLE'" 
                            :component="'TEXT_INPUT'" 
                            :label="'Preencha o título do anúncio'" 
                            :options="[]" 
                            :hint="'Inclua somente o produto, marca, modelo e características principais. Lembre-se de que, quando receber uma venda, você não poerá editá-lo.'" 
                            :tooltip="''"
                            :name="'TITLE'"
                            :hidden="false"
                            :required="true"
                            :value_max_length="255"
                            :componentKey="1"
                            :readonly="false"
                            @handleConfirm="handleConfirm"
                            disabled
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsGroupPriceQuantity 
                            :label="'Preencha as informações regulatórias'"
                            :hint="'Conforme a legislação vigete do Brasil, estes dados são necessários para que você possa vender seu produto'"
                            @handleConfirm="handleConfirm"
                        />
                    </div>
                </div>        
                <div class="row justify-content-lg-center">   
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="6" :attribute_id="'PRICE'" v-if="showcomponent[6]" :component="'CURRENCY_INPUT'" :label="'Preço'" :hint="'Informe o preço do produto.'" :tooltip="'Preço de comercialização do produto.'" :options="[]" :name="'PRICE'" @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="6" :hidden="false" :value_max_length="255" :required="true" disabled />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="7" :attribute_id="'AVAILABLE_QUANTITY'" v-if="showcomponent[7]" :component="'TEXT_INPUT'" :label="'Quantidade'" :hint="'Informe a quantidade do produto.'" :tooltip="'Informe a quantidade que será ofertada.'" :options="[]" :name="'AVAILABLE_QUANTITY'"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="7" :hidden="false" :value_max_length="255" :required="true" disabled />
                    </div>
                </div>
                <div class="row justify-content-lg-center">  
                    <span v-for="(group) in componentData">
                        <PartialsProductsAutoComponent v-if="showcomponent[group.position]" :id="group.position" :attribute_id="group.id" :component="group.component" :label="group.name" :hint="group.hint" :tooltip="group.tooltip" :options="group.options" :name="group.ml_attribute_id"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="group.position" :hidden="group.hidden" :value_max_length="group.value_max_length" :required="group.required"  />                       
                        <br>    
                    </span>
                   
                    <!-- <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <PartialsProductsUploads />
                    </div>  -->
                </div>
            </form>
        </div>
    </div>
    <br>
</template>
<script>
import Preditor from '@/src/services/PreditorCategoriesService';
import Attribute from '@/src/services/AttributeService';
import { validateHeaderValue } from 'http';

export default {
    data(){
        return {
            formList: [],
            formData: [],
            componentData: {},
            showcomponent: [],
            showcategory: false,
            showlistcategory: false,
            itemWarratyOption:[               
                { code: '01', name: 'Com garantia' },
                { code: '02', name: 'Sem garantia' }
            ],
            itemCondition:[
                { code: '01', name: 'Novo' },
                { code: '02', name: 'Usado' },
                { code: '03', name: 'Recondicionado' }
            ],
            formData: [],
            increment: 7,
            showpredict: true,
            message: ''
        };
    },
    methods: {
        async handleOnSubmit(){
          return false;
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
            try{
                this.componentData = [];   
                this.formList = [];   
                this.message = false;  
                const preditor = new Preditor();
                const { data: responseData, error: responseError, pending: responsePending } = await preditor.getPreditorCategories(value);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if( status == 200 ){                
                    let form = [];
                    this.formList = [];
                    responseData._rawValue.data.forEach(function( value, key ){
                        form[key] = { code: value.category_id, name: value.category_name + " - " + value.domain_name };
                    });
                    this.formList = form;
                    this.showcategory = true;
                    this.showpredict = false; 
                }
            
            }catch( error ){
                this.message = 'Não foi possível realizar a pesquisa.';
                this.isValid = true;
                setTimeout(() => {
                this.isValid = false;
                }, 5000);
                return false;
            }
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
            this.showcomponent[0] = true;
            this.showcomponent[1] = true;
            const comp = [];
            value.forEach(function( value, key ){               
                let opt = value.values ? JSON.parse(value.values) : [];                              
                 comp[key] = value;
                 comp[key].position = (key + 7);
            });
            this.componentData = comp;
        },
        async handleConfirm( value ){
            const formdata = [];
            let i = 0;
            
            if( value.length > 1){
                value.forEach(function(v, k){
                    //this.formData[i] =  {name: v.name, value: v.value, position: v.position}; 
                    i = v.position;
                });
            }else{
                i = value.position;
                //this.formData[i] = {name: value.name, value: value.value, position: value.position};                
            }
            
            this.showcomponent[i + 1] = true;
            
            console.log(this.formData);
        },
        // async handleNaoAplica( key ){            
        //     this.showcomponent[key + 1] = true; 
        // },
        async handleSearchOtherCategory(){
            this.showpredict = true; 
            this.showlistcategory = false; 
            this.showcategory = false; 
            this.showcomponent = 0;
        }
    }
}
</script>