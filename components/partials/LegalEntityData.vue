<template>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputCNPJ" class="form-label label-lg">CNPJ</label>
            <InputMask @blur="setFormDataEntity(formData)" v-model="formData.cnpj" id="inputCNPJ" mask="99.999.999/9999-99" class="form-control p-inputmask p-inputmask-lg" autocomplete="off" />
            <small class="p-error" id="text-error" v-if="errorMessage.cnpj">{{ errorMessage.cnpj || '&nbsp;' }}</small>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <label for="inputstateRegistration" class="form-label label-lg">Inscrição Estadual</label>
            <InputText @blur="setFormDataEntity(formData)" v-model="formData.stateRegistration" type="text" class="form-control" size="large" id="inputstateRegistration" />
            <small class="p-error" id="text-error" v-if="errorMessage.stateRegistration">{{ errorMessage.stateRegistration || '&nbsp;' }}</small>
        </div>
    </div>
    <div class="row g-2 justify-content-lg-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputBusinessName" class="form-label label-lg">Razão Social</label>
            <InputText @blur="setFormDataEntity(formData)" v-model="formData.name" type="text" class="form-control" size="large" id="inputBusinessName" name="businessname" />
            <small class="p-error" id="text-error" v-if="errorMessage.name">{{ errorMessage.name || '&nbsp;' }}</small>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="inputFantasyName" class="form-label label-lg">Nome Fantasia</label>
            <InputText @blur="setFormDataEntity(formData)" v-model="formData.fantasyName" type="text" class="form-control" size="large" id="inputFantasyName" name="fantasyname" />
            <small class="p-error" id="text-error" v-if="errorMessage.fantasyName">{{ errorMessage.fantasyName || '&nbsp;' }}</small>
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
                    cnpj : '',
                    stateRegistration : '',
                    name : '',
                    fantasyName : ''
                }
            };
        },
        methods:{
            setFormDataEntity(value){
                this.$emit('setFormDataEntity', value);
            }
        },
        emits: ['setFormDataEntity'],
    }
</script>