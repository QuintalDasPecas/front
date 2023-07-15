<template> 
    <div class="container">
        <div class="row justify-content-lg-center">
            <form class="row justify-content-lg-center g-4 col-lg-8">
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputCPF" class="form-label">CPF</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputCPF" name="cpf">
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <label for="inputNome" class="form-label">Nome</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputNome" name="name">
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputBirthDate" class="form-label">Data Nasc.</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputBirthDate" name="birthdate">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputCEP" class="form-label">CEP</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputCEP" name="cep">
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <label for="inputAddress" class="form-label">Endereço</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputAddress" name="address">
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputNumber" class="form-label">Número</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputNumber" name="number">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">    
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputComplement" class="form-label">Complemento</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputComplement">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputNeighborhood" class="form-label">Bairro</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputNeighborhood" name="neighborhood">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                        <label for="inputCity" class="form-label">Cidade</label>
                        <input autocomplete="off"  type="text" class="form-control" id="inputCity" name="city">
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputUf" class="form-label">Estado</label>
                        <select class="form-select" aria-label="Default select example" id="selectUf" name="uf">
                            <option selected></option>
                            <option value="1">SP</option>
                            <option value="2">MT</option>
                            <option value="3">SC</option>
                        </select>
                    </div>
                </div> 
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6 col-6">
                        <NuxtLink href="/" class="btn btn-secondary btn-lg" id="btnToGoBack" name="togoback">Voltar</NuxtLink>
                    </div>
                    <div class="col-lg-6 col-6">
                        <button type="button" class="btn btn-success btn-lg" id="btnCofnirm" name="confirm" style="float: right;">Confirmar</button>
                    </div>
                </div>  
            </form>
        </div>
    </div>
</template>
<style>
@import url("~/css/login.css");
</style>