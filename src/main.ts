import { createApp } from 'vue'
import App from './App.vue'
/* import './registerServiceWorker' */
import router from './router'
import ElementPlue from 'element-plus'
import 'element-plus/dist/index.css'
import {store} from './store/index'
import { HttpManager } from './API'

const saveToken = localStorage.getItem('token')
console.log(saveToken)
if(saveToken){
    const result = (await HttpManager.validToken(saveToken)) as ResponseBody;
    if (result.success) {

        //console.log(result.message)
        console.log(result.data.id);
        
        store.commit("setUserId", result.data.id);
        store.commit("setUsername", result.data.username);
        store.commit("setUserPic", result.data.avator);
        store.commit("setToken", true);
    }else{
        console.log(result.message)
    }
}

createApp(App).use(router).use(store).use(ElementPlue).mount('#app')
