<template>
    <div class="row justify-content-lg-center">
        <div class="col-lg-12">
            <Checkbox v-model="termoCondicoes" inputId="checked" />
            Aceito os Termos e condições e autorizo o uso de meus dados de acordo com a Declaração de privacidade.
        </div>
    </div>
    <div class="row justify-content-lg-center">
        <br>
    </div>
    <div class="row justify-content-lg-center">
        <div class="col-lg-3">
        </div>
        <div class="col-lg-5">
            <ToggleButton v-model="checked" onLabel="Conta empresa" offLabel="Conta pessoal" onIcon="pi pi-building" offIcon="pi pi-user" class="w-9rem" />
        </div>
        <div class="col-lg-3">
        </div>
    </div>
</template>
<script setup>
const checked = ref(false);
const termoCondicoes = ref(false);
</script>