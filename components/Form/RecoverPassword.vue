<template>
   
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container-recoverpassword">
                <div class="row  g-2 justify-content-md-center">  
                    <div class="col-lg-4"> 
                    <div class="panel">       
                        <form class="row">
                            <div class="row g-2 justify-content-md-center">
                                <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                                    <label for="inputNome" class="form-label label-lg">E-mail</label>
                                    <br>
                                    <InputText v-model="email" name="email" class="form-control" maxlength="50" />
                                </div>
                            </div>  
                            <div class="row g-2 justify-content-md-center">
                                <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                                    <NuxtLink to="/login" class="btn btn-primary btn-lg btn-width-defult">
                                        <i class="pi pi-arrow-left"></i> Voltar
                                    </NuxtLink>
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                                    <NuxtLink to="#" class="btn btn-primary btn-lg btn-width-defult">
                                        <i class="pi pi-check"></i> Enviar
                                    </NuxtLink>
                                </div>
                            </div>
                        </form>  
                    </div>  
                    </div>        
                </div>
            </div>
        </section>
    </div>        
</template>


<script setup>
const email = null;

</script>