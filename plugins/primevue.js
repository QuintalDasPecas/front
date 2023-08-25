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
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import InputMask from 'primevue/inputmask';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab"; 
import Message from "primevue/message";
import Card from "primevue/card"; 
import ToggleButton from "primevue/togglebutton";
import Checkbox from "primevue/checkbox";
import ToastService from "primevue/toastservice";
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";
import Listbox from "primevue/listbox";
import RadioButton from "primevue/radiobutton";
import Tooltip from 'primevue/tooltip';

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
    nuxtApp.vueApp.component("FileUpload", FileUpload);
    nuxtApp.vueApp.component("Dropdown", Dropdown);
    nuxtApp.vueApp.component("InputMask", InputMask);
    nuxtApp.vueApp.component("Accordion", Accordion);
    nuxtApp.vueApp.component("AccordionTab", AccordionTab);
    nuxtApp.vueApp.component("Message", Message);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("ToggleButton",ToggleButton);
    nuxtApp.vueApp.component("Checkbox",Checkbox);
    nuxtApp.vueApp.component("ToastService",ToastService);
    nuxtApp.vueApp.component("ProgressBar",ProgressBar);
    nuxtApp.vueApp.component("Badge",Badge);  
    nuxtApp.vueApp.component("Listbox",Listbox); 
    nuxtApp.vueApp.component("RadioButton",RadioButton); 
    nuxtApp.vueApp.directive("Tooltip", Tooltip);
    nuxtApp.vueApp.component("Tooltip",Tooltip); 
    
    
    //other components that you need
});