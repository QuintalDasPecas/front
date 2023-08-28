<template>
    <Card>
        <template #title>Indique o produto, marca, modelo e pricipais características  </template>
        <template #subtitle>Você também pode inserir o códico universal que o identifica. <span>Como posso encontrá-lo?</span> </template>
        <template #content>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <span class="p-input-icon-left" style="width: 100%;">
                        <i class="pi pi-search" />
                        <InputText v-model="formData.name" placeholder="Ex.: Lanterna traseira lado direito" :name="'predict'" size="large" class="input-text-main-features" />
                    </span>
                </div>
            </div>
        </template> 
        <template #footer>
            <div class="row">             
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div> 
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end">
                    <Button label="Confirmar" size="large" class="float-end" @click="handleSubmitPredict(true)" />
                </div>
            </div>
        </template>
    </Card>
</template>
<script>
export default {
    data(){
        return {
            formData: {
                name: ''
            }
        };
    },
    methods: {
        async handleSubmitPredict( value ){
            this.$emit('handleSubmitPredict', this.formData.name);
        }
    },
    emits: ['handleSubmitPredict']
}
</script>