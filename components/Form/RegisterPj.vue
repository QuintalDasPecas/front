<template>   
    <section data-testid="recommendations" class="recommendations" type="recommendations">
        <div class="container">
            <div class="row g-8  justify-content-lg-center">
                <div class="col-lg-8">
                    <div class="panel">
                        <form class="row justify-content-lg-center g-4 col-lg-12">
                            <div class="row g-2 justify-content-lg-center">
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputCNPJ" class="form-label">CNPJ</label>
                                    <InputText type="text" class="form-control" id="inputCNPJ" autocomplete="false" />
                                </div>
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputInscricaoEstadual" class="form-label">Inscrição Estadual</label>
                                    <InputText type="text" class="form-control" id="inputAddress" />
                                </div>
                            </div>
                            <div class="row g-2 justify-content-lg-center">
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputBusinessName" class="form-label">Razão Social</label>
                                    <InputText type="text" class="form-control" id="inputBusinessName" name="businessname" />
                                </div>
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputFantasyName" class="form-label">Nome Fantasia</label>
                                    <InputText type="email" class="form-control" id="inputFantasyName" name="fantasyname" />
                                </div>   
                            </div>
                            <div class="row g-2 justify-content-lg-center">             
                                <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                                    <label for="inputZipCode" class="form-label">CEP</label>
                                    <InputMask autocomplete="off" id="basic" class="form-control" mask="99.999-999"  />
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <label for="inputAddress" class="form-label">Endereço</label>
                                    <InputText type="text" class="form-control" id="inputAddress" name="address" />
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <label for="inputNumber" class="form-label">Número</label>
                                    <InputText type="text" class="form-control" id="inputNumber" name="numer" />
                                </div>
                            </div>
                            <div class="row g-2 justify-content-lg-center">
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputComplement" class="form-label">Complemento</label>
                                    <InputText type="text" class="form-control" id="inputComplement" name="complement" />
                                </div>
                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <label for="inputNeighBorHood" class="form-label">Bairro</label>
                                    <InputText type="text" class="form-control" id="inputNeighBorHood" name="neighborhood" />
                                </div>
                            </div>
                            <div class="row g-2 justify-content-lg-center">
                                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <label for="inputCity" class="form-label">Cidade</label>
                                    <InputText type="text" class="form-control" id="inputCity" name="city" />
                                </div>  
                                <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                                    <label for="selectUf" class="form-label">Estado</label>
                                    <InputText type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="row g-2 box-button justify-content-lg-center">
                                <div class="col-lg-5 col-6">
                                    <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                        <i class="pi pi-arrow-left"></i> Voltar
                                    </NuxtLink>
                                </div>
                                <div class="col-lg-5 col-6">
                                    <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                        <i class="pi pi-check"></i> Confirmar
                                    </NuxtLink>
                                </div>
                            </div>                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>