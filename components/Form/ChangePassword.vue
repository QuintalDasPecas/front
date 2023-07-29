<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-12">
                        <div class="panel">
                            <form>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label label-lg">Senha atual</label>                                        
                                        <Password v-model="password" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label label-lg">Nova senha</label>
                                        <Password v-model="newpassword" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-6 col-sm-8 col-4">
                                        <label for="inputPassword" class="form-label label-lg">Repetir nova senha</label>
                                        <Password v-model="recoverpassword" size="large" id="password" name="password" :feedback="false" toggle-mask autocomplete="off" :maxlength="16" />
                                    </div>
                                </div>
                                <div class="row box-button justify-content-lg-center">
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
                                        <NuxtLink to="" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
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

const password = ref('');
const newpassword = ref('');
const recoverpassword = ref('');

</script>