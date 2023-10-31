<template>
    <Card v-if="!isObject(items)">
        <template #header>                
        </template>
        <template #title> 
        </template>
        <template #subtitle>         
        </template>
        <template #content>
            <p>Aguarde...</p>
        <div class="flex justify-content-center">
        <ProgressSpinner />
        </div>
        </template>
        <template #footer>
        </template>        
    </Card>
    <br>
    <Card v-if="isObject(items)">
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
                <div class="col-lg-12 col-md-12 col-sm-12 justify-content-end">
                    <label class="form-label label-lg">{{ items.title }}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 justify-content-end">
                    <label class="form-label label-lg">Preço:</label><br />
                    <span v-if="!isEdit" class="fs-4">{{ !formData.price ? 'Não informado' : formData.price}}</span>
                    <span v-if="isEdit">
                        <InputNumber  v-model="formData.price" class="inputNumber" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5"  />
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 justify-content-end"  v-for="(item, k) in items.attributes">
                    <label class="form-label label-lg">{{ item.name }}:</label><br />
                    <span v-if="!isEdit" class="fs-4">{{ !item.value_name ? 'Não informado' : item.value_name}}</span>
                    <span v-if="isEdit">
                        <Dropdown v-if="item.options" v-model="selected[item.id]" editable showClear :options="item.options" optionLabel="name"  />
                        <InputText v-model="selected[item.id]" size="large" v-if="!item.options" class="form-control" />
                    </span>
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
                    <Button @click="handleEdit(items)" label="Editar" outlined  size="large" class="float-center" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 justify-content-end">
                    <Button label="Confirmar" @click="handleImportItem(items.ml_id)" outlined  size="large" class="float-end" />
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
            default: undefined
        }
    },
    data() {
        return {
            i: 0,
            isEdit: false,
            selected: [],
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
            ],
            formData: this.items
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods:{
        async handleSearch(){
            this.$emit('handleSearch'); 
        },
        async handleEdit(data){
            this.formData.price = data.price;
            const itemSelect = [];
            for(const v in data.attributes){
                const dd = data.attributes;
                itemSelect[dd[v].id] = dd[v].value_name;
            }
            this.selected = itemSelect;

            if(this.isEdit){
                this.isEdit = false;
                return false;
            }

            if(!this.isEdit){
                this.isEdit = true;
                return false;
            }           
        },       
        async handleImportItem(mlId){

            const listingTypeFree = 'free';
            this.formData.ml_id = mlId;
            this.formData.id = mlId;
            this.formData.entity_id = localStorage.getItem('entityId');
            this.formData.listing_type_id = listingTypeFree;
            this.formData.original_price = 0;
            this.formData.available_quantity = 0;
            this.formData.buying_mode = 0;
           
            let i = 0;
            const attributes = [];
            for(const row in this.selected){
                const field = this.selected[row];
                if(field != null && typeof field === 'object'){
                    attributes[row] = {value_id: this.selected[row].code, value_name: this.selected[row].name};
                    i++;
                }        
            }
            this.formData.attributes = attributes;
            this.$emit('handleImportItem', this.formData);
            this.handleSearch();
        },
        isObject(obj) {           
            if (obj !== null && obj !== undefined) {
                return (Object.keys(obj).length > 0) ? true : false;
            } else {
                return false;
            }
        }
    },
    emits: ['handleSearch','handleImportItem']
};
</script>