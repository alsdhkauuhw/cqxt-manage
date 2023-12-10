<template>
    <div class="h-6" />
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >   
        <div class="flex-grow2"/>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <div class="flex-grow"/>
        <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
        style="height: 50px;width: 500px;"
      />
        <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1" @click="myspace">个人空间</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" @click="push" v-if="!isSignIn">登录</el-menu-item>
        
        <el-menu-item index="4" disabled>Info</el-menu-item>
        <el-menu-item index="5">Orders</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
    import { ElMessage } from 'element-plus'
    import { ref, getCurrentInstance, watchEffect, watch, computed } from 'vue'
    import { useStore } from 'vuex';
    import { Search } from '@element-plus/icons-vue'
    const input2 = ref('')
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const store = useStore()
    const token = store.getters.token 
    const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    }
    const { proxy } = getCurrentInstance()
    const push = ()=>{
        proxy.$router.push('sign-in')
    }
    const myspace = ()=>{
       
        console.log(store.getters.userId)
        if(token)
        {
            proxy.$router.push('my-space')
        }else{
            proxy.$router.push('sign-in')
            ElMessage.info("请先登录")
        }
    }
    const isSignIn = computed(()=>store.getters.token)
</script>

<style>
    .flex-grow {
        flex-grow: 0.5;
    }

    .flex-grow2 {
        flex-grow: 0.3;
    }
</style>
