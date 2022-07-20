import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "@/store";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@/assets/scss/style.scss";

const app = createApp(App);

app.use(router);
app.use(store, key);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.mount("#app");
