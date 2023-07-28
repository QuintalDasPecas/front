<template>  
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">   
                <div class="row justify-content-lg-center g-4">
                    <div class="col-lg-6">
                        <div class="panel">
                            <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
                            <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
                            <form method="post" action="" class="row justify-content-lg-center g-2">
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="name" class="form-label">Nome</label>
                                        <InputText type="text" v-model="name" class="form-control" id="name" name="name" autocomplete="off" :class="{ 'p-invalid': errorMessageName }" aria-describedby="text-error" maxlength="50" />
                                        <small class="p-error" id="text-error" v-if="errorMessageName">{{ errorMessageName || '&nbsp;' }}</small>                           
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="email" class="form-label">E-mail</label>
                                        <InputText v-model="email" class="form-control" id="email" name="email" autocomplete="off" :class="{ 'p-invalid': errorMessageEmail }" aria-describedby="text-error" maxlength="50" />
                                        <small class="p-error" id="text-error" v-if="errorMessageEmail">{{ errorMessageEmail || '&nbsp;' }}</small>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center"> 
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="password" class="form-label">Senha</label>
                                        <br>
                                        <Password v-model="password" id="password" name="password" toggleMask autocomplete="off" :feedback="false" :class="{ 'p-invalid': errorMessagePassword }" :maxlength="16" />
                                        <small class="p-error" id="text-error" v-if="errorMessagePassword">{{ errorMessagePassword || '&nbsp;' }}</small>
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="confirmPassword" class="form-label">Repetir Senha</label>
                                        <br>
                                        <Password v-model="password_confirmation" id="password_confirmation" name="password_confirmation" toggleMask autocomplete="off" :feedback="false" :class="{ 'p-invalid': errorMessagePasswordConfrimation }" :maxlength="16" />
                                        <small class="p-error" id="text-error"  v-if="errorMessagePasswordConfrimation">{{ errorMessagePasswordConfrimation || '&nbsp;' }}</small>
                                    </div>
                                </div>
                                <div class="row g-2 box-button justify-content-lg-center">
                                    <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                                        <NuxtLink to="/login" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i>
                                            Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                                        <NuxtLink  class="btn btn-primary btn-lg btn-width-defult" @click="onSubmit">
                                            <i class="pi pi-check"></i>
                                            Enviar
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
import Register from '@/src/services/RegisterService';
import { useForm } from 'vee-validate';

const email = ref('');
const name = ref ('');
const password = ref('');
const password_confirmation = ref('');
const errorMessageName = ref('');
const errorMessageEmail = ref('');
const errorMessagePassword = ref('');
const errorMessagePasswordConfrimation = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const { resetForm } = useForm();

async function validateField()
{
    errorMessageName.value = '';
    errorMessageEmail.value = '';
    errorMessagePassword.value = '';
    errorMessagePasswordConfrimation.value = '';

    if ( !name.value ){
        errorMessageName.value = 'Campo obrigatório';
    }

    if ( !email.value ){
        errorMessageEmail.value = 'Campo obrigatório';
    }

    if ( !password.value ){
        errorMessagePassword.value = 'Campo obrigatório';
    }

    if ( !password_confirmation.value ){
        errorMessagePasswordConfrimation.value = 'Campo obrigatório';
    }

    if ( name.value && email.value && password.value && password_confirmation.value ){
        return true;
    }
}

async function onSubmit() {   

    const isValid = await validateField();

    if ( !isValid ){
        return false;
    }

    const form = new FormData();
    form.append('name', name.value);
    form.append('email', email.value);
    form.append('password', password.value);
    form.append('password_confirmation', password_confirmation.value);

    const re = new Register();
    const responseData = await re.store(form);
    
    if ( errorMessage.value ){
        errorMessage.value = responseData.error.value?.data?.message;
    }  
    
    if ( !errorMessage.value ){
        successMessage.value = "Cadastro efetuado!";
    }   
    
    resetForm();
}
</script>
