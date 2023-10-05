<template>
    <section class="ui-search-filter-groups shops__filter-groups" v-for="(v , k) in formData.filters">
        <div class="ui-search-filter-dl shops__filter-items">
            <div role="heading" aria-level="3" class="ui-search-filter-dt-title shops-custom-primary-font">
                {{ v.name }}
            </div>
            <ul>
                <li class="ui-search-filter-container shops__container-lists" v-for="(vv , kk) in JSON.parse(v.value)">
                    <Checkbox v-model="selected"  :name="'filter[]'" :value="handleReturnValue(kk,vv)"/>
                    &nbsp;
                    <label :for="vv.id">{{ vv.value }}</label>                    
                </li>
            </ul>
        </div>
    </section>
    <NuxtLink @click="handleFilter()" v-if="selected.length">Filtrar</NuxtLink>
    <br>
    <NuxtLink @click="handleClearSelected()"  v-if="selected.length">Limpar filtro</NuxtLink>
</template>
<script>
    export default{
        data(){
            return {
                selected: [],
                param:'',
            }
        },
        props:{
            formData:{
                type: Object,
                default: '',
                required: true,
            }
        },
        methods:{
            handleFilter(){
                const selecteds = this.selected;

                if (selecteds.length === 0){
                    return false;
                }

                const form = [];
                selecteds.forEach(function( v, k ){
                    let data = JSON.parse(v);
                    form[k] = {'attribute_id' : data.id};
                });
                this.$emit('handleFilter', form)
            },
            handleReturnValue( k, v){
                const obj = { k: k, id: v.id}
                if ( v ){
                    return JSON.stringify(obj);
                }
            },
            handleClearSelected(){
                this.selected = [];
            }
        },
        mounted(){
            const route = useRoute();
            this.param = route.params.slug;
        },
        emits: ['handleFilter'],
    }
</script>