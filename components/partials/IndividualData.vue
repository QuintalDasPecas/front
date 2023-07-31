<template>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputNome" class="form-label label-lg">Nome</label>
            <InputText @blur="setFormDataIndividual(formData)" autocomplete="off" size="large" v-model="formData.name" type="text" class="form-control" id="inputNome" name="name" maxlength="150" />
            <small class="p-error" id="text-error" v-if="errorMessage.name">{{ errorMessage.name || '&nbsp;' }}</small>
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputCPF" class="form-label label-lg">CPF</label>
            <InputMask @blur="setFormDataIndividual(formData)" id="basic" mask="999.999.999-99" v-model="formData.cpf" class="form-control p-inputmask p-inputmask-lg"  />
            <small class="p-error" id="text-error" v-if="errorMessage.cpf">{{ errorMessage.cpf || '&nbsp;' }}</small>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputBirthDate" class="form-label label-lg">Data Nascimento</label>
            <InputMask @blur="setFormDataIndividual(formData)" id="basic" mask="99/99/9999" v-model="formData.dataNascimento" class="form-control p-inputmask p-inputmask-lg"  />
            <small class="p-error" id="text-error" v-if="errorMessage.dataNascimento">{{ errorMessage.dataNascimento || '&nbsp;' }}</small>
        </div>
    </div>
</template>
<script>
    export default { 
        props : {
            errorMessage : {
                type : Object
            }
        },
        data(){
            return{
                formData : {
                    name : '',
                    cpf : '',
                    dataNascimento : ''
                }
            };
        },
        methods:{
            setFormDataIndividual(value){
                this.$emit('setFormDataIndividual', value);
            }
        },
        emits: ['setFormDataIndividual'],
    }
</script>