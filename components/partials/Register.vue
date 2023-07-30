<template>
    <form method="post" action="" class="row justify-content-lg-center g-2">
        <div class="row g-2 justify-content-lg-center">
            <div class="col-lg-12 col-md-6 col-sm-8 col-4">
                <label for="name" class="form-label label-lg">Nome</label>
                <InputText type="text" v-model="name" size="large" class="form-control" id="name" name="name" autocomplete="off" :class="{ 'p-invalid': errorMessageName }" aria-describedby="text-error" maxlength="50" />
                <small class="p-error" id="text-error" v-if="errorMessageName">{{ errorMessageName || '&nbsp;' }}</small>                           
            </div>
        </div>
        <div class="row g-2 justify-content-lg-center">
            <div class="col-lg-12 col-md-6 col-sm-8 col-4">
                <label for="email" class="form-label label-lg">E-mail</label>
                <InputText v-model="email" size="large" class="form-control" id="email" name="email" autocomplete="off" :class="{ 'p-invalid': errorMessageEmail }" aria-describedby="text-error" maxlength="50" />
                <small class="p-error" id="text-error" v-if="errorMessageEmail">{{ errorMessageEmail || '&nbsp;' }}</small>
            </div>
        </div>
        <div class="row g-2 justify-content-lg-center"> 
            <div class="col-lg-12 col-md-6 col-sm-8 col-4">
                <label for="password" class="form-label label-lg">Senha</label>
                <br>
                <Password v-model="password" id="password" name="password" toggleMask autocomplete="off" :feedback="false" :class="{ 'p-invalid': errorMessagePassword }" :maxlength="16" />
                <small class="p-error" id="text-error" v-if="errorMessagePassword">{{ errorMessagePassword || '&nbsp;' }}</small>
            </div>
        </div>
        <div class="row g-2 justify-content-lg-center">
            <div class="col-lg-12 col-md-6 col-sm-8 col-4">
                <label for="confirmPassword" class="form-label label-lg">Repetir Senha</label>
                <br>
                <Password v-model="password_confirmation" id="password_confirmation" name="password_confirmation" toggleMask autocomplete="off" :feedback="false" :class="{ 'p-invalid': errorMessagePasswordConfrimation }" :maxlength="16" />
                <small class="p-error" id="text-error"  v-if="errorMessagePasswordConfrimation">{{ errorMessagePasswordConfrimation || '&nbsp;' }}</small>
            </div>
        </div>
        <div class="row g-2 box-button justify-content-lg-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <NuxtLink to="/login" class="btn btn-primary btn-lg btn-width-defult">
                    <i class="pi pi-arrow-left"></i>
                    Voltar
                </NuxtLink>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <NuxtLink  class="btn btn-primary btn-lg btn-width-defult" @click="onSubmit">
                    <i class="pi pi-check"></i>
                    Enviar
                </NuxtLink>
            </div>
        </div>
    </form>    
</template>
