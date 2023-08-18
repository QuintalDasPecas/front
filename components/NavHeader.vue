<template>
    <Toolbar>
        <template #start>
        </template>
        <template #center>
            <span class="p-input-icon-right">
                <i class="pi pi-search" />
                <InputText  placeholder="Search" class="p-inputtext-search"/>           
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
<script setup>
import Logout from "@/src/services/LogoutService";

const users = ref('');
const logged = ref(false);
const items = ref([]);
const logout = new Logout();

const menu = [
    {
        label: 'Usuário',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Meu perfil',
                command : () => { toProfile() }
            },           
            {
                label: 'Anúncios'
            },
            {
                label: 'Sair',
                command : () => { toLogout() }
            }
        ]
    }   
]

const toProfile = () => {
    if( !logged.value ){
        return false;
    }
    navigateTo('/profile');
}

const toLogout = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('users');
    localStorage.removeItem('userId');
    localStorage.removeItem('entityId');

    users.value = '';
    logged.value = false;
    logout.logout();
    navigateTo('/');
}

const init = () => {
    users.value = localStorage.getItem('users') ?? '';
    menu[0].label = users.value;    
    logged.value = localStorage.getItem('logged') ? true : false;
    items.value = menu;
}

init();

</script>