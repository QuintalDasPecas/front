<template> 
    <div class="container">
        <div class="row">
            <form class="row justify-content-lg-center g-4">
                <div class="row g-2 justify-content-lg-center">
                    <label for="basic-url" class="form-label">
                        <h4>
                        Indique o produto , marca, modelo e pricipais características                           
                        </h4>
                        Você também pode inserir o códico universal que o identifica. <span>Como posso encontrá-lo?</span>
                    </label>              
                    <div class="col-lg-10 col-md-10 col-sm-10 col-6">
                        <div class="input-group mb-6">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-search"></i>
                            </span>
                            <input type="text" class="form-control " placeholder="Ex.: Lanterna traseira" aria-label="" aria-describedby="basic-addon1">                             
                        </div>                       
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-6 d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-primary">Começar</button>
                    </div>
                </div>             
                <div class="row g-2">
                    <label for="basic-url" class="form-label">
                        <h4>Qual é a condição do seu produto?</h4>
                        <p>
                            Se foi usado de alguma forma, selecione usado. <span>Ver política</span> 
                        </p>
                    </label>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">                    
                        <select class="form-select">
                            <option>Selecione uma opção</option>
                            <option>Novo</option>
                            <option>Usado</option>
                            <option>Recondicionado</option>
                        </select>
                    </div>                    
                </div>
                <div class="row g-2">
                    <label for="basic-url" class="form-label">
                        <h3>Preencha o título do anúncio</h3>
                        <p>
                            Inclua somente o produto, marca, modelo e características principais. 
                            Lembre-se de que, quando receber uma venda, você nao poerá editá-lo <span>como criar um bom título</span>
                        </p>
                    </label>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12"> 
                        <input autocomplete="off"  type="text" class="form-control" id="input" name="preencher">
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" class="btn btn-light">Cancelar</button>
                        <button type="button" class="btn btn-primary">Confirmar</button>
                    </div>
                </div>
                <div class="row g-2">
                    <label for="basic-url" class="form-label">
                        <h3>Você oeferece garantia</h3>
                    </label>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12"> 
                        <input autocomplete="off"  type="text" class="form-control" id="input" name="preencher">
                    </div>
                </div>
                    <div class="row g-2">
                        <label for="basic-url" class="form-label">
                            <h2> Preencha as informações do seu produto</h2>                       
                            <h4>Preencha as informações regulatórias</h4>
                            <p>Conforme a legislação vigete do Brasil, estes dados são necessários para que você possa vender seu produto</p>
                        </label>
                        <div class="bd-callout bd-callout-info">
                            <i class="bi bi-exclamation-circle-fill" style="color:#0d6efd;"></i> 
                            Recomendamos que você preencha as informações regulatórias para cumprir com as normas e evitar sanções.
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <label for="inputQuantidade" class="form-label">Número de registro/certificação INMETRO</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputQuantidade" name="Quantidade">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <label for="inputOEM" class="form-label">OEM (opcional)</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputOEM" name="OEM">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <label for="inputMPN" class="form-label">MPN (opcional)</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputMPN" name="MPN">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <label for="inputSKU" class="form-label">SKU (opcional)</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputSKU" name="SKU">
                        </div>                                       
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-light">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                    <!-- <div class="row g-2">
                      
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <label for="inputINMETRO" class="form-label">Número de registro/certificação  INMETRO</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputINMETRO" name="INMETRO">
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-light">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar</button>
                        </div>
                    </div> -->
                    <div class="row g-2">
                        <label for="basic-url" class="form-label">
                            <h2>Preencha a ficha técnica do seu produto</h2>
                            <p>Você terá um posicionamento melhor nos resultados de busca, e seus compradores terão toda a informações necessárias para comprarem de você</p>
                        </label>
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                            <label for="inputMarca" class="form-label">Marca</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputMarca" name="Marca">
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                            <label for="inputNumeroPeca" class="form-label">Número de peça</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputNumeroPeca" name="NumeroPeca">
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                            <label for="inputTipoVeiculo" class="form-label">Tipo de veículo</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputTipoVeiculo" name="TipoVeiculo">
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                            <label for="inputTipoLampada" class="form-label">Tipo de Lâmpada</label>
                            <input autocomplete="off"  type="text" class="form-control" id="inputTipoLampada" name="TipoLampada">
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-light">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
    <br>
</template>
<style>
.bd-callout-info {
    --bd-callout-color: var(--bs-info-text-emphasis);
    --bd-callout-bg: var(--bs-info-bg-subtle);
    --bd-callout-border: var(--bs-info-border-subtle);
}
.bd-callout {
    --bs-link-color-rgb: var(--bd-callout-link);
    --bs-code-color: var(--bd-callout-code-color);
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    color: var(--bd-callout-color, inherit);
    background-color: #f8f9fa;
    border-left: 0.25rem solid #0d6efd;
}
</style>