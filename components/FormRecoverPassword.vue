<template>
   
    <div class="home">
            <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row">           
                    <form class="row">
                        <div class="row g-2 justify-content-md-center">
                            <div class="col-lg-4 col-md-6 col-sm-8 col-4">
                                <label for="inputNome" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="inputEmail" name="email" />
                            </div>
                        </div>  
                        <div class="row g-2 justify-content-md-center">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-2">
                                <NuxtLink href="/login" class="btn btn-secondary btn-lg">Voltar</NuxtLink>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-2">
                                <button type="submit" class="btn btn-success btn-lg" id="btnSend" name="send" style="float: right;">Enviar</button>
                            </div>
                        </div>
                    </form>           
                </div>
            </div>
        </section>
    </div>        
</template>
<style>
@import url("~/css/login.css");
</style>