<template>    
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-6">
                        <div class="panel">
                            <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
                            <form method="POST" class="row">
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="inputEmail" class="form-label">E-mail</label>                                        
                                        <InputText v-model="email" class="form-control" maxlength="50" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label">Senha</label>
                                        <Password v-model="password" id="password" name="password" toggleMask autocomplete="off" :feedback="false" :maxlength="16" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="/" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
                                        <NuxtLink @click="onSubmit" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Confirmar
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="row g-2  justify-content-md-center">
                                    <div class="col-lg-10 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="/recoverpassword" class="btn btn-primary btn-lg btn-recover-password">Recuperar Senha</NuxtLink>
                                    </div>
                                </div>
                                <div class="row g-2  justify-content-md-center">
                                    <div class="col-lg-10 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="/register/users" style="width: 100%;" class="btn btn-primary btn-lg btn-register-user">Criar conta</NuxtLink>
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

<script lang="ts" setup>
import Auth from '@/src/services/AuthService';
import { useForm } from 'vee-validate';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const { resetForm } = useForm();

async function onSubmit(){
   
    const formAuth = new FormData();
    formAuth.append('email', email.value);
    formAuth.append('password', password.value);
    formAuth.append('remember', 'false');
   
    const { data: responseData, error: responseError } =  await (new Auth().auth(formAuth));

    const status = responseData.value?.status;

    if(status === 200){
        localStorage.setItem('logged', 'true');
        localStorage.setItem('users',responseData.value?.data.user);
        localStorage.setItem('userId',responseData.value?.data.id);
        resetForm();   
        navigateTo('/',{ external : true });          
    }

    errorMessage.value = responseError.value?.data.message ?? '';
}
</script>