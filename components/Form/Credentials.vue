<template>
    <div class="home">
        <section data-testid="recommendations" class="recommendations" type="recommendations">
            <div class="container">
                <div v-if="!isForm" class="row g-8  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-col-center">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                        <NuxtLink @click="handleCreate(isForm)" class="btn btn-primary btn-lg btn-width-defult">
                            <i class=""></i> Cadastrar
                        </NuxtLink>
                    </div> 
                    <div class="col-lg-8 col-md-8 col-sm-8 col-8">
                        <DataTable  v-model:selection="selected"  paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" selectionMode="single" :metaKeySelection="false" dataKey="id" :value="resultCredentials" tableStyle="min-width: 50rem">
                            <Column sortable  field="id" header="ID"></Column>
                            <Column sortable  field="client_id" header="ID do Aplicativo"></Column>
                            <Column sortable  field="client_secret" header="Chave Secreta"></Column>
                            <Column sortable  field="seller_id" header="ID do Vendedor"></Column>
                            <Column :exportable="false" style="min-width:8rem">
                                <template #body="slotProps">
                                    <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="handleEdit(slotProps.data)" />
                                    <Button icon="pi pi-trash" outlined rounded severity="danger" @click="handleDialogDestroy(slotProps.data.id)" />
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
                <div v-if="isForm" class="row g-8  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-col-center">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-8">
                        <div class="row g-2 justify-content-center panel">
                            <form>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <Message v-if="message" severity="success">{{ message }}</Message>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="InputText Address" class="form-label label-lg">ID do Aplicativo</label>
                                    <InputText type="hidden" v-model="formData.id"></InputText>
                                    <InputText maxlength="50" v-model="formData.client_id"  autocomplete="off" size="large"  type="text" class="form-control" id="InputText Address" name="address" />
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="InputText Number" class="form-label label-lg">Chave Secreta</label>
                                    <InputText maxlength="50" v-model="formData.client_secret" autocomplete="off" size="large"  type="text" class="form-control" id="InputText Number" name="number" />
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <label for="InputText Number" class="form-label label-lg">ID do Vendedor</label>
                                    <InputText maxlength="15" v-model="formData.seller_id" autocomplete="off" size="large"  type="text" class="form-control" id="InputText Number" name="number" />
                                </div>                         
                                <div class="row g-2 justify-content-center ButtonBottom">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <NuxtLink @click="handleCreate(isForm)" class="btn btn-primary btn-lg btn-width-defult">
                                            <i class="pi pi-arrow-left"></i> Voltar
                                        </NuxtLink>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <NuxtLink @click="handleSubmit()" class="btn btn-primary btn-lg btn-width-defult">
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
    <Dialog v-if="selectedId" v-model:visible="deleteDialog" :style="{width: '450px'}" header="Confirmar" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>Tem certeza que deseja excluir o registro?</span>
        </div>
        <template #footer>
            <Button label="Não" icon="pi pi-times" text @click="deleteDialog = false"/>
            <Button label="Sim" icon="pi pi-check" text @click="handleDestroy(selectedId)" />
        </template>
    </Dialog>
</template>

<script>
    import MlbCredentials from '@/src/services/MlbCredentialsService';

    export default {
        data(){
            return {
                formData: {},
                resultCredentials: [],
                isForm: false,
                deleteDialog: false,
                selected: null,
                selectedId: null,
                message: ''
            }
        },
        methods: {
            async handleCredentials(){
                const credentials = new MlbCredentials();
                const formData = new FormData();
                formData.append('client_id', this.formData.client_id);
                formData.append('client_secret', this.formData.client_secret);
                formData.append('seller_id', this.formData.seller_id);
                formData.append('entity_id', localStorage.getItem('entityId'));
                
                const { data: responseData, error: responseError } = await credentials.store(formData);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if (status === 201){
                    this.message = 'Registro salvo com sucesso.';
                }
            },
            async handleGetCredentialsMlByEntityId(){
                const credentials = new MlbCredentials();
                const entityId = localStorage.getItem('entityId');

                const { data: responseData, error: responseError } = await credentials.getCredentialsMlByEntityId(entityId);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if (status === 200){
                    const result = responseData._rawValue.data;
                    this.resultCredentials = result;
                    console.log(responseData._rawValue.data)
                }
            },
            handleCreate(value){
                if (value) {
                    this.isForm = false;
                }

                if (!value) {
                    this.isForm = true;
                }
                this.handleGetCredentialsMlByEntityId();
            },
            handleDialogDestroy( id ){
                this.selectedId = id;
                this.deleteDialog = true;
            },
            async handleDestroy(){
                const credentials = new MlbCredentials();

                this.selectedId;

                const { data: responseData, error: responseError } = await credentials.destroy(this.selectedId);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                this.handleGetCredentialsMlByEntityId();
                this.deleteDialog = false;
            },
            handleEdit( values ){
                this.isForm = true;
                this.formData.id = values.id;
                this.formData.client_id = values.client_id;
                this.formData.client_secret = values.client_secret;
                this.formData.seller_id = values.seller_id;
                this.formData.entity_id = values.entity_id;
                this.message = '';
            },
            async handleSubmit(){
                if (this.formData.id){
                    //editar
                    console.log('editar')
                    this.handleUpdate();
                }
                
                if (!this.formData.id){                  
                    this.handleCredentials();
                }
            },
            async handleUpdate(){
                const credentials = new MlbCredentials();
                const formData = new FormData();
                formData.append('client_id', this.formData.client_id);
                formData.append('client_secret', this.formData.client_secret);
                formData.append('seller_id', this.formData.seller_id);
                formData.append('entity_id', localStorage.getItem('entityId'));
                
                const { data: responseData, error: responseError } = await credentials.update(this.formData.id, formData);
                let status = responseData.value ? responseData._rawValue.status : null;
                status = status ?? (responseError.value ? responseError.value.statusCode : null);

                if (status === 201){
                    this.message = 'Registro salvo com sucesso.';
                }
            }
        },
        mounted() {
            this.handleGetCredentialsMlByEntityId();
        }
    }
</script>