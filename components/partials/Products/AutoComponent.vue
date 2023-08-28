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
                <InputText v-if="component === 'TEXT_INPUT' || component === 'NUMBER_INPUT' || component === 'NUMBER_UNIT_INPUT' " v-model="value"  size="large" class="input-text-main-features" :id="name + componentKey"/>  
                <Dropdown v-if="component === 'COMBO' || component === 'COLOR_INPUT' || component === 'TEXT_OUTPUT'" v-model="selected" :options="options" optionLabel="name" placeholder="" class="w-full md:w-14rem"  :id="name + componentKey" />            
                <InputNumber  inputId="locale-user" prefix="R$ " :minFractionDigits="2" v-if="component === 'CURRENCY_INPUT' " v-model="currency"  size="large" class="input-text-main-features"  :id="name + componentKey"/>  
            </div>
            <div class="row" v-if="component === 'BOOLEAN_INPUT'">
                <div class="col-lg-3 col-md-3 col-sm-3 col-3" ></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <div class="flex align-items-center" >
                        <RadioButton v-model="value" :inputId="'radiobuttonyes' + componentKey" value="Sim" />
                        <label :for="'radiobuttonyes' + componentKey" class="ml-2 form-label"> Sim</label>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3">    
                    <div class="flex align-items-center">
                        <RadioButton v-model="value" :inputId="'radiobuttonno' + componentKey" value="Não" />
                        <label :for="'radiobuttonno' + componentKey" class="ml-2 form-label"> Não</label>
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
                    <Button label="Confirmar" @click="handleConfirm(name, this.value, this.selected, this.currency, attribute_id, componentKey)" size="large" class="float-end" />
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
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        tooltip: {
            type: String,
            required: false
        },
        hint: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        componentKey: {
            type: Number,
            required: true
        },
        attribute_id: {
            type:Number,
            required: true
        }
    },
    data() {
        return {
            value: '',
            selected: '',
            currency: 0.00
        };
    },
    methods: {
        async handleConfirm(nameProp, valueProp, selectedProp, currency, attibuteId, position){
            valueProp = currency ?? valueProp;
            this.$emit('handleConfirm', {id: attibuteId, name: nameProp.toLowerCase() , value: (valueProp ? valueProp : selectedProp), position: position});
        },
        async handleGetSelected( nameProp, valueProp ){
            this.$emit('handleGetSelected', { name: nameProp, value: valueProp });
        }
    },   
    emits: ['handleConfirm','handleGetSelected']
};
</script>
