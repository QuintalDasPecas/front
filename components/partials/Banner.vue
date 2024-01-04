<template>
    <Message severity="success" v-if="successMessage">{{ successMessage }}</Message>
    <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
    <div class="row-g4  col-lg-2 col-md-2 col-sm-2 col-2">
        <NuxtLink to="/" class="btn btn-outline-primary btn-lg btn-width-defult">
            Página Principal
        </NuxtLink>
    </div>
    <div class="col-lg-10 col-md-10 col-sm-10 col-10"></div>
    <div class="row g-4 bannerTop">
        <DataTable 
            v-model:selection="selected" 
            :value="bannerServiceData" 
            dataKey="id" 
            tableStyle="min-width: 50rem" 
            paginator 
            :rows="5" 
            :rowsPerPageOptions="[5, 10, 20, 50]"
        >
            <Column field="id" header="ID"></Column>
            <Column field="file_path" header="Banner">
                <template #body="slotProps">
                    <img :src="slotProps.data.file_path" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column field="format" header="Formato"></Column>
            <Column field="size" header="Tamanho"></Column>
            <Column sortable header="Ativo">
                <template #body="slotProps">
                    <Tag class="adverts" :value="slotProps.data.status" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <Column field="name" header="Ação">
                <template #body="slotProps">
                    <Button v-if="slotProps.data.status==='Não'" class="rounded" icon="pi pi-check" outlined rounded severity="success" @click="handleEnable(slotProps.data.id)" />
                    <Button v-if="slotProps.data.status==='Sim'" class="rounded" icon="pi pi-times" outlined rounded severity="danger" @click="handleDisable(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>       
    </div>
    <div class="col-lg-10 col-md-10 col-sm-10 col-10">
        <PartialsUploads 
            url="https://quintaldaspecas.com.br/backend/public/api/upload"
            uploadType='banners'
        />
    </div>
    <Toast />
</template>
<script>
import BannerService from '@/src/services/BannerService';
export default {    
    props: {
        url:{
            type: String,
            default: 'upload'
        }
    },
    data() {
        return {
            files: [],
            totalSize: 0,
            totalSizePercent: 0,
            errorMessage: '',
            successMessage: '',
            products: null,
            columns: null,
            selected: null,
            metaKey: true,
            bannerServiceData: []
        };
    },
    methods: {           
        async getBanner(){           
           
            const bannerService = new BannerService();
            const responseData = await bannerService.getBanner();
            const status = responseData.data._rawValue ? responseData.data._rawValue.status : [];

            if (status === 200) {
                this.bannerServiceData = responseData.data._rawValue.data; 
            }            
        },
        async handleOnDelete(){
            this.successMessage = '';
            
            if( !this.selected ){
                this.errorMessage = 'Selecione um documento para ser excluído.';
                return false;
            }

            const deletePromises = [];
            this.bannerService = null; 
            const bannerService = new BannerService();

            this.selected.forEach((register)=>{                            
                deletePromises.push(bannerService.destroy(register.id));                          
            });          

            await Promise.all(deletePromises);  
            this.getBanner();                
        },
        async handleEnable(id){           
            const bannerService = new BannerService();
            const form = new FormData();
            form.append('deleted_at', null)
           const banner = await bannerService.enable(id, form)
            this.getBanner();  
        },
        async handleDisable(id){ 
            const bannerService = new BannerService();                                 
            const banner = await bannerService.destroy(id); 
            this.getBanner();   
        },
        getSeverity(banner) {
                switch (banner.status) {
                    case 'Sim':
                        return 'success';
                    case 'Não':
                        return 'danger';

                    default:
                        return null;
                }
        },
        async showToast(severity, summary, detail) {
            this.$toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
        }, 
    },
    created() {
        this.columns = [
            { field: 'file_name', header: 'Name' },
            { field: 'format', header: 'Tipo' },
            { field: 'size', header: 'Tamanho' },
            { field: 'name', header: 'Entidade' }
        ];
    },   
    mounted() {
        this.getBanner();
    }
};
</script>
