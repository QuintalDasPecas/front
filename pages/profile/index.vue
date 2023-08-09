<template>  
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-center">
                    <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                        <div class="center accordion-custom">
                            <Accordion>
                                <AccordionTab header="Dados Pessoais">
                                    <FormPersonalData />
                                </AccordionTab>
                                <AccordionTab header="Endereço">
                                    <FormAddress />
                                </AccordionTab>
                                <AccordionTab header="Alterar senha">
                                    <FormChangePassword />
                                </AccordionTab>
                                <AccordionTab header="Arquivos">
                                    <FormUploads />
                                </AccordionTab>    
                            </Accordion>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    </div>                    
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>