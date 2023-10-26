
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Antd, { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import './global.less'

const app = createApp(App);

app.use(createPinia())
    .use(router)
    .use(Antd)
    .mount("#app");
