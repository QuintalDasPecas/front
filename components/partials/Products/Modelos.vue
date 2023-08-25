<template>
    <Card>
        <template #title >{{ label }} 
            <span  v-Tooltip.top="tooltip" v-if="tooltip">
                <i class="pi pi-question-circle"></i>
            </span>
        </template>
        <template #subtitle>{{ hint }}</template>
        <template #content>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">              
                <InputText v-if="component === 'TEXT_INPUT' || component === 'NUMBER_INPUT'" v-model="value"  size="large" class="input-text-main-features" />  
                <Dropdown v-if="component === 'COMBO'" v-model="selected" :options="options" optionLabel="name" placeholder="Selecione" class="w-full md:w-14rem" />            
            </div>
            <div class="row" v-if="component === 'BOOLEAN_INPUT'">
                <div class="col-lg-3 col-md-3 col-sm-3 col-3" ></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <div class="flex align-items-center" >
                    <RadioButton v-model="radiovalue" inputId="radiobuttonyes" name="" value="Sim" />
                        <label for="radiobuttonyes" class="ml-2 form-label"> Sim</label>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3">    
                    <div class="flex align-items-center">
                        <RadioButton v-model="radiovalue" inputId="radiobuttonno" name="" value="Não" />
                        <label for="radiobuttonno" class="ml-2 form-label"> Não</label>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3" ></div>
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
            required: true
        },
        label: {
            type: Object,
            required: true
        },
        tooltip: {
            type: Object,
            required: false
        },
        hint: {
            type: Object,
            required: false
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