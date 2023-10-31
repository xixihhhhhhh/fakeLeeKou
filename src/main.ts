
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Antd, { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import './global.less'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate))
    .use(router)
    .use(Antd)
    .mount("#app");
