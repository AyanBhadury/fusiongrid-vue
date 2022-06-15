import { createApp } from 'vue'
import App from './App.vue'

import FusionGrid from "fusiongrid";
import "fusiongrid/dist/fusiongrid.css";
import VueFusiongrid from "vue-fusiongrid";


const myApp = createApp(App);
myApp.use(VueFusiongrid, FusionGrid);
myApp.mount('#app')

