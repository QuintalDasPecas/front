<template> 
    <div class="container">       
        <div class="row">
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
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
                            @handleConfirm="handleConfirm"
                            @handleNaoAplica="handleNaoAplica" 
                            disabled
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent 
                            v-if="showcomponent[2]"
                            :id="2" 
                            :attribute_id="'ITEM_CONDITION'"                             
                            :component="'COMBO'" 
                            :label="'Condição do item'" 
                            :options="itemCondition" 
                            :hint="''" 
                            :tooltip="'Informe a condição do produto.'"
                            :name="'ITEM_CONDITION'"                            
                            :hidden="false" 
                            :value_max_length="255" 
                            :componentKey="2"
                            :required="true" 
                            @handleConfirm="handleConfirm" 
                            @handleNaoAplica="handleNaoAplica" 
                            disabled 
                         />
                    </div>
                 
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="3" :attribute_id="'SALE_TERMS'" v-if="showcomponent[3]" :component="'COMBO'" :label="'Você oferece garantia?'" :options="itemWarratyOption" :hint="''" :tooltip="'Informe se o produto terá garantia.'" :name="'SALE_TERMS'" @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="3" :hidden="false" :value_max_length="255" :required="true"  disabled />
                    </div>
                </div>
                <div class="row justify-content-lg-center">   
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="4" :attribute_id="'PRICE'" v-if="showcomponent[4]" :component="'CURRENCY_INPUT'" :label="'Preço'" :hint="'Informe o preço do produto.'" :tooltip="'Preço de comercialização do produto.'" :options="[]" :name="'PRICE'"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="4" :hidden="false" :value_max_length="255" :required="true" disabled />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent :id="5" :attribute_id="'AVAILABLE_QUANTITY'" v-if="showcomponent[5]" :component="'TEXT_INPUT'" :label="'Quantidade'" :hint="'Informe a quantidade do produto.'" :tooltip="'Informe a quantidade que será ofertada.'" :options="[]" :name="'AVAILABLE_QUANTITY'"  @handleConfirm="handleConfirm" @handleNaoAplica="handleNaoAplica" :componentKey="5" :hidden="false" :value_max_length="255" :required="true" disabled />
                    </div>
                </div>
                <div class="row justify-content-lg-center">     
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent 
                            v-if="showcomponent[6]"
                            :id="6" 
                            :attribute_id="'SELLER_SKU'"                             
                            :component="'TEXT_INPUT'" 
                            :label="'SKU'" 
                            :options="itemCondition" 
                            :hint="''" 
                            :tooltip="''"
                            :name="'SELLER_SKU'"                            
                            :hidden="false" 
                            :value_max_length="255" 
                            :componentKey="6"
                            :required="false" 
                            @handleConfirm="handleConfirm" 
                            @handleNaoAplica="handleNaoAplica" 
                            disabled 
                        />
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent 
                            v-if="showcomponent[7]"
                            :id="7" 
                            :attribute_id="'GTIN'"                             
                            :component="'TEXT_INPUT'" 
                            :label="'GTIN'" 
                            :options="itemCondition" 
                            :hint="''" 
                            :tooltip="''"
                            :name="'GTIN'"                            
                            :hidden="false" 
                            :value_max_length="255" 
                            :componentKey="7"
                            :required="false" 
                            @handleConfirm="handleConfirm" 
                            @handleNaoAplica="handleNaoAplica" 
                            disabled 
                        />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent 
                            v-if="showcomponent[8]"
                            :id="8" 
                            :attribute_id="'OEM'"
                            :component="'TEXT_INPUT'" 
                            :label="'OEM'" 
                            :options="itemCondition" 
                            :hint="''" 
                            :tooltip="''"
                            :name="'OEM'"
                            :hidden="false" 
                            :value_max_length="255" 
                            :componentKey="8"
                            :required="false" 
                            @handleConfirm="handleConfirm" 
                            @handleNaoAplica="handleNaoAplica" 
                            disabled 
                        />
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

export default {
    data(){
        return {
            formList: [],
            formData: {},
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
            increment: 6,
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
                let opt = value.values ?  JSON.parse(value.values) : [];                              
                 comp[key] = value;
                 comp[key].position = (key + this.increment);
            });
            this.componentData = comp;
        },
        async handleConfirm( value ){           
            this.formData[value.name] = value;
            this.showcomponent[value.position + 1] = true;
        },
        async handleNaoAplica( key ){            
            this.showcomponent[key + 1] = true;
        },
        async handleSearchOtherCategory(){
            this.showpredict = true; 
            this.showlistcategory = false; 
            this.showcategory = false; 
            this.showcomponent = 0;
        }
    }
}
</script>