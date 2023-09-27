<template>
    <div class="ui-pdp-container__row ui-pdp-component-list pr-16 pl-16">
        <div class="ui-pdp-container__col col-2 ui-vip-core-container--short-description ui-vip-core-container--column__right">
            <section data-testid="reviews-desktop" class="ui-review-capability-main ui-review-capability__container-vpp">
                <div>
                    <h3>Informações do vendedor</h3> <hr>
                </div>
                <div>
                   
                    <h5><i class="pi pi-user iconSize" ></i> {{ name }} </h5> <hr>
                </div>
                <div>
                    <i class="bi bi-geo-alt iconSize"></i> {{ FormData.address }}, {{ FormData.number }} - {{ FormData.neighborhood }},
                    {{ FormData.city }} - {{ FormData.state }}, {{ FormData.zipcode }} <hr>
                </div>
                <div>
                    <i class="pi pi-facebook iconSize"></i> Jeferson@123Software.com <br> <br>
                    <i class="pi pi-envelope iconSize"></i> Jeferson@123Software.com <br> <br>
                    <i class="pi pi-whatsapp iconSize"></i> +55 (66) 98765-4321<hr>
                </div>
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
            FormData:{
                type: Object,
                default: '',
                required: true,
            },
        }
    }
</script>