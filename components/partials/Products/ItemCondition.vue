<template>
    <Card>
        <template #title>
            <div class="row">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    {{ label }}  <i v-Tooltip.top="'Preenchimento obrigatório.'" v-if="required" class="bi bi-asterisk icon-required"></i>
                    <i v-Tooltip.top="tooltip" v-if="tooltip" class="pi pi-question-circle icon-tooltip text-primary"></i>
                </div>
            </div>
        </template>
        <template #subtitle>{{ hint }}</template>
        <template #content>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Listbox optionLabel="name" filter  v-model="formData[2]" class="w-full md:w-14rem" :options="options" :class="{ 'p-invalid': invalid }" :disabled="compReadOlny[2]" id="ITEM_CONDITION" ></Listbox>
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
            required: false,
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
        }
    },
    data() {
        return {
            formData: [],
            btnDisabled: false,
            invalid: false,
            compReadOlny: [],
            toopTipNaoAplica: 'Não aplica.',
            selected:''
        };
    },
    methods: {
        async handleConfirm(){
            this.invalid = false;
            if(!this.formData){                
                return false;
            }       
            if(!this.formData[2]){
                this.invalid = true;
                return false;
            }
            if(!this.formData[3]){
                this.invalid = true;
                return false;
            }   
            this.$emit('handleConfirm', { name: 'ITEM_CONDITION', value: this.formData[2], position: 2});
            this.$emit('handleConfirm', { name: 'SALES_TERM', value: this.formData[3], position: 2});
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
