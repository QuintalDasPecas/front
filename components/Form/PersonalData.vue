<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                
            </div>
        </section>
    </div>                       
    <div class="home" v-show="pf">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-10">
                        <div class="panel">
                            <form>
                                <PartialsIndividualData></PartialsIndividualData>
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
                                <PartialsLegalEntityData></PartialsLegalEntityData>                                               
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
<script setup>
const pf = ref(false);
const pj = ref(false);
const checked = ref(false);
const termoCondicoes = ref('');
pf.value = false;


function tipoPessoa(){
   
    pj.value = false;
    pf.value = false;

    if( checked.value ){
        pj.value = true;
    }

    if( !checked.value ){
        pf.value = true;
    }

}


</script>