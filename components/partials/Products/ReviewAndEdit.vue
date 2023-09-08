<template>   
    <Card>
        <template #header>                
        </template>
        <template #title> 
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    Revise a ficha técnica 
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <span class="float-end"><Button @click="handleSearch()" text class="btn-search-custom">Refazer a busca</Button></span>
                </div>
            </div>
        </template>
        <template #subtitle> 
            Estes são todos os dados que vamos preencher para você. 
        </template>
        <template #content>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 justify-content-end"  v-for="item in items.attributes">
                    <span class="fs-6"><b>{{ item.name }}</b></span>: {{ item.value_name }}
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <br><span class="fs-6"><b>Imagens:</b></span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12" v-for="item in items.pictures">                  
                    <Image :src="item.url" alt="Image" imageClass="img-size" preview />
                </div>                    
            </div>
        </template>
        <template #footer>
            <div class="row g-2">              
                <div class="col-lg-6 col-md-6 col-sm-6 justify-content-start">
                    <Button label="Editar" outlined  size="large" class="float-center" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 justify-content-end">
                    <Button label="Confirmar" outlined  size="large" class="float-end" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script>
import { PhotoService } from '@/src/services/PhotoService';

export default {
    props:{
        items:{
            type: Object,
            required: true,
            default: []
        }
    },
    data() {
        return {
            images: null,
            position: 'left',
            positionOptions: [
                {
                    label: 'Bottom',
                    value: 'bottom'
                },
                {
                    label: 'Top',
                    value: 'top'
                },
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods:{
        handleSearch(){
            this.$emit('handleSearch', true); 
        }
    },
    emits: ['handleSearch']
};
</script>