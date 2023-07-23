<template>
   
    <div class="home">
            <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row  g-2 justify-content-md-center">  
                    <div class="col-lg-6"> 
                    <Panel header="Recuperar senha">       
                        <form class="row">
                            <div class="row g-2 justify-content-md-center">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="inputNome" class="form-label">E-mail</label>
                                    <br>
                                    <InputText v-model="email" name="email" class="form-control"/>
                                </div>
                            </div>  
                            <div class="row g-2 justify-content-md-center">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <NuxtLink to="/login" class="btn btn-primary btn-lg">
                                        <i class="pi pi-arrow-left"></i>
                                        Voltar
                                    </NuxtLink>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <NuxtLink to="#" class="btn btn-primary btn-lg btn-right">
                                        <i class="pi pi-check"></i>
                                        Enviar
                                    </NuxtLink>
                                </div>
                            </div>
                        </form>  
                    </Panel>  
                    </div>        
                </div>
            </div>
        </section>
    </div>        
</template>
<style>
@import url("~/css/login.css");
</style>

<script setup>
const email = null;

</script>