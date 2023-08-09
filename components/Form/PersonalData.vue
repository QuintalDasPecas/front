<template>            
    <div class="home" v-show="pf">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-10">
                        <div class="panel">
                            <form>
                                <PartialsIndividualData :formData="formData" :errorMessage="errorMessage" @setFormDataIndividual="handleformDataIndividual" v-if="typeRegister === 2"></PartialsIndividualData>
                                <div class="row g-2 box-button justify-content-lg-center">
                                    <div class="col-lg-6 col-md-3 col-sm-4 col-2">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-6 col-md-3 col-sm-4 col-2">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Confirmar
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
    <div class="home" v-show="pj">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-10">
                        <div class="panel">                            
                            <form>
                                <PartialsLegalEntityData :formData="formData" :errorMessage="errorMessage" @setFormDataEntity="handleformDataEntity" v-if="typeRegister === 1" ></PartialsLegalEntityData>                                               
                                <div class="row g-2 box-button justify-content-lg-center">
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Confirmar
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
<script>
 import Entity from '@/src/services/EntityService';

export default {
    data() {
        return {
            errorMessage: { name: '', cpf_cnpj: '', message: []},
            typeRegister: 2,
            pj: false,
            pf: true,
            formData: { name: 'JEferson', cpf_cnpj: '' }
        }
    },
    methods: {
        handleTypeRegister( type ) {
            this.typeRegister = type;
            this.activedTermRegister = false;
        },
        handleformDataEntity( value ){
            this.formData.name = value.name;
            this.formData.cpf_cnpj = value.cpf_cnpj;
        },
        handleformDataIndividual( value){
            this.formData.name = value.name;
            this.formData.cpf_cnpj = value.cpf_cnpj;
        },
        async handleOnLoad(){
            const userId = localStorage.getItem('userId');
            const entityId = localStorage.getItem('entityId'); 

            if( !entityId ){
                return false;
            }

            const entity = new Entity();
            const responseData = await entity.single(entityId);
            const status = responseData.data._value?.status;

            if( status === 200 ){
                this.formData.name = responseData.data._rawValue.data.name;
            }
        }
    },
    mounted(){
        this.handleOnLoad();
    }
}

</script>