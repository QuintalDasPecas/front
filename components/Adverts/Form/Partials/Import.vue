<template>
    <div class="form">
        <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <form class="panel">
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                            <h4 >Total de itens: {{ this.totalItems }}</h4> 
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                            <h4> Concluidos: {{ this.concluidos }}</h4>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                            <h4> Pendentes: {{ this.pendentes }}</h4>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                            <h4> Processando: {{ this.processando }}</h4>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                                <ProgressBar :value="porcentagem" ></ProgressBar>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                <NuxtLink @click="handleImportAnalysis()" class="btn btn-outline-primary btn-lg btn-width-defult">
                                    Analisar
                                </NuxtLink>
                            </div>
                            <div v-if="isImport" class="col-lg-4 col-md-4 col-sm-4 col-4">
                                <NuxtLink @click="handleStart()" class="btn btn-outline-primary btn-lg btn-width-defult">
                                    <i class="pi pi-download"></i>  Iniciar importação
                                </NuxtLink>
                            </div>
                        </div>                        
                    </div>                    
                </form>            
            </div>
        </div>           
    </div>
</template>
<script>
       import ProductService from "@/src/services/ProductService";

    export default{
        data(){
            return{
                entityId: '',
                isProgressBar: false,
                message: '',
                formData: [],
                isImport: false,
                concluidos: 0,
                pendentes: 0,
                processando: 0,
                porcentagem: 0,
                totalItems: 0
            }
        },
        methods:{            
            async handleImportAnalysis(){
                this.message = '';
                this.isProgressBar = true;
                const productservice = new ProductService();
                const form = new FormData();
                this.entityId = localStorage.getItem('entityId');

                if (!this.entityId){
                    return false;
                }

                form.append('entity_id',this.entityId);
                
                const { data: responseData, error: responseError } = await productservice.importItemsIndex(form);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if (status === 201){
                    this.formData = responseData._rawValue.data;
                    this.concluidos = this.formData[1].imported.imported; 
                    this.totalItems = this.formData[1].import.toImport; 
                    this.isImport = true
                    this.isProgressBar = false;
                    this.message = 'Importação concluida!';              
                }

                if (status > 200){  
                    this.isProgressBar = false;
                }
            },
            async handleStart(){
                const productservice = new ProductService();
                const form = new FormData();
                this.entityId =  localStorage.getItem('entityId');

                if (!this.entityId){
                    return false;
                }

                form.append('entity_id', this.entityId);
                
                const { data: responseData, error: responseError } = await productservice.importItems(form);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if (status === 201){               
                    this.isImport = true
                    this.isProgressBar = false;
                    return responseData._rawValue.data.contador;     
                }

                if (status > 200){  
                    this.isProgressBar = false;
                }
            }
        },
        mounted(){                
        }
    }
</script>