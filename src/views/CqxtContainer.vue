<template>
    <div class="common-layout">
        <RouterView/>
        <el-container>
        <el-header>
            <!-- <Cqxt-Header></Cqxt-Header> -->
            <Cqxt-Menu></Cqxt-Menu>
            <Cqxt-BackTop></Cqxt-BackTop>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Cqxt-Left></Cqxt-Left>
            </el-aside>
            <el-main>
               <Cqxt-Setting></Cqxt-Setting>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
  
<script lang="ts" setup>
    import CqxtLeft from "@/components/layout/CqxtLeft.vue"
    import CqxtHeader from "@/components/layout/CqxtHeader.vue"
    import CqxtMenu from "@/components/layout/CqxtMenu.vue"
    import CqxtBackTop from "@/components/layout/CqxtBackTop.vue"
    import CqxtSetting from "@/components/layout/CqxtSetting.vue"
</script>

<style>

</style>