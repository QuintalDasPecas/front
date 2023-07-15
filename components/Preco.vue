<template>
    <div class="ui-search-filter-dl shops__filter-items">
                <div role="heading" aria-level="3" class="ui-search-filter-dt-title shops-custom-primary-font">Preço</div>
                <ul>
                  <li class="ui-search-filter-container shops__container-lists"><a
                      href="/lantern_PriceRange_0-45_NoIndex_True#applied_filter_id%3Dprice%26applied_filter_name%3DPre%C3%A7o%26applied_filter_order%3D11%26applied_value_id%3D*-45.0%26applied_value_name%3DAt%C3%A9+R%24+45%26applied_value_order%3D1%26applied_value_results%3D590005%26is_custom%3Dfalse"
                      class="ui-search-link" rel="nofollow" aria-label="Até R$ 45"><span
                        class="ui-search-filter-name shops-custom-secondary-font">Até R$ 45</span><span
                        class="ui-search-filter-results-qty shops__filter-results-qty">(590.005)</span></a></li>
                  <li class="ui-search-filter-container shops__container-lists"><a
                      href="/lantern_PriceRange_45-100_NoIndex_True#applied_filter_id%3Dprice%26applied_filter_name%3DPre%C3%A7o%26applied_filter_order%3D11%26applied_value_id%3D45.0-100.0%26applied_value_name%3DR%2445+a+R%24100%26applied_value_order%3D2%26applied_value_results%3D469240%26is_custom%3Dfalse"
                      class="ui-search-link" rel="nofollow" aria-label="R$45 a R$100"><span
                        class="ui-search-filter-name shops-custom-secondary-font">R$45 a R$100</span><span
                        class="ui-search-filter-results-qty shops__filter-results-qty">(469.240)</span></a></li>
                  <li class="ui-search-filter-container shops__container-lists"><a
                      href="/lantern_PriceRange_100-0_NoIndex_True#applied_filter_id%3Dprice%26applied_filter_name%3DPre%C3%A7o%26applied_filter_order%3D11%26applied_value_id%3D100.0-*%26applied_value_name%3DMais+de+R%24100%26applied_value_order%3D3%26applied_value_results%3D743007%26is_custom%3Dfalse"
                      class="ui-search-link" rel="nofollow" aria-label="Mais de R$100"><span
                        class="ui-search-filter-name shops-custom-secondary-font">Mais de R$100</span><span
                        class="ui-search-filter-results-qty shops__filter-results-qty">(743.007)</span></a></li>
                  <li>
                    <form class="ui-search-price-filter ui-search-filter-range--price shops__price-filter" method="post">
                      <div class="ui-search-price-filter-container shops__price-filter-container">
                        <div class="andes-form-control andes-form-control--textfield andes-form-control--default"><label>
                            <div class="andes-form-control__control"><input data-testid="Minimum-price" name="Minimum"
                                pattern="^[0-9]+([,.][0-9]+)?$" enterkeyhint="go" rows="1"
                                class="andes-form-control__field" maxlength="120" placeholder="Mínimo" value=""></div>
                          </label>
                          <div class="andes-form-control__bottom"><span class="andes-form-control__message"></span></div>
                        </div>
                      </div>
                      <div class="ui-search-price-filter-container shops__price-filter-container">
                        <div class="andes-form-control andes-form-control--textfield andes-form-control--default"><label>
                            <div class="andes-form-control__control"><input data-testid="Maximum-price" name="Maximum"
                                pattern="^[0-9]+([,.][0-9]+)?$" enterkeyhint="go" rows="1"
                                class="andes-form-control__field" maxlength="120" placeholder="Máximo" value=""></div>
                          </label>
                          <div class="andes-form-control__bottom"><span class="andes-form-control__message"></span></div>
                        </div>
                      </div>
                      <div class="ui-search-price-filter-container"><button data-testid="submit-price" type="submit"
                          class="ui-search-price-filter-action-btn" disabled="" aria-label="Aplicar"><svg width="20"
                            height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.9)">
                            <path
                              d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                              fill="rgba(0, 0, 0, 0.9)"></path>
                          </svg></button></div>
                    </form>
                  </li>
                </ul>
              </div>
</template>