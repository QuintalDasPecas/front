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
                <div class="row justify-content-lg-center" v-if="showpredict">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-8">
                        <AdvertsFormPartialsSearch                            
                            @handleClean="handleClean" 
                            @handleSelectCategory="handleSelectCategory"
                            @handleSelectItems="handleSelectItems" 
                            @handleSearchItems="handleSearchItems" 
                            @handleSearchCategory="handleSearchCategory"
                            :items="items" 
                            :categories="categories"
                        />
                    </div>
                </div>
                <div class="row justify-content-lg-center" v-if="!showpredict">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-8">
                        <AdvertsFormPartialsReviewAndEdit
                            @handleSearch="handleSearch" 
                            @handleImportItem="handleImportItem"
                            :items="attributes"
                        />
                    </div>
                </div>
                <div class="row justify-content-lg-center">
                    <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                        <AdvertsFormPartialsStoreItem
                            @handleSearch="handleSearch" 
                            @handleImportItem="handleImportItem"
                            @handleGetModelByBrand="handleGetModelByBrand"
                            :showcomponent="showcomponent"
                            :componentData="componentData"
                        />                       
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
        categories: {
            type: Object,
            required: true,
            default: {}
        },
        items: {
            type: Object,
            required: true,
            default: {}
        },
        attributes: {
            type: Object,
            required: true,
            default: {}
        },
        componentData:{
            type: Object,
            required: true,
            default: {}
        },
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
            }],
            load : false
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