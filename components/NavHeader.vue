<template>
    <Toolbar :pt="cssToolBar">
        <template #start>
            <span>
                <NuxtLink to="/">
                    <img v-if="formData.file_path"  width="70" height="70" :src="formData.file_path" >
                </NuxtLink> 
            </span>
        </template>
        <template #center>
            <span class="p-input-icon-right">
                <i class="pi pi-search" />
                <InputText  placeholder="Buscar produtos, marcas e muito mais" @keyup.enter="handleSearchItemsByTerm()" v-model="searchItem" :name="'searchItem'" class="p-inputtext-search"/>           
            </span>
        </template>
        <template #end>
            <span class="p-input-icon-left" v-if="!logged">
                <NuxtLink to="/login" class="p-component link-entre">Entre</NuxtLink>
            </span>
            <span class="p-input-icon-left"  v-if="logged">
                <Menubar :model="items" :style="colorMenu" />
            </span>
        </template>
    </Toolbar>
</template>
<script>
    import Logout from "@/src/services/LogoutService";
    import Logo from '@/src/services/EntityFileService';
    import configColor from '@/src/services/ConfigColorService';
export default {
    data(){
        return {
            cssToolBar: {},
            colorMenu: '',
            color : '',
            users: '',
            logged: '',
            items: [],
            menu: [
                {
                    label: 'Usuário',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Meu perfil',
                            command : () => { this.toProfile() }
                        },           
                        {
                            label: 'Anúncios',
                            command : () => { this.toAdverts() }
                        },
                        {
                            label: 'Credenciais',
                            command : () => { this.toCredential() }
                        },
                        {
                            label: 'Banners',
                            command : () => { this.toBanner() }
                        },
                        {
                            label: 'Configurações',
                            command : () => { this.toConfig() }
                        },
                        {
                            label: 'Usuários',
                            command : () => { this.toUsers() }
                        },
                        {
                            label: 'Sair',
                            command : () => { this.toLogout() }
                        }
                    ]
                }   
            ],
            searchItem: '',
            formData: []
        }
    },
    methods: {
        async toProfile(){
            navigateTo('/profile');
        },
        toInit(){
            this.users = localStorage.getItem('users') ?? '';
            this.menu[0].label = this.users;    
            this.logged = localStorage.getItem('logged') ? true : false;
            this.items = this.menu;
        },
        async toAdverts(){
            navigateTo('/adverts');
        },
        async toLogout(){
            localStorage.removeItem('logged');
            localStorage.removeItem('users');
            localStorage.removeItem('userId');
            localStorage.removeItem('entityId');

            this.users = '';
            this.logged = false;

            const logout = new Logout();
            logout.logout();
            navigateTo('/');
        },
        async toCredential(){
            navigateTo('/credentials');
        },
        async toBanner(){
            navigateTo('/banners')
        },
        async toConfig(){
            navigateTo('/config')
        },
        async handleSearchItemsByTerm(){

            let term = this.searchItem; 
            if( term ){
                term = term.toLowerCase()
                    .replace(/[^a-zA-Z0-9 -]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
            }
            navigateTo('/search/' + term);
            
        },
        async toUsers(){
            navigateTo('/users');
        },
        async handleGetLogo(){
            const logo = new Logo();
            const responseData = await logo.findByIdAndTypeFileAndApproved(0, 'quintalLogo');
            const status = responseData.data._rawValue ? responseData.data._rawValue.status : [];
            if (status === 200) {
                const logoData = responseData.data._rawValue ? responseData.data._rawValue.data : [];
                this.formData.file_path = logoData[0].file ?? '';
            }
        },
        async getHandleColor(){
            const Color = new configColor();
            const { data: responseData, error: responseError } = await Color.all(); 
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);

            if(status === 200) {              
                this.color = responseData._rawValue.data[0].color;
                localStorage.setItem('color', this.color);                
            }
        },
        async setColorNavBar(){
            const c = await this.getHandleColor();
            this.cssToolBar = {
                root: { 
                    style: { 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly!important',
                        flexWrap: 'wrap',
                        backgroundColor: this.color,
                        borderRadius: '0px',
                        borderColor: this.color
                    } 
                }
            };
            this.colorMenu ={
                padding: '0.5rem 1rem',
                color: this.color ?? '#000',
                border: '0 none',
                borderRadius: '4px'
            };
        }
    },
    mounted(){
        this.toInit();
        this.setColorNavBar();          
        this.handleGetLogo();
    }
}   
</script>