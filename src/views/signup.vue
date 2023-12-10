<template>
    <el-form status-icon :rules="SignupRules" ref="SignupRef" :model="signup" label-width="auto" class="signup-ruleform"> 
        <el-form-item label="邮箱" prop="email">
            <el-input aria-placeholder="请输入邮箱" v-model="signup.email" />
        </el-form-item>
        <el-form-item label="用户名" prop="name">
            <el-input aria-placeholder="用户名" v-model="signup.name" />
        </el-form-item>
        <el-form-item label="账号" prop="username">
            <el-input aria-placeholder="账号" v-model="signup.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input aria-placeholder="密码" v-model=" signup.password"/>
        </el-form-item>
        <el-form-item>
            <el-button @click="signUp()" color="#626aef" :dark="isDark">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue';
import { SignupRules } from "@/enum/validate"
import mixin from "@/mixins/mixins"
import { ElMessage, FormInstance } from 'element-plus';
import { HttpManager } from '@/API';
import { RouterName } from '@/enum/router-name';
export default defineComponent({
    name: 'signup',
    setup(){
        const {proxy} = getCurrentInstance()
        const signup = reactive({
            email: "",
            name: "",
            username: "",
            password: "",
        })
        const { routerManager } = mixin()
        
        async function signUp(){
        try {
            const valid = await (proxy.$refs["SignupRef"] as any).validate();
            const email = signup.email
            const name = signup.name
            const username = signup.username
            const password = signup.password
            const result = (await HttpManager.Signup(email, name, username, password)) as ResponseBody
            if(result.success){
                //console.log(result.message)
                ElMessage.success(result.message)
                routerManager(RouterName.Signin, {path: RouterName.Signin})
            }else{
                //console.log(result.message)
                ElMessage.error(result.message)
            }
        } catch (error) {
            console.error(error)
        }     
                
            
    } 

        return {
            signup,
            SignupRules,
            signUp,
        }
    }

})
</script>