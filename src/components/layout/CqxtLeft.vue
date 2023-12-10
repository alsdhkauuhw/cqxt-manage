<template>
    <div id="Left">
     <div class="sub">
    <el-row class="tac">
      <el-col :span="100">
        <h5 class="mb-2">Default colors</h5>
        <el-menu
          :default-active="activeMenuItem"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleMenuSelect"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group> 
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          
          <el-sub-menu index="3">
              <template #title>
                <el-icon><document /></el-icon>
                <span>服务</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="3-1">报修</el-menu-item>
              </el-menu-item-group>
              
            </el-sub-menu>

          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    </div>
</div>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus';
import { useStore } from 'vuex';
    const store = useStore()
    let activeMenuItem = store.getters.activeMenuItem
    const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleMenuSelect = (index: string) => {
  // 在菜单项被选择时更新数据，从而触发内容的动态变化
  activeMenuItem = index;
  store.commit('setActiveMenuItem', activeMenuItem)
  console.log(store.getters.activeMenuItem)
};
  </script>
    
  <style>
  
</style>