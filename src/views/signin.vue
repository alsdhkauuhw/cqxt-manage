<template>
    <div class="signin">
        <header>登入</header>
            <el-form :model="user" status-icon :rules="SigninRules" ref="userref" lable-width="100px" class="signin-ruleform">
                <el-form-item label="账号" prop="username">
                    <el-input placeholder="请输入账号" v-model="user.username" clearable style="width: 200px"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入密码" v-model="user.password" show-password style="width: 200px"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="signin()" color="#626aef" :dark="isDark">登入</el-button>
                    <el-button type="primary" @click="loginin()" color="#626aef" :dark="isDark">注册</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from 'vue';
import { SigninRules } from "@/enum/validate"
import { HttpManager } from '@/API';
import mixin from '@/mixins/mixins';
import {RouterName} from "@/enum/router-name"
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
    export default defineComponent({
        name: 'signin',
        setup(){
            const store = useStore()
            const {proxy} = getCurrentInstance();
            const{routerManager} = mixin();
            const user = reactive({
                username:"",
                password:""
            })
            async function signin(){
            try {
                const valid = await (proxy.$refs["userref"] as any).validate();
                const username = user.username;
                const password = user.password;
                const result = (await HttpManager.Signin(username, password)) as ResponseBody;
                /* (proxy as any).$massage({
                type : result.type,
                }) */
                if (result.success) {

                    //console.log(result.message)
                    console.log(result.data.id);
                    
                    store.commit("setUserId", result.data.id);
                    store.commit("setUsername", result.data.username);
                    store.commit("setUserPic", result.data.avator);
                    store.commit("setToken", true);
                    //后面在后端代码中生成token，现在先用id代替，可能有安全风险，但问题不大好吧
                    localStorage.setItem('token', result.data.id)
                    
                    ElMessage.success(result.message);
                    routerManager(RouterName.Cqxtcontainer, {path: RouterName.Cqxtcontainer})
                }else{
                    //console.log(result.message)
                    ElMessage.error(result.message)
                }
            } catch (error) {
                console.error(error) 
            }
            
            }

            function loginin() {
                routerManager(RouterName.SignUp, {path: RouterName.SignUp});
            }

            return{
                user,
                signin,
                loginin,
                SigninRules,
            }
        },

    })
    
</script>