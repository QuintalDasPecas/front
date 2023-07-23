import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import Password from 'primevue/password';
import Panel from 'primevue/panel';
import Fieldset from 'primevue/fieldset';
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import SplitButton from 'primevue/splitbutton';
import Toast from 'primevue/toast';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("DataTable", DataTable);
    nuxtApp.vueApp.component("Column", Column);
    nuxtApp.vueApp.component("Password", Password);
    nuxtApp.vueApp.component("Panel", Panel); 
    nuxtApp.vueApp.component("Fieldset", Fieldset);
    nuxtApp.vueApp.component("Toolbar", Toolbar);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Menubar", Menubar);
    nuxtApp.vueApp.component("SplitButton", SplitButton);
    nuxtApp.vueApp.component("Toast", Toast);
    
    //other components that you need
});