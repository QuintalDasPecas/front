<template>  
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div class="row g-8  justify-content-lg-center">
                    <div class="col-lg-6">
                        <div class="center accordion-custom">
                            <Accordion>                                
                                <AccordionTab header="Meus dados" :model="name">
                                    <FormPersonalData></FormPersonalData>
                                </AccordionTab>
                                <AccordionTab header="Endereço">
                                    <FormAddress></FormAddress>
                                </AccordionTab>
                                <AccordionTab header="Alterar senha">
                                    <FormChangePassword></FormChangePassword>
                                </AccordionTab>
                                <AccordionTab header="Arquivos">
                                    <FormUpload></FormUpload>
                                </AccordionTab>    
                            </Accordion>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    </div>                    
</template>
<script setup>

const users = ref(localStorage.getItem('users'));
const userId = ref(localStorage.getItem('userId'));
const name = ref('');

name.value = users.value;

console.log(userId.value, users.value);


</script>