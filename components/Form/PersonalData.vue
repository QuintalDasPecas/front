<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-12">
                        <div class="panel">
                            <form>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-10 col-md-12 col-sm-12 col-12">
                                        <label for="inputNome" class="form-label">Nome</label>
                                        <InputText autocomplete="off" v-model="name" type="text" class="form-control" id="inputNome" name="name" />
                                    </div>
                                </div>
                                <div class="row g-2 justify-content-lg-center">
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputCPF" class="form-label">CPF</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputCPF" name="cpf" />
                                    </div>
                                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                        <label for="inputBirthDate" class="form-label">Data Nascimento</label>
                                        <InputText autocomplete="off"  type="text" class="form-control" id="inputBirthDate" name="birthdate" />
                                    </div>
                                </div>
                                <div class="row g-2 box-button justify-content-lg-center">
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
                                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-check"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-5 col-md-3 col-sm-4 col-2">
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

    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-12">
                        <div class="panel">
                            <div class="row g-2 justify-content-lg-center">
                                <div class="container">
                                    <div class="row justify-content-lg-center">
                                        <form class="row justify-content-lg-center g-4 col-lg-8">
                                            <div class="row g-2 justify-content-lg-center">
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <label for="inputCNPJ" class="form-label">CNPJ</label>
                                                    <InputText type="text" class="form-control" id="inputCNPJ" autocomplete="false" />
                                                </div>
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <label for="inputInscricaoEstadual" class="form-label">Inscrição Estadual</label>
                                                    <InputText type="text" class="form-control" id="inputAddress" />
                                                </div>
                                            </div>
                                            <div class="row g-2 justify-content-lg-center">
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <label for="inputBusinessName" class="form-label">Razão Social</label>
                                                    <InputText type="text" class="form-control" id="inputBusinessName" name="businessname" />
                                                </div>
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <label for="inputFantasyName" class="form-label">Nome Fantasia</label>
                                                    <InputText type="email" class="form-control" id="inputFantasyName" name="fantasyname" />
                                                </div>   
                                            </div>                                                
                                            <div class="row g-3 box-button justify-content-lg-center">
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                                                        <i class="pi pi-check"></i> Voltar
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
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
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
  props: ['valorRecebido']
};
</script>