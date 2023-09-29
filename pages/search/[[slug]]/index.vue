<template>    
  <div class="ui-search shops__ui-main">        
    <div style="display:contents"></div>
    <div class="ui-search-main ui-search-main--without-header ui-search-main--only-products shops__search-main">
      <aside class="ui-search-sidebar shops__sidebar">
        <div class="ui-search-breadcrumb shops__breadcrumb">
          <h1 class="ui-search-breadcrumb__title shops-custom-primary-font">Lanterna</h1>
        </div>
        <div class="ui-search-search-result shops__result">
          <span class="ui-search-search-result__quantity-results shops-custom-secondary-font">1.804.044 resultados</span>
        </div>
        <a class="ui-search-styled-label screen-reader-only" >Ir para resultados</a>
        <div class="ui-search-styled-label screen-reader-only" role="heading" aria-level="2">Filtros</div>
        <Filter></Filter>       
      </aside>
      <section class="ui-search-results ui-search-results--without-disclaimer shops__search-results">
        <SearchResultItem :formData="viewproducts" />
      </section>
    </div>     
  </div>

  
</template>

<script>
  import ViewProductService from '@/src/services/ViewProductService'

  export default{
    data(){
      return{
        viewproducts: {},
      }
    },
    methods:{
      async handleViewProducts(){

        
        const route = useRoute();
        const param = route.params.slug;
        
        const viewProductService = new ViewProductService();

        const { data: responseData, error: responseError } = await viewProductService.getActiveProductsByTitle(param);
        let status = responseData.value ? responseData._rawValue.status : null;
        status = status ?? (responseError.value ? responseError.value.statusCode : null); 
        this.viewproducts = responseData._rawValue.data;
      },
    },
    mounted(){
      this.handleViewProducts();

    }
  }

</script>