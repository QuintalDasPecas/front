<template>
    <Card>
        <template #title>Qual é a condição do seu produto?</template>
        <template #subtitle>Se foi usado de alguma forma, selecione usado. <span>Ver política</span></template>
        <template #content>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
                </div>                
            </div>
        </template>
        <template #footer>
            <div class="row">             
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div> 
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end">
                    <Button label="Confirmar" size="large" class="float-end"/>
                </div>
            </div>
        </template>
    </Card>    
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'Novo', code: 'Novo' },
                { name: 'Usado', code: 'Usado' },
                { name: 'Recondicionada', code: 'Recondicionada' }
            ]
        };
    }
};
</script>