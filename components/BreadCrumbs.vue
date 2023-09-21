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
    data() {
        return {           
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
</script>