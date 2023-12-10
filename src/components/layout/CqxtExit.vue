<template>
    <el-button @click="exit" v-if="isSignIn">退出账号</el-button>
</template>

<script lang="ts" setup>
    import { useStore } from 'vuex';
    const store = useStore();
    const exit = () => {
        store.commit('clearAll')
        store.commit('clearUser')
        localStorage.clear()
        window.location.reload();
    }
    
    const isSignIn = store.getters.token
</script>