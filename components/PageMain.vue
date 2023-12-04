<template> 
    <CarouselCustom :banners="banner"></CarouselCustom>
    <br><br>
    <div class="row g-8 justify-content-lg-center" v-if="viewproductscache">
        <div class="col-lg-10">
            <div class="titulo">
                Baseada na sua última visita 
                <NuxtLink to="/navigation?vt=1" class="min-titulo">Ver Histórico</NuxtLink> 
            </div>        
        </div>
    </div>
    <div class="row justify-content-lg-center" v-if="viewproductscache">
        <div :class="viewproductscache.length <= 1  ? 'col-lg-4' : 'col-lg-10'">
            <Carousel :value="viewproductscache" :numVisible="5" :numScroll="5">
                <template #item="slotProps">
                    <NuxtLink :to="`products?token=${slotProps.data.token}`">
                        <div class="border-1 surface-border border-round m-1 bg-custom">
                            <div class="mb-3">
                                <img :src="slotProps.data.thumbnail" :alt="slotProps.data.name" class="w-12"/>
                            </div>
                            <div v-if=" slotProps.data.original_price_integer" class="ui-recommendations-card__price-and-discount originalCustom" >
                                <span class="price-size textteste originalPrice">R$ {{ slotProps.data.original_price_integer }} </span>
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 originalPriceCents"> {{ slotProps.data.original_price_cents }}</span>                           
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ slotProps.data.price_integer }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24">,{{ slotProps.data.price_cents }}</span>                           
                                <span class="installments">{{ slotProps.data.discount }} </span>
                            </div>
                            <div class="installments">{{ slotProps.data.parcela }}</div>
                            <div class="installments">{{ slotProps.data.frete }}</div>
                            <div class="textteste">{{ slotProps.data.title }} ...</div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>
    <div class="row g-8 justify-content-lg-center" v-if="viewproductsbaseprice">
        <div class="col-lg-10">
            <div class="titulo">Ofertas do dia <NuxtLink to="/navigation?vt=2" class="min-titulo">Ver lista completa</NuxtLink> </div>        
        </div>
    </div>
    <div class="row g-8 justify-content-center" >
        <div class="col-lg-10 col-md-10 col-sm-10 col-10">
            <Carousel :value="viewproductsbaseprice" :numVisible="5" :numScroll="5">
                <template #item="slotProps">
                    <NuxtLink @click="handleStoreCache(slotProps.data.token)" :to="`products?token=${slotProps.data.token}`">
                        <div class="border-1 surface-border border-round m-1 bg-custom">
                            <div class="mb-3">
                                <img :src="slotProps.data.thumbnail" :alt="slotProps.data.name" class="w-12"/>
                            </div>
                            <div v-if=" slotProps.data.original_price_integer" class="ui-recommendations-card__price-and-discount originalCustom" >
                                <span class="price-size textteste originalPrice">R$ {{ slotProps.data.original_price_integer }} </span>
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 originalPriceCents">
                                    ,{{ slotProps.data.original_price_cents }}
                                </span>                           
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ slotProps.data.price_integer }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24">
                                    ,{{ slotProps.data.price_cents }}
                                </span>                           
                                <span class="installments">{{ slotProps.data.discount }} </span>
                            </div>
                            <div class="installments">{{ slotProps.data.parcela }}</div>
                            <div class="installments">{{ slotProps.data.frete }}</div>
                            <div class="textteste">{{ slotProps.data.title }} ...</div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>

    <div class="row g-8 justify-content-lg-center">
        <div class="col-lg-10">
            <div class="titulo">Confira nossos itens <NuxtLink  to="/navigation?vt=3" class="min-titulo">Ver lista completa</NuxtLink> </div>       
        </div>
    </div>
    <div class="row g-8 justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-10">           
            <Carousel :value="viewproducts" :numVisible="5" :numScroll="5">
                <template #item="slotProps">
                    <NuxtLink  @click="handleStoreCache(slotProps.data.token)" :to="`products?token=${slotProps.data.token}`">
                        <div class="border-1 surface-border border-round m-1 bg-custom">
                            <div class="mb-3">
                                <img :src="slotProps.data.thumbnail" :alt="slotProps.data.name" class="w-12"/>
                            </div>
                            <div v-if=" slotProps.data.original_price_integer" class="ui-recommendations-card__price-and-discount originalCustom" >
                                <span class="price-size textteste originalPrice">R$ {{ slotProps.data.original_price_integer }} </span>
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 originalPriceCents">, 
                                    {{ slotProps.data.original_price_cents }}
                                </span>                           
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ slotProps.data.price_integer }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24">,
                                    {{ slotProps.data.price_cents }}
                                </span>                           
                                <span class="installments">{{ slotProps.data.discount }} </span>
                            </div>
                            <div class="installments">{{ slotProps.data.parcela }}</div>
                            <div class="installments">{{ slotProps.data.frete }}</div>
                            <div class="textteste">{{ slotProps.data.title }} ...</div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>
</template>
<script>
import ViewProductService  from '@/src/services/ViewProductService';
import Carousel  from '@/src/services/BannerService';
export default {
    data() {
        return {
            banner: null,
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 4,
                    numScroll: 1
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
                
            ],
            viewproducts: false,
            viewproductscache: false,
            viewproductsbaseprice: false
        };
    },    
    methods: {      
        async handleViewProducts(){
            const viewProductService = new ViewProductService();

            var { data: responseData, error: responseError } = await viewProductService.getActiveProducts('');
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if (status == 200) {
                this.viewproductsbaseprice = responseData._rawValue.data;
            }

            var { data: responseData, error: responseError } = await viewProductService.getProductNoBasePrice('');
            status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if (status == 200) {
                this.viewproducts = responseData._rawValue.data;
            }
        },
        handleGetProductByToken(token){
            navigateTo(`products?token=${token}`);
        },
        async handleBanner(){
            const carousel = new Carousel();
            const { data: responseData, error: responseError } = await carousel.getAllActive();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if (status == 200) {
                this.banner = responseData._rawValue.data;
            }
        },
        async handleGetCache(){          
            const viewProductService = new ViewProductService();
            const form = new FormData();
            const { data: responseData, error: responseError } = await viewProductService.getCache();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
            if(status === 200){
                this.viewproductscache = responseData._rawValue.data;             
            }       
        },
        async handleStoreCache(token){
            const viewProductService = new ViewProductService();
            const form = new FormData();
            form.append('token', token);
            const { data: responseData, error: responseError } = await viewProductService.storeCache(form);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null); 
        },
    },
    mounted() {       
        this.handleViewProducts();
        this.handleBanner();
        this.handleGetCache();
    },
};
</script>