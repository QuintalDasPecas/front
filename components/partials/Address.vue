<template>    
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <label for="cep" class="form-label label-lg">CEP</label>
            <InputMask id="cep" mask="99.999-999" v-model="cepInput" @blur="fetchCepData" @keyup.enter="fetchCepDataOnEnter" class="form-control  p-inputmask p-inputmask-lg" />
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12 col-12"></div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <label for="InputText Address" class="form-label label-lg">Endereço</label>
            <InputText  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Address" name="address" />
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <label for="InputText Number" class="form-label label-lg">Número</label>
            <InputText  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Number" name="number" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">                                   
        <div class="col-lg-11 col-md-12 col-sm-12 col-12">
            <label for="InputText Complement" class="form-label label-lg">Complemento</label>
            <InputText  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Complement" />
        </div>                                   
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-11 col-md-12 col-sm-12 col-12">
            <label for="InputText Neighborhood" class="form-label label-lg">Bairro</label>
            <InputText  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Neighborhood" name="neighborhood" />
        </div>
    </div>    
    <div class="row g-2 justify-content-lg-center">    
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <label for="InputText City" class="form-label label-lg">Cidade</label>
            <InputText  autocomplete="off" size="large"  type="text" class="form-control" id="InputText City" name="city" />
        </div>
        <div class="col-lg-3 col-12 col-sm-12 col-12">
            <label for="InputText Uf" class="form-label label-lg">Estado</label>
            <InputText autocomplete="off" size="large" type="text" class="form-control" />
        </div>
    </div> 
    <div class="row g-2 box-button justify-content-lg-center">
        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
            <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                <i class="pi pi-arrow-left"></i> Voltar
            </NuxtLink>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
            <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                <i class="pi pi-check"></i> Confirmar
            </NuxtLink>
        </div>
    </div>
</template>