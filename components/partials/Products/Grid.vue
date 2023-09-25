<template>
    <div class="card">
        <DataTable :value="items" stripedRows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"  tableStyle="min-width: 50rem">
            <Column sortable field="id" header="ID"></Column>           
            <Column sortable header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.thumbnail" :alt="slotProps.data.thumbnail" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column sortable field="title" header="Nome"></Column>
            <Column sortable field="price" header="Preço">
                <template #body="slotProps">
                    {{ (slotProps.data.price) }}
                </template>
            </Column>
            <Column sortable field="ml_product_id" header="MLID"></Column>
            <Column sortable field="condition" header="Condição"></Column>
            <Column sortable field="token" header="Token"></Column>
            <Column sortable header="Ativo">
                <template #body="slotProps">
                    <Tag class="adverts" :value="slotProps.data.actived" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>
<script>
    export default {
        props:{
            items:{
                type: String,
                default: '',
                required: true
            }
        },
        methods:{
            getSeverity(product) {
                switch (product.actived) {
                    case 'Sim':
                        return 'success';
                    case 'Não':
                        return 'danger';

                    default:
                        return null;
                }
            }
        }
    };
</script>