<template>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputNome" class="form-label label-lg">Nome</label>
            <InputText autocomplete="off" size="large" v-model="name" type="text" class="form-control" id="inputNome" name="name" maxlength="150" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputCPF" class="form-label label-lg">CPF</label>
            <InputMask id="basic" mask="999.999.999-99" class="form-control p-inputmask p-inputmask-lg"  />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputBirthDate" class="form-label label-lg">Data Nascimento</label>
            <InputMask id="basic" mask="99/99/9999" class="form-control p-inputmask p-inputmask-lg"  />
        </div>
    </div>
</template>
