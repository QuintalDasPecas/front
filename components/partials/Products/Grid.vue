<template>
    <div class="card">
        <DataTable :value="items" stripedRows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column sortable field="id" header="ID"></Column>
            <Column sortable field="title" header="Nome"></Column>
            <Column sortable field="price" header="Preço"></Column>
            <Column sortable field="ml_product_id" header="MLID"></Column>
            <Column sortable field="condition" header="Condição"></Column>
            <Column sortable field="token" header="Token"></Column>
            <Column sortable field="actived" header="Ativo"></Column>
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
    };
</script>