
<template>  
    <div class="container" style="margin-top: 30px; margin-bottom: 20px;;">       
        <div class="row justify-content-lg-center g-4">
            <div class="col-6">
                <Panel header="Criar conta">           
                    <form method="post" action="" class="row justify-content-lg-center g-2">
                        <div class="row g-2 justify-content-lg-center">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <label for="inputName" class="form-label">Nome</label>
                                <InputText :model="name" class="form-control" />
                            </div>
                        </div>
                        <div class="row g-2 justify-content-lg-center">
                             <div class="col-lg-12 col-md-12 col-sm-12">
                                <label for="inputEmail" class="form-label">E-mail</label>
                                <InputText :model="email" class="form-control" />
                            </div>
                        </div>
                        <div class="row g-2 justify-content-lg-center"> 
                             <div class="col-lg-12 col-md-12 col-sm-12">
                                <label for="inputPassword" class="form-label">Senha</label>
                                <br>
                                <Password v-model="password" name="password" toggleMask autocomplete="off" />
                            </div>
                        </div>
                        <div class="row g-2 justify-content-lg-center">
                             <div class="col-lg-12 col-md-12 col-sm-12">
                                <label for="inputRepeatPassword" class="form-label">Repetir Senha</label>
                                <br>
                                <Password v-model="passwordrepeat" name="passwordrepeat" toggleMask autocomplete="off"/>                                
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
</template>

<script setup>
import { ref } from 'vue';

const name = ref(null);
const email = ref(null);
const password = ref(null);
const passwordrepeat = ref(null);



</script>
