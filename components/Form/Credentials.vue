<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-col-center">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-8">
                        <div class="row g-2 justify-content-center panel">
                            <form>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="InputText Address" class="form-label label-lg">ID do Aplicativo</label>
                                    <InputText v-model="formData.client_id"  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Address" name="address" />
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="InputText Number" class="form-label label-lg">Chave Secreta</label>
                                    <InputText v-model="formData.client_secret" autocomplete="off" size="large"  type="text" class="form-control" id="InputText Number" name="number" />
                                </div>                         
                                <div class="row g-2 justify-content-center ButtonBottom">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <NuxtLink to="" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <NuxtLink @click="HandleCredentials()" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Enviar
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
    import MlbCredentials from '@/src/services/MlbCredentialsService';

    export default {
        data(){
            return {
                formData: {}
            }
        },
        methods: {
            async HandleCredentials(){
                const credentials = new MlbCredentials();
                const formData = new FormData();
                formData.append('client_id', this.formData.client_id);
                formData.append('client_secret', this.formData.client_secret);
                formData.append('entity_id', localStorage.getItem('entityId'));
                
                const { data: responseData, error: responseError } = await credentials.store(formData);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);
            }
        }
    }
</script>