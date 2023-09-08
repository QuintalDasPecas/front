<template>
    <Message severity="error" v-if="isValid"  :closable="false">{{ message }}</Message>
    <Card>       
        <template #content>
            <div class="row box-image">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    <span class="p-inputgroup " style="width: 100%;">
                        <span class="p-inputgroup-addon no-border no-border-right">
                            <i class="pi pi-search" />
                        </span>
                        <InputText @keydown.enter="handleSearchProducts(formData.name)" v-model="formData.name" placeholder="Ex.: Lanterna traseira lado direito" :name="'predict'" size="large" class="input-text-main-features" />
                        <span class="p-inputgroup-addon no-border no-border-left">
                            <NuxtLink @click="handleClean()"><i class="pi pi-times" /></NuxtLink>
                        </span>
                    </span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 d-grid gap-2 d-md-flex justify-content-start">
                    <Button label="Buscar" size="large" class="btn-search-custom" text  outlined @click="handleSearchProducts(formData.name)" />                   
                </div>           
                <div class="col-lg-12 col-md-12 col-sm-12 col-12" v-if="products">
                    <h5>Não encontrou o item na lista, <NuxtLink to="/">Clique aqui!</NuxtLink></h5>                
                    <h5>Estes produtos coincidem com sua busca. Algum deles é o seu?</h5>
                </div>
            </div>   
            <div class="row box-image row-border" v-if="products ? false : (isSkeleton ? true : false)">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <PartialsProductsSkeletonList /> 
                </div>
            </div>
            <div class="row box-image row-border cursor-pointer" v-for="product in products">                
                <div class="col-lg-2 col-md-2 col-sm-2 col-2" @click="handleSelectProducts(product.id)">                               
                    <img :src="product.image" :alt="product.name"  width="70" class="image-ajust"/>           
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-9" @click="handleSelectProducts(product.id)"> 
                    <span class="text-md">{{ product.name }}</span> <br>     
                    <Chip :label="product.brand" v-if="product.brand"/>&nbsp;               
                    <Chip :label="product.model" v-if="product.model"/>&nbsp; 
                    <Chip :label="product.condition" v-if="product.condition"/>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1 d-flex align-items-center" @click="handleSelectProducts(product.id)">
                    <i class="bi bi-chevron-right float-end fs-26 icon-color"></i>
                </div>
            </div>
            <div class="row box-image row-border"  v-if="products">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <NuxtLink to="/" class="ps-6">Explorar todas as opções</NuxtLink>
                </div>
            </div>
        </template> 
        <template #footer>
        </template>
    </Card>
</template>
<script>

export default {
    props:{
        products:{
            type: Object,
            required: true,
            default: []
        },
        isSkeleton:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            formData: {
                name: '',
                productId: ''
            },
            isValid: false
        };
    },
    methods: {
        async handleSelectProducts(productId){
            this.$emit('handleSelectProducts', productId); 
        },
        async handleSearchProducts( name ){
            this.$emit('handleSearchProducts', name); 
        },
        handleClean(){
            this.formData.name = '';
            this.$emit('handleClean', true); 
        }    
    },
    emits: ['handleSelectProducts','handleSearchProducts','handleClean']
};
</script>