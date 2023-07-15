<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/src/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const metaKey = ref(true);

const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

</script>
<template>   
    <div class="container">
        <div class="row">
            <form class="row justify-content-lg-center g-4">
                <div class="row g-2 justify-content-lg-center">
                    <div class="card">
                        <DataTable  v-model:selection="selectedProduct"  :value="products" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"  dataKey="id" sortMode="multiple" tableStyle="min-width: 50rem">
                            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
                            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" sortable ></Column>
                        </DataTable>
                    </div>
                </div>
            </form>
        </div>       
    </div>
    <br>
</template>
