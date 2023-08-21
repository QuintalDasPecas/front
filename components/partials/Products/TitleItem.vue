<template>   
    <Card>
        <template #title>
            Preencha o título do anúncio
        </template>
        <template #subtitle>
            Inclua somente o produto, marca, modelo e características principais. 
            Lembre-se de que, quando receber uma venda, você nao poerá editá-lo <span>como criar um bom título</span>
        </template>
        <template #content>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12" > 
                    <InputText autocomplete="off"  type="text" class="form-control" size="large" />
                </div>
            </div>
        </template>
        <template #footer>
            <div class="row g-2 box-button">
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end"></div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-grid gap-3 d-md-flex justify-content-end">
                    <Button label="Confirmar" size="large" class="float-end"/>
                </div>
            </div>
        </template>
    </Card>
</template>