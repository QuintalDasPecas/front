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
        <span class="p-input-icon-left">
            <NuxtLink to="/login" class="p-component link-entre">Entre</NuxtLink>
        </span>
        <span class="p-input-icon-left" v-show="loged">
            <Menubar :model="items" />
        </span>
    </template>
</Toolbar>
</template>

<script setup>
import { ref } from "vue";

const loged = false;

const items = ref([
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    }   
]);
</script>