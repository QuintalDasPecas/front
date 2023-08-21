<template>  
    <Card>
        <template #title>Preencha as informações regulatórias</template>
        <template #subtitle>Conforme a legislação vigete do Brasil, estes dados são necessários para que você possa vender seu produto</template>
        <template #content>
            <div class="row g-2">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <label for="inputQuantidade" class="form-label label-lg">Número de registro/certificação INMETRO</label>
                    <InputText size="large" autocomplete="off"  type="text" class="form-control" id="inputQuantidade" name="Quantidade" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <label for="inputOEM" class="form-label label-lg">OEM (opcional)</label>
                    <InputText size="large" autocomplete="off"  type="text" class="form-control" id="inputOEM" name="OEM" />
                </div>
            </div>
            <div class="row g-2">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <label for="inputMPN" class="form-label label-lg">MPN (opcional)</label>
                    <InputText size="large" autocomplete="off"  type="text" class="form-control" id="inputMPN" name="MPN" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <label for="inputSKU" class="form-label label-lg">SKU (opcional)</label>
                    <InputText size="large" autocomplete="off"  type="text" class="form-control" id="inputSKU" name="SKU" />
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