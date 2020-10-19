import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 註冊全域組件
import registryCustomMessage from "@C/CustomMessage";
Vue.use(registryCustomMessage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
