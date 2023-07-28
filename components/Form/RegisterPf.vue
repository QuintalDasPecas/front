<template> 
    <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-8">
                        <div class="panel">
                            <form class="row justify-content-lg-center g-4 col-lg-12">
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                                        <label for="inputCPF" class="form-label">CPF</label>
                                        <InputMask autocomplete="off" id="basic" class="form-control" mask="999.999.999-99"  />
                                    </div>
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputNome" class="form-label">Nome</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputNome" name="name" maxlength="100" />
                                    </div>
                                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                                        <label for="inputBirthDate" class="form-label">Data Nasc.</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputBirthDate" name="birthdate" maxlength="8" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                                        <label for="inputCEP" class="form-label">CEP</label>
                                        <InputMask autocomplete="off" id="basic" class="form-control" mask="99.999-999"  />
                                    </div>
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputAddress" class="form-label">Endereço</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputAddress" name="address" maxlength="100" />
                                    </div>
                                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                                        <label for="inputNumber" class="form-label">Número</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputNumber" name="number" maxlength="15" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">    
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputComplement" class="form-label">Complemento</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputComplement" maxlength="50" />
                                    </div>
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputNeighborhood" class="form-label">Bairro</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputNeighborhood" name="neighborhood" maxlength="50" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                                        <label for="inputCity" class="form-label">Cidade</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputCity" name="city" maxlength="50" />
                                    </div>
                                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                                        <label for="inputState" class="form-label">Estado</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputState" name="state" maxlength="2" />
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