<template>
    <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
    <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
    <div class="card">
        <DataTable 
            :value="entityFilesData" 
            dataKey="id" 
            tableStyle="min-width: 50rem"
            paginator 
            :rows="5" 
            :rowsPerPageOptions="[5, 10, 20, 50]"
            stripedRows 
        >            
            <Column field="id" header="ID" sortable >
                <template #body="slotProps">                 
                    #{{slotProps.data.id}}
                </template>
            </Column>
            <Column header="Nome" sortable>
                <template #body="slotProps">                   
                    <NuxtLink :to="slotProps.data.file" target="_blank">
                        {{slotProps.data.file_name}}
                    </NuxtLink> 
                </template>
            </Column>
            <Column field="format" header="Formato" sortable></Column>
            <Column field="size" header="Tamanho" sortable></Column>
            <Column field="name" header="Entidade" sortable></Column>
            <Column field="status" header="Status" sortable></Column>
            <Column header="Ação">
                <template #body="slotProps">                 
                    <Button
                        v-if="!slotProps.data.rejected"
                        icon="pi pi-times" 
                        v-tooltip.top="'Reprovar'" 
                        outlined rounded severity="danger" 
                        @click="handleConfirmDialog(2,slotProps.data.id)"
                        size="large"
                        class="rounded"
                    />
                    {{ !slotProps.data.status ? "&nbsp;" : "" }}
                    <Button
                        v-if="!slotProps.data.approved"
                        icon="pi pi-check" 
                        v-tooltip.top="'Aprovar'" 
                        outlined rounded severity="success" 
                        @click="handleConfirmDialog(1,slotProps.data.id)"
                        size="large"
                         class="rounded"
                    />
                </template>
            </Column>
        </DataTable>       
    </div>  
    </template>
    <script>
        import entityFileService from '@/src/services/EntityFileService';
        export default {    
            props: {
                typeFile: {
                    type: String,
                    default: ''
                },
            },
            data() {
                return {
                    entityFilesData: ''
                }
            },
            methods: {
                async showToast(severity, summary, detail) {
                    this.$toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
                },     
                async getEntityFileByEntityId(){           
                
                    const entityId = localStorage.getItem('entityId');
                    
                    if( !entityId ){
                        return false;
                    }
                    
                    const entity = new entityFileService();
                    const responseData = await entity.findByIdAndTypeFile(entityId, this.typeFile);
                    const status = responseData.data._rawValue ? responseData.data._rawValue.status : [];
    
                    if (status === 200) {
                        this.entityFilesData = responseData.data._rawValue.data;
                    }            
                },
                async handleOnDelete(){
                    this.successMessage = '';
                    
                    if( !this.selected ){
                        this.errorMessage = 'Selecione um documento para ser excluído.';
                        return false;
                    }
    
                    const deletePromises = [];
                    this.entityFilesData = null; 
                    const entity = new entityFileService();
    
                    this.selected.forEach((register)=>{                            
                        deletePromises.push(entity.destroy(register.id));                          
                    });          
    
                    await Promise.all(deletePromises);  
                    this.getEntityFileByEntityId();                
                },   
                async handleConfirmDialog( action, data ){           
                    this.confirmDiaog = true;
                    this.formData = data;
                    this.action = action;
                    switch(action){                
                        case 1:
                            this.msgDialogConfirm = 'Tem certeza que deseja aprovar o documento?';
                        break;
                        case 2:
                            this.msgDialogConfirm = 'Tem certeza que deseja reprovar o documento?';
                        break;
                    }
    
                    this.$confirm.require({
                        message: this.msgDialogConfirm,
                        header: 'Atenção!',
                        icon: 'pi pi-exclamation-triangle',
                        acceptLabel: 'Sim',
                        rejectLabel: 'Não',
                        accept: () => {
                            this.handleYesDialog(action, data);
                        },
                        reject: () => {
                            this.handleNoDialog();
                        }
                    });         
                },
                async handleYesDialog(action, id){
                    switch(action){                
                        case 1:
                            this.handleApproveDoc(id);
                        break;
                        case 2:
                            this.handleRejectDoc(id);
                        break;
                    }
                },
                async handleNoDialog(){
                    console.log('no')
                },
                async handleApproveDoc(id){
                    const entity = new entityFileService();
                    const responseData = await entity.approve(id);
                    const status = responseData.data._rawValue ? responseData.data._rawValue.status : [];
    
                    if (status === 201) {
                        this.getEntityFileByEntityId();
                    }
                },
                async handleRejectDoc(id){
                    const entity = new entityFileService();
                    const responseData = await entity.reject(id);
                    const status = responseData.data._rawValue ? responseData.data._rawValue.status : [];
    
                    if (status === 201) {
                        this.getEntityFileByEntityId();
                    }
                }         
           }, mounted() {
                this.entityFilesData = '';
                this.getEntityFileByEntityId();
            }
        }
    </script>   