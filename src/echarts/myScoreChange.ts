import { HttpManager } from '@/API';
import * as echarts from 'echarts';
import { useStore } from 'vuex';

export async function myscorechange(chartContainer) {
    
    const store = useStore()
    const userId = store.getters.userId
    //console.log(store.getters.userId)
    const resule = (await HttpManager.dailyCheckById(userId)) as ResponseBody
    //console.log(resule.message)
    const container = chartContainer.value;
    
    
    if (container) {
      const myChart = echarts.init(container);
      const List = []
    const score = []
    resule.data.forEach(element => {
        const date = element.checkDate
        List.push(date.split('T')[0])
        score.push((400-(element.blanketFoldingScore + element.garbageDisposalScore + 
            element.desktopOrganizationScore + element.hygieneScore))/10)
        console.log(date)
    });
      // 在这里配置你的图表
      myChart.setOption({
        // 配置项
                title: {
            text: '最近寝室扣分变化'
        },
        tooltip: {},
        xAxis: {
            data: List
        },
        yAxis: {},
        series: [
            {
                data: score,
                type: 'line',
                label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {
                    fontSize: 20
                  } 
                }
            }
        ]
      });
    }
  }
