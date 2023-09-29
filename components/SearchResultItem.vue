<template>   
        <div v-for="(v,k) in formData">
           <div class="card">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-4">
                                <Image :src="v.thumbnail" />
                            </div>
                            <div class="col-lg-5 ">
                               <h2 class="searchProducts"> {{ v.title }} </h2>
                               <div v-if=" v.original_price_integer" class="ui-recommendations-card__price-and-discount originalCustom" >
                                    <span class="price-size textteste originalPrice">R$ {{ v.original_price_integer }} </span>
                                    <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 originalPriceCents"> {{ v.original_price_cents }}</span>                           
                                </div>
                                <div class="ui-recommendations-card__price-and-discount">
                                    <span class="price-size ">R$ {{ v.price_integer }}</span>
                                    <span class="cents andes-money-amount__cents andes-money-amount__cents--superscript-24 ">,{{ v.price_cents }}</span>
                                </div> 
                                <div class=" flex justify-content-start rating">
                                    <Rating v-model="value" readonly  :cancel="false" />
                                </div>
                            </div>                            
                            <div class="col-lg-2 searchButton">
                                <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                    <i class="pi pi-shopping-cart"></i>  Ir à loja
                                </NuxtLink>
                            </div>
                            <div class="col-lg-1 searchProducts icon-color">
                                <NuxtLink>
                                    <i class="pi pi-heart"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <br>
        </div>        
</template>

<script>

import 'primeflex/primeflex.css';
import Rating from 'primevue/rating';

    export default {
        data(){
            return{
                value: null
            }
        },
        props: {
            formData: {
                type: Object,
                default: '',
                required: true,
            },
        },
        components: { Rating }
    }
</script>

