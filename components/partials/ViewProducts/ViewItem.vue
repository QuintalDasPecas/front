<template>
<div class="ui-pdp-container__col col-1 ui-pdp-container--column-right mt-16 pr-16 ui-pdp--relative">
    <div class="ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-right" style="top: -2472px;">        
            <div class="ui-pdp-container__row ui-pdp-container__row--seller-info" id="seller_info">
                <DetailPrice :price="formData.price_integer" :cents="formData.price_cents" :title="formData.title" :originalPrice="formData.original_price_integer" :originalPriceCents="formData.original_price_cents" />
            </div>        
       
        <!-- <div class="ui-pdp-container__row ui-pdp-component-list ui-vip-content-right mt-16">
            <DetailDevolution />
            <div class="ui-pdp-container__row ui-pdp-container__row--payment-methods" id="payment_methods">
                <DetailBuy />
            </div>
        </div>        -->
        
        <div class="mt-16">
            <DetailSaleTerm v-if="formData.saleTerms" :saleterm="formData.saleTerms"/>
        </div>
        <div class="mt-16">
            <DetailContact :name="formData.name" :FormData="formData" />
        </div>       
        <div class="mt-16">
            <DetailRating />
        </div>
    </div>
</div>
</template>
<script>
    export default{
        props:{
            formData:{
                type: Object,
                default: '',
                required: true
            }
        }
    }
</script>