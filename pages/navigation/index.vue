<template>
 <div class="row g-8 justify-content-center remove-borda">
    <div class="col-lg-10 col-md-10 col-sm-10 col-10">        
    </div>
 </div>    
 <div class="row g-8 justify-content-center remove-borda">
    <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
        <NuxtLink to="/" class="link-voltar">Voltar</NuxtLink>
    </div>
 </div>
 <div class="row g-8 justify-content-center remove-borda">
    <div class="col-lg-2 col-md-2 col-sm-2 col-2" v-if="viewoption">
    </div>
    <div class="col-lg-10 col-md-10 col-sm-10 col-10">
        <div class="row g-8 justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 justify-content-center">
                <h1 class="justify-content-center">{{ this.title }}</h1>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 justify-content-center">
            </div>
        </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2 col-2" v-if="viewoption">
    </div>
    <div class="col-lg-10 col-md-10 col-sm-10 col-10">
        <div class="row g-8 justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4" v-for="(data, index) of viewproducts">                
                <Card>
                    <template #content>
                        <NuxtLink :to="`products?token=${data.token}`">                            
                            <div class="mb-3">
                                <img :src="data.thumbnail" :alt="data.name" class="w-12"/>
                            </div>
                            <div v-if=" data.original_price_integer" class="ui-recommendations-card__price-and-discount originalCustom" >
                                <span class="price-size textteste originalPrice">R$ {{ data.original_price_integer }} </span>
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 originalPriceCents">
                                    ,{{ data.original_price_cents }}
                                </span>                           
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ data.price_integer }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24">
                                    ,{{ data.price_cents }}
                                </span>                           
                                <span class="installments">{{ data.discount }} </span>
                            </div>
                            <div class="installments">{{ data.parcela }}</div>
                            <div class="installments">{{ data.frete }}</div>
                            <div class="textteste">{{ data.title }} ...</div>
                        </NuxtLink>
                    </template>
                </Card> 
            </div>
        </div> 
    </div>  
</div>     
</template>
<script>
import utils from '@/src/utils/Utils';
import ViewProductService  from '@/src/services/ViewProductService';
export default {
    data() {
        return {                     
            viewproducts: '',
            viewproductsbaseprice: '',
            viewoption: false,
            viewtype: '',
            title:'Ofertas do dia'
        };
    },    
    methods: {
        async handlequeryString(){
            const url = window.location.search;
            this.viewtype = utils.getQueryParam("vt", url);
        },      
        async handleViewProducts(){
            this.handlequeryString();
            const viewProductService = new ViewProductService();
            switch(this.viewtype){
                case '1':
                    var { data: responseData, error: responseError } = await viewProductService.getCache();
                    this.title = 'Última visita';                  
                break;
                case '2':
                    var { data: responseData, error: responseError } = await viewProductService.getActiveProducts(''); 
                    this.title = 'Ofertas do dia';                   
                break;
                case '3':
                    this.title = 'Confira nossos itens'; 
                    var { data: responseData, error: responseError } = await viewProductService.getProductNoBasePrice('');                   
                break;
            } 

            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if (status == 200) {
                this.viewproducts = responseData._rawValue.data;
            }           
        },
        handleGetProductByToken(token){
            navigateTo(`products?token=${token}`);
        },
        async handleGetCache(){          
            const viewProductService = new ViewProductService();
            const form = new FormData();
            const { data: responseData, error: responseError } = await viewProductService.getCache();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if(status === 200){
                this.formData = responseData._rawValue.data;
            }
        }, 
    },
    mounted() {       
       
        this.handleViewProducts();
    },
};
</script>
