import { HttpManager } from '@/API';
import * as echarts from 'echarts';
import { ref } from 'vue';
import { useStore } from 'vuex';

export async function initChart(chartContainer) {
    
    const store = useStore()
    const userId = store.getters.userId
    console.log(store.getters.userId)
    const resule = (await HttpManager.dailyCheckById(userId)) as ResponseBody
    const container = chartContainer.value
    const data = resule.data[(resule.data.length - 1)]
    if (container) {
      const myChart = echarts.init(container);
      const score = [data.blanketFoldingScore, data.garbageDisposalScore
        , data.desktopOrganizationScore, data.hygieneScore]
      // 在这里配置你的图表
      myChart.setOption({
        // 配置项
                title: {
            text: '今日检查情况'
        },
        tooltip: {},
        xAxis: {
            data: ['叠被情况', '垃圾处理', '桌面整理', '寝室卫生']
        },
        yAxis: {},
        series: [
            {
            name: 'score',
            type: 'bar',
            data: score,
            }
        ]
      });
    }
  }
