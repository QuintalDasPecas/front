<template>
    <div v-if="!isForm" class="row g-4 justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-10">
            <form class="panel">                
                <div class="row">                   
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5"></div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5"></div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                        <NuxtLink @click="handleCreate(true)" class="btn btn-outline-primary btn-lg btn-width-defult">
                            Cadastrar
                        </NuxtLink>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <DataTable>
                            <Column sortable field="id" header="ID"></Column>
                            <Column sortable field="aaa" header="Plano" ></Column>
                            <Column sortable header="Ativo" ></Column>
                            <Column sortable field="bbb" header="Ações" ></Column>
                        </DataTable>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div v-if="isForm" class="row g-4 justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-8 col-8">
            <form class="panel">                
                <div class="row">
                        <h1>Nome</h1>
                    <h1>Descrição</h1>
                    <br>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <label class="form-label label-lg" > Forma de pagamento: </label>
                        <div>
                            <Dropdown v-model="FormOfPayment" :options="payment" optionLabel="name" placeholder="Selecionar"  />
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <label class="form-label label-lg" > Condiçao de pagamento:</label>
                        <div>
                            <Dropdown v-model="PaymentTerms" :options="terms" optionLabel="name" placeholder="Selecionar"  />
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <label class="form-label label-lg" > Quantidade de parcelas: </label>
                        <div>
                            <Dropdown v-model="NumberOfInstallments" :options="installments" optionLabel="name" placeholder="Selecionar"  />
                        </div>
                    </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                        <NuxtLink @click="handleCreate(false)" class="btn btn-outline-primary btn-lg btn-width-defult">
                            Voltar
                        </NuxtLink>
                    </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8"></div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                        <NuxtLink class="btn btn-primary btn-lg btn-width-defult">
                            Confirmar
                        </NuxtLink>
                    </div>
                </div>               
            </form>                
        </div>
    </div>
</template>

<script>
    import Subscribe from '@/src/services/SubscribeService'
    import FormPay from '@/src/services/FormOfPaymentService'
    import PayTerm from '@/src/services/PaymentTermService'
    import SubPlan from '@/src/services/SubscriptionPlanService'


export default {
    data() {
        return {
            FormOfPayment: null,
            payment: [
                { name: 'Boleto', code: 'A1' },
                { name: 'Cartão', code: 'A2' },
                { name: 'PIX', code: 'A3' },
            ],
            PaymentTerms: null,
            terms: [
                { name: 'A Vista', code: 'B1' },
                { name: 'Parcelado', code: 'B2' },
            ],
            NumberOfInstallments: null,
            installments: [
                { name: '3', code: 'C1' },
                { name: '6', code: 'C2' },
                { name: '12', code: 'C3' },
            ],
            isForm: false,
        };
    },
    methods:{
        async handleCreate(isForm){
            this.isForm = isForm;
        },
        async handleSubscribe(){
            const subscribe = new Subscribe();
            const form = new FormData();
            form.append();
            
            const { data: responseData, error: responseError } = await subscribe.store();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
            this.formData = responseData._rawValue.data[0];
        },
        async handleFormPay(){
            const formPay = new FormPay();
            
            const { data: responseData, error: responseError } = await formPay.store();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
            this.formData = responseData._rawValue.data[0];
        },
        async handlePayTerm(){
            const payTerm = new PayTerm();
            
            const { data: responseData, error: responseError } = await payTerm.store();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
            this.formData = responseData._rawValue.data[0];
        },
        async handleSubPlan(){
            const subPlan = new SubPlan();
            
            const { data: responseData, error: responseError } = await subPlan.store();
            let status = responseData.value ? responseData._rawValue.status : null;
            status = status ?? (responseError.value ? responseError.value.statusCode : null);
            this.formData = responseData._rawValue.data[0];
        },
    }
};
</script>
