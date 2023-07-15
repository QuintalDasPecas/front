<template>
    <header role="banner" data-siteid="MLB" class="nav-header nav-header-plus ui-navigation-v2">
        <div class="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
            <div class="nav-header-plus-logo nav-area nav-top-area nav-left-area">
            </div>
            <div class="nav-area nav-top-area nav-center-area">
                <form class="nav-search" action="/search" method="GET" role="search" style="display: inherit;">
                    <label class="nav-header-visually-hidden" for="nav-search-input">
                        Digite o que você quer encontrar
                    </label>
                        <input type="text" class="nav-search-input" id="cb1-edit"
                        aria-label="Digite o que você quer encontrar" name="as_word"
                        placeholder="Buscar produtos, marcas e muito mais…" maxlength="120" autofocus=""
                        autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" value=""
                        aria-activedescendant="" aria-controls="cb1-list" aria-autocomplete="list" aria-expanded="false"
                        role="combobox">
                        <button type="submit" class="nav-search-btn">
                            <div role="img" aria-label="Buscar" class="nav-icon-search">                            
                            </div>
                        </button>
                    <div class="sb-suggestions" id="sb-suggestions-1" aria-hidden="true"
                        style="display: none; top: 40px; width: 580px; position: absolute;">
                        <ul class="sb-suggestions__list" role="listbox" id="cb1-list">                            
                        </ul>
                        <div class="sb-suggestions__wrapper--additional">
                            <ul class="sb-suggestions__list--additional"></ul>
                        </div>
                    </div>
                </form>
            </div>
            <div class="nav-area nav-top-area nav-right-area">
                <nav id="nav-header-menu">                  
                   <NuxtLink href="/login">
                        <span style="font-size: 1.0rem;">Entre</span>
                   </NuxtLink>                
                </nav>  
            </div>            
        </div>
    </header>
</template>