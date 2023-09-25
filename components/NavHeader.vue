<template>
    <Toolbar>
        <template #start>
        </template>
        <template #center>
            <span class="p-input-icon-right">
                <i class="pi pi-search" />
                <InputText  placeholder="Buscar produtos, marcas e muito mais" :name="'searchItem'" class="p-inputtext-search"/>           
            </span>
        </template>
        <template #end>
            <span class="p-input-icon-left" v-if="!logged">
                <NuxtLink to="/login" class="p-component link-entre">Entre</NuxtLink>
            </span>
            <span class="p-input-icon-left"  v-if="logged">
                <Menubar :model="items" />
            </span>
        </template>
    </Toolbar>
</template>
<script>
import Logout from "@/src/services/LogoutService";

export default {
    data(){
        return {
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
                            label: 'Sair',
                            command : () => { this.toLogout() }
                        }
                    ]
                }   
            ]
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
        }

    },
    mounted(){
        this.toInit();
    }
}   
</script>