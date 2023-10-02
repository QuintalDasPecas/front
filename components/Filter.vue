<template>
    <section class="ui-search-filter-groups shops__filter-groups">
        <Localizacao />
        <Marca />
        <Tipo />
        <Condicao />
        <Categoria />
        <Preco />              
    </section>    
</template>

<script>

    export default{
        props:{
            Attribute:{
                type:Object,
                default: '',
                required: true,
            }
        }
    }
</script>