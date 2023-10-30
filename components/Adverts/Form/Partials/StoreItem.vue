<template> 
    <div class="container">       
        <div class="row">         
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
                <div class="row justify-content-lg-center" v-if="showpredict">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-8">
                        <h2>
                            <p>Vamos começar identificando seu produto.</p>
                        </h2>
                    </div>
                </div>    
                <div class="row justify-content-lg-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsAutoComponent                             
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
                            v-if="showcomponent[1]"
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12 g-4">
                        <span v-for="(group) in componentData">
                            <span v-if="group.ml_attribute_id =='BRAND'">                             
                                <PartialsProductsGroupBrandAndModel
                                    :label="'Preencha as informações do seu produto.'"
                                    :hint="''"
                                    :required="true"
                                    @handleConfirm="handleConfirm"
                                    @handleGetModelByBrand="handleGetModelByBrand"
                                    :hidden="false"
                                    :options="{brand: group.options, model: group.options, domain: group.ml_domain_id}"
                                    v-if="showcomponent[2]"
                                    :componentKey="2"
                                />
                            </span>
                        </span>
                    </div>
                </div>              
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12 g-4">
                        <PartialsProductsItemCondition
                            :label="'Qual é a condição do seu produto?'"
                            :hint="'Se foi usado de alguma forma, selecione usado.'"
                            :required="true"
                            @handleConfirm="handleConfirm"
                            :hidden="false"
                            :options="listCondition"
                            v-if="showcomponent[2]"
                        />
                    </div>
                </div>
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12 g-4">
                        <PartialsProductsGroupPriceAndQuantity 
                            :label="'Preencha as informações do seu produto.'"
                            :hint="''"
                            :required="true"
                            @handleConfirm="handleConfirm"
                            :hidden="false"
                            v-if="showcomponent[3]"
                        />
                    </div>
                </div>
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsRegulatoryInformation 
                            :label="'Preencha as informações regulatórias'"
                            :hint="'Conforme a legislação vigete do Brasil, estes dados são necessários para que você possa vender seu produto'"
                            @handleConfirm="handleConfirm"
                            v-if="showcomponent[4]"
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsUniversalCode
                            :label="'Qual é o código universal do seu produto?'"
                            :hint="'É o número que identifica um produto em nível global. Está localizado na embalagem ou etiqueta, próximo ao código de barras'"
                            @handleConfirm="handleConfirm"
                            v-if="showcomponent[4]"
                        />
                    </div>
                </div>               
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <!-- <PartialsProductsUploads  v-if="showcomponent[4]"/><br> -->
                    </div>
                </div>               
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <span v-for="(group) in componentData">
                            <PartialsProductsAutoComponent 
                                v-if="showcomponent[5]"
                                :id="group.position" 
                                :attribute_id="group.ml_attribute_id" 
                                :component="group.component" 
                                :label="group.name" 
                                :hint="group.hint" 
                                :tooltip="group.tooltip" 
                                :options="{options: group.options, domain: group.ml_domain_id, attributeId: group.ml_attribute_id}" 
                                :name="group.ml_attribute_id"
                                :componentKey="group.position" 
                                :hidden="group.hidden" 
                                :value_max_length="group.value_max_length" 
                                :required="group.required"                                
                                @handleConfirm="handleConfirm"
                            />                       
                            <br>    
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>    
</template>
<script>
export default {
    props:{
        showcomponent: { 
            type: Object,
            required: true,
            default: []
        },
        componentData: { 
            type: Object,
            required: true,
            default: {}
        }
    },
    data(){
        return {
            formList: [],
            formData: [],           
            showcategory: false,
            showlistcategory: false,           
            increment: 5,
            showpredict: true,
            message: '',
            isSkeleton: false,
            listCondition:[{
                code: 2230581,
                name: 'Usado'
            },
            {
                code: 2230284,
                name: 'Novo'
            },
            {
                code: 2230582,
                name: 'Recondicionado'
            }]
        };
    },
    methods: {
        async handleOnSubmit(){
          return false;
        },        
        async handleConfirm( value ){
            this.formData[value.name] = value;
            this.showcomponent[value.position + 1] = true;
        },     
        async handleSearchOtherCategory(){
            this.showpredict = true; 
            this.showlistcategory = false; 
            this.showcategory = false; 
            this.showcomponent = 0;
        },
        async handleClean( value ){
            this.formData.name = '';
            this.$emit('handleClean');
        },
        handleSearch( ){
            this.$emit('handleSearch');
            this.showpredict = true;
        },       
        async handleSelectItems(id){
            this.$emit('handleSelectItems', id);
            this.showpredict = false;
        },
        async handleSearchItems(name){
            this.$emit('handleSearchItems', name);
        },
        async handleSearchCategory(name){
            this.$emit('handleSearchCategory', name);
        },
        async handleSelectCategory(id){
            this.$emit('handleSelectCategory', id);
        },
        async handleImportItem( data ){
            this.$emit('handleImportItem', data);
        },
        async handleGetModelByBrand( data, domain ){
            this.$emit('handleGetModelByBrand', data, domain);
        }
    },
    emits: [
        'handleSelectItems',
        'handleSearchItems',
        'handleClean',
        'handleSearchCategory',
        'handleSelectCategory',
        'handleSearch',
        'handleImportItem',
        'handleGetModelByBrand'
    ]
}
</script>