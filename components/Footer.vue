<template>    
    <footer role="contentinfo" class="nav-footer footer-custom" >
        <div class="nav-footer-user-info nav-bounds">
            <div class="nav-footer-info-wrapper">
                <div class="nav-footer-primaryinfo">
                    <small class="nav-footer-copyright">
                        Copyright © 1999-2023 Quintal das peças LTDA.
                    </small>
                    <nav class="nav-footer-navigation">
                        <ul class="nav-footer-navigation__menu">                           
                            <li class="nav-footer-navigation__item">                               
                                <NuxtLink  to="/termandconditions" class="nav-footer-navigation__link">
                                    Termos e condições
                                </NuxtLink>
                            </li>
                            <li class="nav-footer-navigation__item">                               
                                <NuxtLink  to="/privacy" class="nav-footer-navigation__link">
                                    Como cuidamos da sua privacidade
                                </NuxtLink>
                            </li>                            
                            <li class="nav-footer-navigation__item">                              
                                <NuxtLink  to="/contact" class="nav-footer-navigation__link">
                                    Contato
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p class="nav-footer-secondaryinfo">
                    CNPJ n.º 99.999.999/0001-99 / Av. das Avenidas, nº 1.000,
                    Bairro, Cidade/UF - CEP 99999-999.
                </p>
            </div>
        </div>
        <a class="nav-footer-hp" >
            Quintal das peças
        </a>
    </footer>
</template>
