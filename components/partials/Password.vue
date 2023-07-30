<template>
     <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-6 col-sm-8 col-4">
            <label for="inputEmail" class="form-label label-lg">E-mail</label>                                        
            <InputText type="email" class="form-control" @blur="setFormDataPassword(formData)" v-model="formData.email" size="large" id="inputEmail" name="email" :feedback="false" toggle-mask autocomplete="off" :maxlength="150" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-6 col-sm-8 col-4">
            <label for="inputPassword" class="form-label label-lg">Senha atual</label>                                        
            <Password @blur="setFormDataPassword(formData)" v-model="formData.password" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-6 col-sm-8 col-4">
            <label for="inputPassword" class="form-label label-lg">Nova senha</label>
            <Password @blur="setFormDataPassword(formData)" v-model="formData.newpassword" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-6 col-sm-8 col-4">
            <label for="inputPassword" class="form-label label-lg">Repetir nova senha</label>
            <Password @blur="setFormDataPassword(formData)" v-model="formData.recoverpassword" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
        </div>
    </div>
</template>
<script>
    export default { 
        data(){
            return{
                formData : {
                    password : '',
                    newpassword : '',
                    recoverpassword : ''
                } 
            };
        },
        methods:{
            setFormDataPassword( value ){
                this.$emit('formDataPassword', value);
            }
        },
        emits: ['formDataPassword'],
    }
</script>