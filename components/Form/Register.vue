<template>    
    <div class="home" v-show="activedRegister">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">   
                <div class="row justify-content-lg-center g-4">
                    <div class="col-lg-6">
                        <div class="panel">
                            <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
                            <Message severity="error" v-if="errorMessage.message" v-for="(value, key) in errorMessage.message" :key="key">{{ value[0] }}</Message>
                            <PartialsTermConditions @typeRegister="handleTypeRegister" v-if="activedTermRegister" />
                            <PartialsLegalEntityData :errorMessage="errorMessage" @setFormDataEntity="handleformDataEntity" v-if="typeRegister === 1" />
                            <PartialsIndividualData :errorMessage="errorMessage" @setFormDataIndividual="handleformDataIndividual" v-if="typeRegister === 2" />
                            <PartialsPassword @formDataPassword="handleformDataPassword" :errorMessage="errorMessage" v-if="typeRegister === 1 || typeRegister === 2"/>
                            <PartialsControlButton @onSubmit="handleOnSubmit" v-if="typeRegister === 1 || typeRegister === 2" :redirectUrl="redirectUrl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import TermConditions from '~/components/partials/TermConditions.vue';
import LegalEntityData from '~/components/partials/LegalEntityData.vue';
import IndividualData from '~/components/partials/IndividualData.vue';
import Password from '~/components/partials/Password.vue';
import ControlButton from '~/components/partials/ControlButton.vue';
import Register from '@/src/services/RegisterService';
import { useForm } from 'vee-validate';

export default {
  components: {
    TermConditions,
    LegalEntityData,
    IndividualData,
    Password,
    ControlButton
  },
  data() {
    return {
      successMessage: '',
      errorMessage: { name: '', fantasyName: '', cpf:'', dataNascimento:'', cnpj: '', stateRegistration: '',  email: '', password: '', newpassword: '', recoverpassword: '', message: []},
      activedRegister: true,
      typeRegister: 0,
      activedTermRegister: true,
      redirectUrl: '/register/users',
      formDataEntity: { name: '', fantasyName: '', cnpj: '', stateRegistration:''},
      formDataPassword: { email: '', password: '', recoverpassword: ''},
      formDataIndividual: { name: '', cpf: '', dataNascimento: ''},
      isValid : true      
    };
  },
  methods: {
    handleTypeRegister( type ) {
      this.typeRegister = type;
      this.activedTermRegister = false;
    },
    handleformDataPassword( value ){
      this.formDataPassword.email = value.email;
      this.formDataPassword.password = value.password;
      this.formDataPassword.recoverpassword = value.recoverpassword;
    },
    handleformDataEntity( value ){
      this.formDataEntity.name = value.name;
      this.formDataEntity.fantasyName = value.fantasyName;
      this.formDataEntity.cnpj = value.cnpj;
      this.formDataEntity.stateRegistration = value.stateRegistration;
    },
    handleformDataIndividual( value){
      this.formDataIndividual.name = value.name;
      this.formDataIndividual.cpf = value.cpf;
      this.formDataIndividual.dataNascimento = value.dataNascimento;
    },
    handleOnSubmit( value ){
      try{
       
        this.errorMessage.message = false;
        
        if( value === true ){

          this.validateField();
          if ( !this.isValid ){
              return false;
          }
        
          const form = new FormData();          
          const register = new Register();

          if( this.typeRegister == 1){
            form.append('name', this.formDataEntity.name);
            form.append('fantasy_name', this.formDataEntity.fantasyName);
            form.append('state_registration', this.formDataEntity.stateRegistration);
            form.append('cpf_cnpj', this.formDataEntity.cnpj);
            form.append('email', this.formDataPassword.email)
            form.append('password', this.formDataPassword.password);
            form.append('password_confirmation', this.formDataPassword.recoverpassword);
          }
          
          if( this.typeRegister == 2){
            form.append('name', this.formDataIndividual.name);
            form.append('cpf_cnpj', this.formDataIndividual.cpf);
            form.append('data_nascimento', this.formDataIndividual.dataNascimento);
            form.append('email', this.formDataIndividual.email)
            form.append('password', this.formDataIndividual.password);
            form.append('password_confirmation', this.formDataIndividual.recoverpassword);
          }
          
          const responseData = register.store(form, this.typeRegister);
          
          if( responseData.error.value?.data.errors ){
            this.errorMessage.message = responseData.error.value?.data.errors;
            return false;
          }

          this.successMessage = "Cadastro efetuado!";
          
          const { resetForm } = useForm();
          resetForm();
        } 

      }catch( error ){

        this.errorMessage.message = error.message;
      
      } 
    },
    validateField(){
        this.errorMessage = {
          cnpj : '',
          cpf : '',
          dataNascimento : '',
          name : '',
          fantasyName : '',
          stateRegistration : '',
          email : '',
          password : '',
          recoverpassword : ''
        };

        this.isValid = true;

        if( this.typeRegister === 1){

          if ( !this.formDataEntity.name ){
            this.errorMessage.name = 'Campo obrigatório';
            this.isValid = false;
          }

          if ( !this.formDataEntity.fantasyName ){
            this.errorMessage.fantasyName = 'Campo obrigatório';
            this.isValid = false;
          }

          if ( !this.formDataEntity.cnpj ){
            this.errorMessage.cnpj = 'Campo obrigatório';
            this.isValid = false;
          }

          if ( !this.formDataEntity.stateRegistration ){
            this.errorMessage.stateRegistration = 'Campo obrigatório';
            this.isValid = false;
          }

        }

        if( this.typeRegister === 2){

          if ( !this.formDataIndividual.name ){
            this.errorMessage.name = 'Campo obrigatório';
            this.isValid = false;
          }        

          if ( !this.formDataIndividual.cpf ){
            this.errorMessage.cpf = 'Campo obrigatório';
            this.isValid = false;
          }

          if ( !this.formDataEntity.dataNascimento ){
            this.errorMessage.dataNascimento = 'Campo obrigatório';
            this.isValid = false;
          }       

        }        

        if ( !this.formDataPassword.email ){
          this.errorMessage.email = 'Campo obrigatório';
          this.isValid = false;
        }

        if ( !this.formDataPassword.password ){
          this.errorMessage.password = 'Campo obrigatório';
          this.isValid = false;
        }

        if ( !this.formDataPassword.recoverpassword ){
          this.errorMessage.recoverpassword = 'Campo obrigatório';
          this.isValid = false;
        }
    }
  }
};
</script>
