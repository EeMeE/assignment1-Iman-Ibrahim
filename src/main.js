import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

// Services
Vue.use(Element, {
  locale
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
