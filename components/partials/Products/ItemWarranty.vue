<template>
    <Card>
        <template #title>Você oferece garantia ? </template>
        <template #subtitle></template>
        <template #content>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12"> 
            <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />
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
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'Garantia de fábrica', code: 'NY' },
                { name: '3 meses', code: 'RM' },
                { name: 'Sem Garantia', code: 'LDN' },
                { name: '1 ano', code: 'IST' }
            ]
        };
    }
};
</script>