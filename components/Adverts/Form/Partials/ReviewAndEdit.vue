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
                        <InputNumber v-model="formData.price" :class="{ 'p-invalid': !formData.price}" class="p-valid inputNumber" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" mode="decimal" />
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 justify-content-end">
                    <label class="form-label label-lg">Quantidade:</label><br />
                    <span v-if="!isEdit" class="fs-4">{{ !formData.avaliable_quantity ? 'Não informado' : formData.avaliable_quantity}}</span>
                    <span v-if="isEdit">
                        <InputNumber v-model="formData.avaliable_quantity" :class="{ 'p-invalid': !formData.avaliable_quantity}" class="inputNumber" inputId="minmaxfraction" />
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 justify-content-end"  v-for="(item, k) in items.attributes">
                    <label class="form-label label-lg">{{ item.name }}:</label><br />                
                    <span v-if="!isEdit" class="fs-4">{{ !item.value_name ? (!item.values ? 'Não informado' :  item.values) : 'Não informado'}}</span>
                    <span v-if="isEdit">
                        <Dropdown @change="handleChangeSelected(item.id, selected[item.id])" v-model="selected[item.id]" editable showClear :options="item.options" optionLabel="name"  />
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
import RegisterProductsService from '@/src/services/RegisterProductsService';

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
            formData: []
        };
    },   
    methods:{
        async handleSearch(){          
            this.$emit('handleSearch'); 
        },
        async handleEdit(data){
           
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
        async handleChangeSelected(id, data){

            const attributes = [];           
            const field = data;
            if(field != null && typeof field === 'object'){
                attributes[id] = {id: id, value_id: data.code, value_name: data.name};                   
            }else{
                attributes[id] = {id: id, value_id: '', value_name: data};
            }
                    
            this.formData.attributes = attributes;
        },
        async handleImportItem(mlId){
            const listingTypeFree = 'free';
            this.formData.ml_id = mlId;
            this.formData.id = mlId;
            this.formData.entity_id = localStorage.getItem('entityId');
            this.formData.listing_type_id = listingTypeFree;
            this.formData.original_price = 0;
            this.formData.buying_mode = 0;

            if(!this.formData.avaliable_quantity){
                this.showToast('warn','Atenção','Campo quantidade não pode permanecer em branco.');
                this.handleEdit(this.items);
                return false;
            }

            if(!this.formData.price){
                this.showToast('warn','Atenção','Campo preço não pode permanecer em branco.');
                this.handleEdit(this.items);
                return false;
            }           
           
            const importItem = new RegisterProductsService();
            let formData = new FormData();
            const value = this.formData;

            for(const v in value){
               if(v != 'attributes'){
                  formData.append(v,value[v]);
               }

               if(v == 'attributes'){                   
                  for(const vv in value[v]){
                     for(const vvv in value[v][vv]){
                        if( vvv != 'options'){
                           let data = value[v][vv][vvv];
                           let field = 'attributes[' + vv + '][' + vvv + ']';
                           formData.append(field, data);
                        }
                     }
                  }
               }
            }

            const { data: responseData, error: responseError } = await importItem.importItem(formData);
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
          
            if(status === 201){
                this.showToast('success', 'Sucesso', 'Salvo com sucesso');  
                formData = []; 
                this.$emit('handleImportItem', true);           
            }

            if(status === 400){
                this.showToast('error', 'Erro', responseError.value.data.data[0]);                    
            }

        },
        isObject(obj) {           
            if (obj !== null && obj !== undefined) {
                return (Object.keys(obj).length > 0) ? true : false;
            } else {
                return false;
            }
        },
        async showToast(severity, summary, detail) {
            this.$toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
        },
    },
    emits: ['handleSearch','handleImportItem']
};
</script>