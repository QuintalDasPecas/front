<template>
        <br>
        <div class="ui-vip-core">
                <div class="ui-pdp-container ui-pdp-container--top">
                        <div class="ui-pdp-container__row">
                            <NuxtLink to="/">Voltar</NuxtLink>&nbsp;&nbsp;|     
                            <Breadcrumb :home="home" :model="items" class="ui-pdp-container__col col-1 ui-vip-core-container--head"/>                                
                        </div>
                </div>
        </div>        
</template>

<script>
export default {
    props:{
        items:{
            type: Object,
            defualt: ''
        }
    }
}
</script>