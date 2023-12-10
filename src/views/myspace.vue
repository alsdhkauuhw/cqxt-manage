<template>
    <div ref="chartContainer" style="width: 400px; height: 400px;"></div>
    <div ref="myScoreChange" style="width: 400px; height: 400px;"></div>
    
    <el-row>  
    <el-col :span="6">
      <el-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            当前分数排名
            <el-icon style="margin-left: 4px" :size="12">
              <Male />
            </el-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </el-statistic>
    </el-col>
  </el-row>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { initChart } from "@/echarts/scoreOneDay"
  import { myscorechange } from "@/echarts/myScoreChange"
  import { ChatLineRound, Male } from '@element-plus/icons-vue'
  const chartContainer = ref<HTMLElement | null>(null);
  const myScoreChange = ref<HTMLElement | null>(null);
  onMounted(() => {
    initChart(chartContainer);
    myscorechange(myScoreChange);
  });
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>