<template>    
  <BreadCrumbs :items="formData.items"></BreadCrumbs>
  <Products :formData="formData"></Products>
</template>
  <style>
  .ui-vip-core .ui-pdp-container--top {
    margin-bottom: 12px;
  }
  </style>
<script >

  import utils from '@/src/utils/Utils';
  import ViewProductService from '@/src/services/ViewProductService'

  export default{
    data(){
      return{
        productToken: '',
        formData: {},
        items:{}
      }
    },
    methods:{
      async handlequeryString(){
        const url = window.location.search;
        this.productToken = utils.getQueryParam("token", url); 
        console.log(this.productToken)
      },
      async handleViewProductByToken(){
        const viewProductService = new ViewProductService();
        const { data: responseData, error: responseError } = await viewProductService.getActiveProductsByToken(this.productToken);
        let status = responseData.value ? responseData._rawValue.status : null;
        status = status ?? (responseError.value ? responseError.value.statusCode : null);                 
        
        if(status === 200){
          this.formData.title = responseData._rawValue.data.title;
          this.formData.condition = responseData._rawValue.data.condition;
          this.formData.listing_type = responseData._rawValue.data.listing_type;
          this.formData.original_price = responseData._rawValue.data.original_price;
          this.formData.original_price_integer = responseData._rawValue.data.original_price_integer;
          this.formData.original_price_cents = responseData._rawValue.data.original_price_cents;
          this.formData.price = responseData._rawValue.data.price;
          this.formData.price_integer = responseData._rawValue.data.price_integer;
          this.formData.price_cents = responseData._rawValue.data.price_cents;
          this.formData.thumbnail = responseData._rawValue.data.thumbnail;
          this.formData.token = responseData._rawValue.data.token;
          this.formData.pictures = responseData._rawValue.data.pictures;
          this.formData.saleTerms = responseData._rawValue.data.saleTerms;
          this.formData.attributes = responseData._rawValue.data.attributes;
          this.formData.items = responseData._rawValue.data.categories_root;
          //usuario
          this.formData.name = responseData._rawValue.data.name;
          this.formData.fantasy_name = responseData._rawValue.data.fantasy_name;
          this.formData.zipcode = responseData._rawValue.data.zipcode;
          this.formData.address = responseData._rawValue.data.address;
          this.formData.number = responseData._rawValue.data.number;
          this.formData.comment = responseData._rawValue.data.comment;
          this.formData.neighborhood = responseData._rawValue.data.neighborhood;
          this.formData.country = responseData._rawValue.data.country;
          this.formData.state = responseData._rawValue.data.state;
          this.formData.city = responseData._rawValue.data.city;

        }      
      }
    },
    mounted () {
      this.handlequeryString();
      this.handleViewProductByToken();
    }
  }

</script>