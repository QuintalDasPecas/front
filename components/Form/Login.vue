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
                                        <InputText class="form-control" v-model="FormLogin.email"/>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-6 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label">Senha</label>
                                        <Password v-model="FormLogin.password"/>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-md-center">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="/" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="#" @click="handleSubmit" class="btn btn-primary btn-lg btn-width-defult">
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
<script lang="ts" setup>

interface FormLogin {
    email : string;
    password : string;
    remember : boolean;
};

const FormLogin: FormLogin = {
    'email' : '',
    'password' : '',
    'remember' : false
};

const handleSubmit = () => {

    const cookie = useFetch('http://127.0.0.1:8000/sanctum/csrf-cookie',{
        method : 'GET',
        mode : 'cors',
        credentials : 'include'
    });

    const { data, pending, error, refresh } = useFetch('http://127.0.0.1:8000/api/login', {
    onRequest({ request, options }) {
        // Set the request headers
        options.headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'mode': 'cors',
            'credentials': 'include'
        }
        options.method = 'POST';
        options.body = new URLSearchParams(FormLogin );
    },
    onRequestError({ request, options, error }) {
        // Handle the request errors
        console.log('Erro Request', error); 
    },
    onResponse({ request, response, options }) {
        // Process the response data
       if( response._data.status ){
            window.location.href = "http://127.0.0.1:3000/";
       } 
    },
    onResponseError({ request, response, options }) {
        // Handle the response errors
        console.log('Erro', response); 
    }
    })
}


</script>