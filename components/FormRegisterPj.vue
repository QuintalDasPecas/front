<template>   
    <style>
    @import url("~/css/login.css");
    </style>
     <div class="container">
        <div class="row justify-content-lg-center">
            <form class="row justify-content-lg-center g-4 col-lg-8">
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputCNPJ" class="form-label">CNPJ</label>
                        <input type="text" class="form-control" id="inputCNPJ" autocomplete="false">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputInscricaoEstadual" class="form-label">Inscrição Estadual</label>
                        <input type="text" class="form-control" id="inputAddress" >
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputBusinessName" class="form-label">Razão Social</label>
                        <input type="text" class="form-control" id="inputBusinessName" name="businessname">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputFantasyName" class="form-label">Nome Fantasia</label>
                        <input type="email" class="form-control" id="inputFantasyName" name="fantasyname">
                    </div>   
                </div>
                <div class="row g-2 justify-content-lg-center">             
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputZipCode" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="inputZipCode" name="zipcode" >
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <label for="inputAddress" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" name="address" >
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="inputNumber" class="form-label">Número</label>
                        <input type="text" class="form-control" id="inputNumber" name="numer">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputComplement" class="form-label">Complemento</label>
                        <input type="text" class="form-control" id="inputComplement" name="complement">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <label for="inputNeighBorHood" class="form-label">Bairro</label>
                        <input type="text" class="form-control" id="inputNeighBorHood" name="neighborhood">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                        <label for="inputCity" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="inputCity" name="city">
                    </div>  
                    <div class="col-lg-2 col-md-12 col-sm-12 col-12">
                        <label for="selectUf" class="form-label">Estado</label>
                        <select class="form-select" id="selectUf" aria-label="Default select example" name="uf">
                            <option selected></option>
                            <option value="1">SP</option>
                            <option value="2">MT</option>
                            <option value="3">SC</option>
                        </select>
                    </div>
                </div>
                <div class="row g-3 justify-content-lg-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <NuxtLink href="/" class="btn btn-secondary btn-lg" id="btnToGoBack" name="togoback">Voltar</NuxtLink>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <button type="button" class="btn btn-success btn-lg"  style="float: right;" id="btnConfirm" name="confirm">Confirmar</button>
                    </div>   
                </div>                
            </form>
        </div>    
    </div>
</template>