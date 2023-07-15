<template>   
    <div class="container">
        <div class="row">               
            <form class="row justify-content-lg-center g-4">
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6">
                        <label for="inputName" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="inputName" name="name">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6">
                        <label for="inputEmail" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="inputEmail" name="email">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center"> 
                    <div class="col-lg-6">
                        <label for="inputPassword" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="inputPassword" name="password">
                    </div>
                </div>
                <div class="row g-2 justify-content-lg-center">
                    <div class="col-lg-6">
                        <label for="inputRepeatPassword" class="form-label">Repetir Senha</label>
                        <input type="password" class="form-control" id="inputRepeatPassword" name="repeatPassword">
                    </div>
                </div>
                <div class="row g-3 justify-content-lg-center">
                    <div class="col-lg-3 col-md-6">
                        <NuxtLink href="/" class="btn btn-secondary btn-lg">Voltar</NuxtLink>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <button type="button" class="btn btn-success btn-lg"  style="float: right;" id="btnConfirmar">Confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
@import url("~/css/login.css");
</style>