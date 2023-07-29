<template>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputCNPJ" class="form-label label-lg">CNPJ</label>
            <InputMask id="basic" mask="99.999.999/9999-99" class="form-control p-inputmask p-inputmask-lg" autocomplete="off" />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputInscricaoEstadual" class="form-label label-lg">Inscrição Estadual</label>
            <InputText type="text" class="form-control" size="large" id="inputAddress" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputBusinessName" class="form-label label-lg">Razão Social</label>
            <InputText type="text" class="form-control" size="large" id="inputBusinessName" name="businessname" />
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputFantasyName" class="form-label label-lg">Nome Fantasia</label>
            <InputText type="email" class="form-control" size="large" id="inputFantasyName" name="fantasyname" />
        </div>   
    </div>
</template>