import  {RouterName}  from "@/enum/router-name";
import {useStore} from "vuex";
import { computed, getCurrentInstance } from "vue";
import { LocationQueryRaw } from "vue-router";

interface routerOptions {
    path?: string;
    query?: LocationQueryRaw;
}

export default function () {
    const { proxy } = getCurrentInstance();
  
    const store = useStore();
    const token = computed(() => store.getters.token);
    
    // 导航索引
    /* function changeIndex(value) {
        proxy.$store.commit("setActiveNavName", value);
    } */

    // 路由管理
    function routerManager(routerName: string | number, options: routerOptions) {
        switch (routerName) {
        case RouterName.SignUp:
        case RouterName.Error:
        default:
            proxy.$router.push({ path: options.path });
            break;
        }
  }
  return{
    routerManager,
  }
}    
