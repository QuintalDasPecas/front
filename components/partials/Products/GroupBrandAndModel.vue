<template>
    <Card>
        <template #title>
            <div class="row">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    {{ label }}                    
                    <i v-Tooltip.top="tooltip" v-if="tooltip" class="pi pi-question-circle icon-tooltip text-primary"></i>
                </div>
            </div>
        </template>
        <template #subtitle>{{ hint }}</template>
        <template #content>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 g-4">
                    <label for="inputItemCondition" class="form-label label-lg">
                        Marca <i v-Tooltip.top="'Preenchimento obrigatório.'" v-if="required" class="bi bi-asterisk icon-required"></i>
                    </label>
                    <br>
                    <span>Informe a marca verdadeira do produto ou Genérica se não tiver marca.</span>
                    <br>                    
                    <AutoComplete v-model="formData[1]" dropdown :suggestions="options" @complete="search" size="large" class="input-text-main-features" :class="{ 'p-invalid': invalid }" :maxlength="'255'" :readonly="compReadOlny[2]" :id="'BRAND'"/>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 g-4">
                    <label for="inputSalesTerm" class="form-label label-lg">
                        Modelo <i v-Tooltip.top="'Preenchimento obrigatório.'" v-if="required" class="bi bi-asterisk icon-required"></i>
                    </label>                   
                    <InputText v-model="formData[2]"  size="large" class="input-text-main-features" :class="{ 'p-invalid': invalid }" :maxlength="'255'" :readonly="compReadOlny[2]" :id="'MODEL'"/>
                </div>               
            </div>
        </template> 
        <template #footer>
            <div class="row g-2">             
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div> 
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end"></div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-12 justify-content-end">
                    <Button label="Confirmar" outlined @click="handleConfirm()" size="large" class="float-end" />
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
        tooltip: {
            type: String,
            required: false,
            default: ''
        },
        hint: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            required: false,
            defult: true
        },
        value_max_length: {
            type: Number,
            required: false,
            default: 255
        },
        readonly : {
            type: Boolean,
            required: false,
            default: false
        },
        label: {
            type: String,
            required: true,
            default: ''
        },
        hint: {
            type: String,
            required: true
        },
        componentKey: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            formData: [],
            btnDisabled: false,
            invalid: false,
            compReadOlny: [],
            toopTipNaoAplica: 'Não aplica.',
            globalPT: null 
        };
    },
    methods: {
        async handleConfirm(){
            this.invalid = false;
            if(!this.formData){                
                return false;
            }       
            if(!this.formData[1]){
                this.invalid = true;
                return false;
            }
            if(!this.formData[2]){
                this.invalid = true;
                return false;
            }   
            this.$emit('handleConfirm', { name: 'BRAND', value: this.formData[1], position: this.componentKey});
            this.$emit('handleConfirm', { name: 'MODEL', value: this.formData[2], position: this.componentKey});
        },       
        async handleNaoAplica( position ){           
            if(this.compReadOlny[position]){
                this.compReadOlny[position] = false;
                this.btnDisabled = false;
                this.formData[position] = '';
            }else{
                this.compReadOlny[position] = true;
                this.btnDisabled = true;
                this.formData[position] = 'N/A';
            } 
            this.$emit('handleNaoAplica', position);
        }
    },   
    emits: ['handleConfirm']
};
</script>
