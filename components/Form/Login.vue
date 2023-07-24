<template>    
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-md-center">
                    <div class="col-lg-6">
                        <Panel header="Login">
                            <form @submit.prevent="handleSubmit" class="row">
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-6 col-md-6 col-sm-8 col-4">
                                        <label for="inputEmail" class="form-label">E-mail</label>                                        
                                        <InputText class="form-control" v-model="FormData.email"/>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-6 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label">Senha</label>
                                        <Password v-model="FormData.password"/>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="/" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="#" @click="clickAuth" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Enviar
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="row g-2  justify-content-md-center">
                                    <div class="col-lg-6 col-md-6 col-sm-8 col-4">
                                        <NuxtLink to="/recoverpassword" class="btn btn-primary btn-lg btn-recover-password">Recuperar Senha</NuxtLink>
                                    </div>
                                </div>
                                <div class="row g-2  justify-content-md-center">
                                    <div class="col-lg-6 col-md-6 col-sm-8 col-4">
                                        <NuxtLink to="/register/users" style="width: 100%;" class="btn btn-primary btn-lg btn-register-user">Criar conta</NuxtLink>
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

<script lang="ts">

import { Auth } from '@/src/services/Auth';

interface FormData {
    email : string;
    password : string;
    remember : boolean;
};

const FormData: FormData = {
    'email' : '',
    'password' : '',
    'remember' : false
};

export default class Login {
  
  async enviarFormulario() {

    // Chamar o método doAuth com as credenciais fornecidas
    const isAuthSuccessful = (new Auth()).doAuth(FormData.email, FormData.password, FormData.remember);

    // Verificar o resultado da autenticação
    if (isAuthSuccessful) {
      console.log('Autenticação bem-sucedida!');
      // Aqui você pode redirecionar o usuário para a página após a autenticação bem-sucedida
    } else {
      console.log('Autenticação falhou!');
      // Aqui você pode mostrar uma mensagem de erro ou lidar com a falha de autenticação
    }
  }
}

</script>