import { createApp } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import router from "@/router/router";

library.add(fas);


createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
