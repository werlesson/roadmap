import GlobalVariables from "./globalVariables";

import "@/assets/scss/style.scss";

export default {
  install(Vue) {
    Vue.use(GlobalVariables);
  },
};
