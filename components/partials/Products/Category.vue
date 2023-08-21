<template>
    <Card>
        <template #title>Sua busca coincide com estas categorias. Alguma delas corresponde ao seu produto?</template>
        <template #subtitle></template>
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
                { name: 'aaaa', code: 'a' },
                { name: 'bbbbb', code: 'b' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
</script>