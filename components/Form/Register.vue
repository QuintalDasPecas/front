<template>    
    <div class="home" v-show="activedRegister">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">   
                <div class="row justify-content-lg-center g-4">
                    <div class="col-lg-6">
                        <div class="panel">
                            <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
                            <Message severity="error" v-if="errorMessage">{{ errorMessage.message }}</Message>
                            <PartialsTermConditions @typeRegister="handleTypeRegister" v-if="activedTermRegister" />
                            <PartialsLegalEntityData :errorMessage="errorMessage" @setFormDataEntity="handleformDataEntity" v-if="typeRegister === 1" />
                            <PartialsIndividualData v-if="typeRegister === 2" />
                            <PartialsPassword @formDataPassword="handleformDataPassword" v-if="typeRegister === 1 || typeRegister === 2"/>
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
      errorMessage: { name: '', fantasyName: '', cnpj: '', stateRegistration: '',  email: '', password: '', newpassword: '', recoverpassword: '', message: ''},
      activedRegister: true,
      typeRegister: 0,
      activedTermRegister: true,
      redirectUrl: '/register/users',
      formDataEntity: { name: '', fantasyName: '', cnpj: '', stateRegistration:''},
      formDataPassword: { email: '', password: '', newpassword: '', recoverpassword: ''},
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
      this.formDataPassword.newpassword = value.newpassword;
      this.formDataPassword.recoverpassword = value.recoverpassword;
    },
    handleformDataEntity( value ){
      this.formDataEntity.name = value.name;
      this.formDataEntity.fantasyName = value.fantasyName;
      this.formDataEntity.cnpj = value.cnpj;
      this.formDataEntity.stateRegistration = value.stateRegistration;
    },
    handleOnSubmit( value ){
      if( value === true ){

        this.validateField();
        if ( !this.isValid ){
            return false;
        }
       
        const form = new FormData();
        form.append('name', this.formDataEntity.name);
        form.append('fantasyName', this.formDataEntity.fantasyName);
        form.append('stateRegistration', this.formDataEntity.stateRegistration);
        form.append('cnpj', this.formDataEntity.cnpj);
        form.append('email', this.formDataPassword.email)
        form.append('password', this.formDataPassword.password);
        form.append('password_confirmation', this.formDataPassword.recoverpassword);

        const re = new Register();
        const responseData = re.store(form);
         console.log(responseData)      
         
        if( !responseData ){
          this.errorMessage.message = 'Erro ao efetuar cadastro.';
          return false;
        }

        this.successMessage = "Cadastro efetuado!";
        
        const { resetForm } = useForm();
        resetForm();
      }  
    },
    validateField(){
        this.errorMessage = {
          cnpj : '',
          name : '',
          fantasyName : '',
          stateRegistration : '',
          email : '',
          password : '',
          newpassword : '',
          recoverpassword : ''
        };

        this.isValid = true;
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

        if ( !this.formDataPassword.email ){
          this.errorMessage.email = 'Campo obrigatório';
          this.isValid = false;
        }

        if ( !this.formDataPassword.password ){
          this.errorMessage.password = 'Campo obrigatório';
          this.isValid = false;
        }

        if ( !this.formDataPassword.newpassword ){
          this.errorMessage.newpassword = 'Campo obrigatório';
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
