<template> 
    <div class="container">       
        <div class="row">
            <form  @submit.prevent="handleOnSubmit" class="row justify-content-lg-center g-4">               
                <div class="row justify-content-lg-center" v-if="!attributes">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-8">
                        <h2>
                            <p>Vamos começar identificando seu produto.</p>
                        </h2>
                    </div>
                </div> 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-8" v-if="showpredict">
                       <PartialsProductsSearchProducts v-if="!attributes" :products="products" :categories="categories" @handleClean="handleClean" @handleSelectGategories="handleSelectGategories" @handleSelectProducts="handleSelectProducts" @handleSearchProducts="handleSearchProducts" @handleSearchCategory="handleSearchCategory"/>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-8" v-if="showpredict">
                        <PartialsProductsReviewAndEdit @handleSearch="handleSearch" :items="attributes" v-if="attributes" />
                    </div>                 
                </div>                 
                <div class="row justify-content-lg-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 g-4">
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
                        <PartialsProductsGroupBrandAndModel
                            :label="'Preencha as informações do seu produto.'"
                            :hint="''"
                            :required="true"
                            @handleConfirm="handleConfirm"
                            :hidden="false"
                            :options="[{code: '00', name: 'minha marca'}]"
                            v-if="showcomponent[2]"
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
                            :options="
                                [{
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
                                }]"
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
                            <PartialsProductsAutoComponent v-if="showcomponent[group.position]" :id="group.position" :attribute_id="group.ml_attribute_id" :component="group.component" :label="group.name" :hint="group.hint" :tooltip="group.tooltip" :options="group.options" :name="group.ml_attribute_id"  @handleConfirm="handleConfirm" :componentKey="group.position" :hidden="group.hidden" :value_max_length="group.value_max_length" :required="group.required"  />                       
                            <br>    
                        </span>
                    </div>
                </div>               
            </form>
        </div>
    </div>
    <br>
</template>
<script>
import Preditor from '@/src/services/PreditorCategoriesService';
import Attribute from '@/src/services/AttributeService';
import RegisterProductsService from '@/src/services/RegisterProductsService';
export default {
    data(){
        return {
            formList: [],
            formData: [],
            componentData: {},
            showcomponent: [],
            showcategory: false,
            showlistcategory: false,           
            increment: 5,
            showpredict: true,
            message: '',
            attributes: false,
            isSkeleton: false,
            products: [],
            categories: [],
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
        async handleSearchCategory( value ){
            try{                
                this.showcomponent[1] = false;
                this.products = [];
                this.categories = [];
                this.componentData = [];   
                this.formList = [];   
                this.message = false;  
                const preditor = new Preditor();
                const { data: responseData, error: responseError, pending: responsePending } = await preditor.getPreditorCategories(value);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if( status == 200 ){                
                    let form = [];
                    let img = '';
                    this.formList = [];
                    responseData._rawValue.data.forEach(function( vv, key ){
                        img = vv.picture;
                        img = img.split(';');
                        img = img.length > 0 ? img[(img.length)] : img;
                        form[key] = { code: vv.category_id, name: vv.category_name, path: vv.category_root, image: img };
                    });
                    this.categories = form;
                    this.showpredict = true; 
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
                 comp[key].position = (key + 5);
            });
            this.componentData = comp;
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
        async handleSearchProducts( name ){
            this.products = [];
            this.categories = [];
            this.isSkeleton = true;
            this.showcomponent[1] = false;
            const registerproduct = new RegisterProductsService();
            const { data: responseData, error: responseError, pending: responsePending } = await registerproduct.getSearchByName(name);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if( status == 200 ){
                const values = responseData._rawValue.data;
                const list=[]; 
                values.forEach(function( v, k){
                    list[k] = { 
                        id: v.id, 
                        code: v.id, 
                        name: v.title,                        
                        image: v.thumbnail, 
                        brand: v.brand ? 'Marca: ' + v.brand : null,
                        model: v.model ? 'Model: ' + v.model : null,
                        condition: v.condition
                    };
                });
                this.products = list;
                this.isSkeleton = false;
            }
        },
        async handleSelectProducts(productId){
            this.attributes = [];
            const registerproduct = new RegisterProductsService();
            const { data: responseData, error: responseError } = await registerproduct.getItemsByItem(productId);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if( status == 200 ){
                this.handleClean(true);
                this.attributes = responseData._rawValue.data;
            }
        },
        async handleSelectGategories( value ){
            if( value ){
                this.formList = [];
                this.handleGetAttributeByCategoryId( value );
                this.formList[0] = value;
                this.showcategory = false;
                this.showlistcategory = true;
            } 
        },
        async handleClean( value ){
            this.formData.name = '';
            this.products = '';
            this.categories = '';
        },
        handleSearch( value ){
            this.attributes = false;
        }
    }
}
</script>