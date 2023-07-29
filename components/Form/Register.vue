<template>    
   <div class="home" v-show="activedRegister">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">   
                <div class="row justify-content-lg-center g-4">
                    <div class="col-lg-6">
                        <div class="panel">
                            <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
                            <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
                            <PartialsTermConditions></PartialsTermConditions>
                            <PartialsRegister></PartialsRegister>

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
const activedRegister = ref(true);

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
