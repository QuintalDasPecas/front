<template> 
    <CarouselCustom></CarouselCustom>
    <br><br>
    <div class="row g-8 justify-content-lg-center">
        <div class="col-lg-10">
            <div class="titulo">Baseada na sua última visita <NuxtLink class="min-titulo">Ver Histórico</NuxtLink> </div>        
        </div>
    </div>
    <div class="row justify-content-lg-center">
        <div class="col-lg-10">
            <Carousel :value="viewproducts" :numVisible="5" :numScroll="5">
                <template #item="slotProps">
                    <NuxtLink :to="`products?token=${slotProps.data.token}`">
                        <div class="border-1 surface-border border-round m-1 bg-custom">
                            <div class="mb-3">
                                <img :src="slotProps.data.thumbnail" :alt="slotProps.data.name" class="w-12"/>
                            </div>
                            <div>
                                <span class="price-size textteste">R$ {{ slotProps.data.original_price }} </span>
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ slotProps.data.price }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24"> {{ slotProps.data.cent }}</span>                           
                                <span class="installments">{{ slotProps.data.discount }} </span>
                            </div>
                            <div class="installments">{{ slotProps.data.parcela }}</div>
                            <div class="installments">{{ slotProps.data.frete }}</div>
                            <div class="textteste">{{ slotProps.data.title }}</div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>
    <div class="row g-8 justify-content-lg-center">
        <div class="col-lg-10">
            <div class="titulo">Ofertas do dias <NuxtLink class="min-titulo">Ver Histórico</NuxtLink> </div>        
        </div>
    </div>
    <div class="row g-8 justify-content-lg-center">
        <div class="col-lg-10">
            <Carousel :value="viewproducts" :numVisible="4" :numScroll="4">
                <template #item="slotProps">
                    <NuxtLink :to="`products?token=${slotProps.data.token}`">
                        <div class="border-1 surface-border border-round m-1 bg-custom">
                            <div class="mb-3">
                                <img :src="slotProps.data.thumbnail" :alt="slotProps.data.name" class="w-12"/>
                            </div>
                            <div>
                                <span class="price-size textteste">R$ {{ slotProps.data.original_price }} </span>
                            </div>
                            <div class="ui-recommendations-card__price-and-discount">
                                <span class="price-size textteste">R$ {{ slotProps.data.price }} </span> 
                                <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24"> {{ slotProps.data.cent }}</span>                           
                                <span class="installments">{{ slotProps.data.discount }} </span>
                            </div>
                            <div class="installments">{{ slotProps.data.parcela }}</div>
                            <div class="installments">{{ slotProps.data.frete }}</div>
                            <div class="textteste">{{ slotProps.data.title }}</div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
 import ViewProductService  from '@/src/services/ViewProductService';

export default {
    data() {
        return {
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
            viewproducts: ''
        };
    },    
    methods: {
        getSeverity(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        async handleViewProducts(){
                const viewProductService = new ViewProductService();

                const { data: responseData, error: responseError } = await viewProductService.getActiveProducts('');
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);                 
                console.log(responseData)
                this.viewproducts = responseData._rawValue.data;
        },
        handleGetProductByToken(token){
            navigateTo(`products?token=${token}`);
        }
    },
    mounted() {       
        this.handleViewProducts();

    },
};
</script>