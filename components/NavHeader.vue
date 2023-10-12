<template>
    <Toolbar  :pt="cssToolBar">
        <template #start>
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

export default {
    data(){
        return {
            cssToolBar: '',
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
                            label: 'Configurações',
                            command : () => { this.toConfig() }
                        },
                        {
                            label: 'Sair',
                            command : () => { this.toLogout() }
                        }
                    ]
                }   
            ],
            searchItem: ''
        }
    },
    methods: {
        toProfile(){
            navigateTo('/profile');
        },
        toInit(){
            this.users = localStorage.getItem('users') ?? '';
            this.menu[0].label = this.users;    
            this.logged = localStorage.getItem('logged') ? true : false;
            this.items = this.menu;
        },
        toAdverts(){
            navigateTo('/adverts');
        },
        toLogout(){
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
        toCredential(){
            navigateTo('/credentials');
        },
        toConfig(){
            navigateTo('/config')
        },
        handleSearchItemsByTerm(){

            let term = this.searchItem; 
            if( term ){
                term = term.toLowerCase()
                    .replace(/[^a-zA-Z0-9 -]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
            }
            navigateTo('/search/' + term);
            
        }
    },
    mounted(){
        this.toInit();
        this.color = localStorage.getItem('color');
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
            color: '#000',
            border: '0 none',
            borderRadius: '4px'
        }
    }
}   
</script>