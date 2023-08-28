<template>
    <Card>
        <template #title>{{ label }} 
            <span  v-Tooltip.top="tooltip" v-if="tooltip">
                <i class="pi pi-question-circle"></i>
            </span>
        </template>
        <template #subtitle></template>
        <template #content>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12"> 
                <InputNumber  inputId="locale-user" prefix="R$ " :minFractionDigits="2" v-if="component === 'TEXT_INPUT' || component === 'NUMBER_INPUT' || component === 'NUMBER_UNIT_INPUT' " v-model="value"  size="large" class="input-text-main-features" />  
            </div>
        </template> 
        <template #footer>
            <div class="row g-2 box-button">             
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div> 
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end">
                    <Button label="Confirmar" size="large" class="float-end" />
                </div>
            </div>
        </template>
    </Card>
</template>
<script>
export default {
    data(){
        return {
            selected: '',
            value: 0.00
        }
    },
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
        }
    },
};
</script>