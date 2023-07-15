<template>    
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row">           
                    <form class="row">
                        <div class="row g-2 justify-content-md-center">
                            <div class="col-lg-4 col-md-6 col-sm-8 col-4">
                                <label for="inputEmail" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="inputEmail" name="email" />
                            </div>
                        </div>
                        <div class="row g-2 justify-content-md-center">
                            <div class="col-lg-4 col-md-6 col-sm-8 col-4">
                                <label for="inputPassword" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="inputPassword" name="password" autocomplete="off">
                            </div>
                        </div>
                        <div class="row g-2 justify-content-md-center">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-2">
                                <NuxtLink href="/" class="btn btn-secondary btn-lg" id="btnToGoBack" name="togoback">Voltar</NuxtLink>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-2">
                                <button type="submit" class="btn btn-success btn-lg"  style="float: right;" id="btnConform" name="confirm">Confirmar</button>
                            </div>
                        </div>
                        <div class="row g-2  justify-content-md-center">
                            <div class="col-lg-4 col-md-6 col-sm-8 col-4">
                                <NuxtLink href="/recoverpassword" style="width: 100%;" class="btn btn-warning btn-lg" id="btnRecoverPassword" name="recoverpassword">Recuperar Senha</NuxtLink>
                            </div>
                        </div>
                        <div class="row g-2  justify-content-md-center">
                            <div class="col-lg-4 col-md-6 col-sm-8 col-4">
                                <NuxtLink href="/register" style="width: 100%;" class="btn btn-primary btn-lg" id="btnCreateAccount" name="createaccounts">Criar conta</NuxtLink>
                            </div>
                        </div>
                    </form>           
                </div>
            </div>
        </section>
    </div>
</template>