import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/stylesheets/animate.css";
import "./assets/stylesheets/style.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
