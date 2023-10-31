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
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12 g-4">                                                  
                        <PartialsProductsGroupBrandAndModel
                            :label="'Preencha as informações do seu produto.'"
                            :hint="''"
                            :required="true"
                            @handleConfirm="handleConfirm"
                            @handleGetModelByBrand="handleGetModelByBrand"
                            :hidden="false"
                            :options="listBrand"                           
                            :componentKey="2"
                        />
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
                        />
                    </div>
                </div>
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsRegulatoryInformation 
                            :label="'Preencha as informações regulatórias'"
                            :hint="'Conforme a legislação vigete do Brasil, estes dados são necessários para que você possa vender seu produto'"
                            @handleConfirm="handleConfirm"                           
                        />
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
                        <PartialsProductsUniversalCode
                            :label="'Qual é o código universal do seu produto?'"
                            :hint="'É o número que identifica um produto em nível global. Está localizado na embalagem ou etiqueta, próximo ao código de barras'"
                            @handleConfirm="handleConfirm"                           
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
                                v-if="showcomponent[group.position]" 
                                :id="group.position" 
                                :attribute_id="group.ml_attribute_id" 
                                :component="group.component" 
                                :label="group.name" 
                                :hint="group.hint" 
                                :tooltip="group.tooltip" 
                                :options="{options: group.options, domain: group.ml_domain_id, attributeId: group.ml_attribute_id}" 
                                :name="group.ml_attribute_id"
                                :componentKey="group.position" 
                                :hidden="group.hidden ? true : false" 
                                :value_max_length="group.value_max_length" 
                                :required="group.required ? true : false"
                                @handleConfirm="handleConfirm"
                            />
                            <br>    
                        </span>
                    </div>
                </div>
                <div class="row justify-content-lg-center">
                    <Card>
                        <template #content>
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <Button @click="handleReset()" label="Cancelar" outlined size="large" class="float-start" />
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-8">                       
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <Button @click="handleOnSubmit()" label="Cadastrar" outlined size="large" class="float-end" />
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>               
            </form>
        </div>
    </div>    
</template>
<script>
import items from "@/src/services/RegisterProductsService";
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
                code: 1,
                name: 'Novo'
            },
            {
                code: 2,
                name: 'Usado'
            },
            {
                code: 3,
                name: 'Recondicionado'
            }],
            listBrand: []
        };
    },
    methods: {
        async handleOnSubmit(){
            const data = this.formData;
            const form = new FormData();
            let i=0;
            const entityId = localStorage.getItem('entityId');
            form.append('entity_id', entityId);
            form.append('listing_type_id', 'free');
            
            console.log(data);
            form.append('category_id', this.componentData[0].category_id)
            form.append('currency_id', 'BRL');
            form.append('buying_mode', 'buy_it_now');

           for(const v in data){

            if (data[v].name == 'TITLE'){
                form.append('title', data[v].value);
            }

            if (data[v].name == 'ITEM_CONDITION'){
                form.append('ITEM_CONDITION', data[v].code);
            }

            if (data[v].name == 'PRICE'){
                form.append('price', data[v].price);
            }

            if (data[v].name == 'QUANTITY'){
                form.append('avaliable_quantity', data[v].avaliable_quantity);
            }

                if(data[v].value == 'N/A'){
                    form.append('attribute['+i+'][id]', data[v].name);
                    form.append('attribute['+i+'][value_id]', -1);
                    form.append('attribute['+i+'][value_name]', null);
                } else {
                    form.append('attribute['+i+'][id]', data[v].name);
                    form.append('attribute['+i+'][value_id]', data[v].value.code);
                    form.append('attribute['+i+'][value_name]', data[v].value.name);
                }                
            
            
                i++;
            }

            const item = new items();
            const {data: responseData, error: responseError} = await item.importItem(form);
        },
        async handleReset(){
            this.formData = [];
        },
        async handleConfirm( value ){
            this.formData[value.name] = value;
            this.showcomponent[value.position + 1] = true;
            let values = this.componentData ?? [];
            let list = [];

            if(values.length){
                values.forEach(function(v,k){
                    if(v.ml_attribute_id == 'BRAND'){
                        list = { options: v.options, domain: v.ml_domain_id }
                    }
                });
                this.listBrand = list;
            }
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