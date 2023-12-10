<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="登录" name="fourth"></el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
    import { getCurrentInstance, ref } from 'vue'
    import type { TabsPaneContext } from 'element-plus'
    import { RouterName } from '@/enum/router-name';

    const activeName = ref('first')
    const {proxy} = getCurrentInstance();
    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
        proxy.$router.push(RouterName.Signin)
    }

</script>

<style>
    .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    }
</style>
  