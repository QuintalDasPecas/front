<template>
    <div class="ui-pdp-container__row ui-pdp-component-list pr-16 pl-16">
        <div class="ui-pdp-container__col col-2 ui-vip-core-container--short-description ui-vip-core-container--column__right">
            <section data-testid="reviews-desktop" class="ui-review-capability-main ui-review-capability__container-vpp">
                <div>
                    <h3>Informações do vendedor</h3> <hr>
                </div>
                <div v-if="name">                   
                    <h5><i class="pi pi-user iconSize" ></i> {{ name }} </h5> <hr>
                </div>
                <div>
                    <i v-if="formData.address" class="bi bi-geo-alt iconSize"></i> 
                    <span v-if="formData.address">{{ formData.address }},</span> 
                    <span v-if="formData.number">{{ formData.number }} -</span> 
                    <span v-if="formData.neighborhood">{{ formData.neighborhood }},</span>
                    <span v-if="formData.city">{{ formData.city }} - </span>
                    <span v-if="formData.state">{{ formData.state }}, </span>
                    <span v-if="formData.zipcode">{{ formData.zipcode }} <hr></span>                    
                </div>
                <div>
                    <i class="pi pi-facebook iconSize"></i> {{ formData.facebook }}
                </div>
                <div>
                    <i class="pi pi-envelope iconSize"></i> {{ formData.email }}
                </div>
                <div>    
                    <i class="pi pi-whatsapp iconSize"></i> {{ formData.phone }}                    
                </div>
                <hr>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            name:{
                type: String,
                default: '',
                required: true
            },
            formData:{
                type: Object,
                default: '',
                required: true,
            },
        }
    }
</script>