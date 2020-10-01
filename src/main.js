import Vue from "vue";
import App from "./App.vue";



import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret , faPlay, faBackward, faForward, faPause} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret, faPlay,faBackward, faForward, faPause)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");