import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import "@/libs/bootstrap";
import "@/libs/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
