<template>
    <Card>
        <template #title>
            <div class="row">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    {{ label }}
                    <i v-Tooltip.top="'Preenchimento obrigatório.'" v-if="required" class="bi bi-asterisk icon-required"></i>&nbsp;
                    <i v-Tooltip.top="tooltip" v-if="tooltip" class="pi pi-question-circle icon-tooltip text-primary"></i>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2  d-md-flex justify-content-end" v-if="hidden == true || (hidden == false && required == false)">
                    <Button v-if="!compReadOlny[componentKey]" v-Tooltip.top="toopTipNaoAplica" icon="pi pi-eye" severity="primary" rounded outlined  aria-label="Favorite" @click="handleNaoAplica(componentKey)" />
                    <Button v-if="compReadOlny[componentKey]"  v-Tooltip.top="toopTipNaoAplica" icon="pi pi-eye-slash" severity="primary" rounded outlined aria-label="Favorite" @click="handleNaoAplica(componentKey)" />
                </div>
            </div>
        </template>
        <template #subtitle>
            {{ hint }}
        </template>
        <template #content>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <InputText v-if="component === 'TEXT_INPUT' || component === 'NUMBER_INPUT' || component === 'NUMBER_UNIT_INPUT' " v-model="value"  size="large" class="input-text-main-features" :class="{ 'p-invalid': invalid }" :maxlength="value_max_length" :readonly="compReadOlny[componentKey]" :id="name + componentKey"/>  
                <Dropdown v-if="component === 'COMBO' || component === 'COLOR_INPUT' || component === 'TEXT_OUTPUT'" v-model="value" :options="options" optionLabel="name" placeholder="" class="w-full md:w-14rem" :class="{ 'p-invalid': invalid }" :disabled="compReadOlny[componentKey]" :id="name + componentKey" />            
                <InputNumber  inputId="locale-user" prefix="R$ " :minFractionDigits="2" v-if="component === 'CURRENCY_INPUT'" v-model="currency"  size="large" class="input-text-main-features" :class="{ 'p-invalid': invalid }" :maxlength="value_max_length" :readonly="compReadOlny[componentKey]" :id="name + componentKey"/>  
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
            <div class="row g-2">             
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div> 
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end">
                    <Button label="Confirmar" outlined :disabled="compReadOlny[componentKey]" @click="handleConfirm(name, !this.value ? this.currency : this.value, attribute_id, componentKey, true)" size="large" class="float-end" />
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
        },
        hidden: {
            type: Boolean,
            required: true
        },
        required: {
            type: Boolean,
            required: true
        },
        value_max_length: {
            type: Number,
            required: true,
            default: 0
        },
        readonly : {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            value: '',
            selected: '',
            currency: 0.00,
            btnDisabled: false,
            invalid: false,
            compReadOlny: [],
            toopTipNaoAplica: 'Não aplica.'
        };
    },
    methods: {
        async handleConfirm(nameProp, valueProp, attibuteId, position, required){
            this.invalid = false;
            if(required && !valueProp){
                this.invalid = true;
                return false; 
            }
            this.$emit('handleConfirm', {id: attibuteId, name: nameProp.toLowerCase() , value: valueProp, position: position, required: required});
        },
        // async handleGetSelected( nameProp, valueProp ){
        //     this.$emit('handleGetSelected', { name: nameProp, value: valueProp });
        // },
        async handleNaoAplica( position ){
            if(this.compReadOlny[position]){
                this.compReadOlny[position] = false;
                this.btnDisabled = false;
                this.value = '';
            }else{
                this.compReadOlny[position] = true;
                this.btnDisabled = true;
                this.value = 'N/A';
            } 
            this.$emit('handleNaoAplica', position);
        }
    },   
    emits: ['handleConfirm']
};
</script>
