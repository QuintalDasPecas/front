<template>
    <Card>
        <template #title>{{ component.name }} </template>
        <template #subtitle>{{ component.hint }}</template>
        <template #content>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <Listbox @click="handleGetSelected(selected)" v-model="selected" v-if="component.type=='list'" :options="component.options" filter optionLabel="name" class="w-full md:w-14rem" listStyle="max-height:250px" />   
                <InputText v-model="value" v-if="component.type=='number' || component.type=='string' || component.type=='number_unit'"  size="large" class="input-text-main-features" />              
            </div>
            <div class="row" v-if="component.type=='boolean'">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6" >
                    <div class="flex align-items-center" >
                    <RadioButton v-model="radiovalue" inputId="radiobuttonyes" name="" value="Sim" />
                        <label for="radiobuttonyes" class="ml-2 form-label"> Sim</label>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">    
                    <div class="flex align-items-center">
                        <RadioButton v-model="radiovalue" inputId="radiobuttonno" name="" value="Não" />
                        <label for="radiobuttonno" class="ml-2 form-label"> Não</label>
                    </div>
                </div>
            </div>  
        </template> 
        <template #footer>
            <div class="row g-2 box-button">             
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div> 
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end">
                    <Button label="Confirmar" @click="handleSubmit()" size="large" class="float-end" />
                </div>
            </div>
        </template>
    </Card>
</template>
<script>

export default {
    props: {       
        options: {
            type: Object,
            required: false
        },
        component: {
            type: Object,
            required: true,
            default: {
                hint: '',
                name: ''
            }
        }
    },
    data() {
        return {           
            selected: null,
            value: '',   
            radiovalue: ''        
        };
    },
    methods: {
        async handleSubmit(){
            this.$emit('handleSubmit', this.value  );
        },
        async handleGetSelected( selected ){
            this.value = selected;
        }
    },
    emits: ['handleSubmit'],
    mounted(){
        console.log( this.component);
    }
};
</script>