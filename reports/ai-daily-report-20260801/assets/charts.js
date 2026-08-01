(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Price Comparison ---
  var chartPrice = echarts.init(document.getElementById('chart-price'), null, { renderer: 'svg' });
  chartPrice.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      borderColor: rule,
      textStyle: { color: ink }
    },
    legend: {
      data: ['输入定价', '输出定价'],
      textStyle: { color: muted },
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '12%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['GPT-5.6 Sol', 'Claude Fable 5', 'Gemini 3.1 Pro', 'Kimi K3', 'DeepSeek V4'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      name: '美元 / 百万Token',
      nameTextStyle: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted }
    },
    series: [
      {
        name: '输入定价',
        type: 'bar',
        data: [5, 10, 3.5, 8, 0.5],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
        barWidth: '30%'
      },
      {
        name: '输出定价',
        type: 'bar',
        data: [30, 50, 10.5, 32, 2],
        itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] },
        barWidth: '30%'
      }
    ]
  });
  window.addEventListener('resize', function() { chartPrice.resize(); });

  // --- Chart: Agent Capability Radar ---
  var chartRadar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chartRadar.setOption({
    animation: false,
    tooltip: {
      appendToBody: true,
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      borderColor: rule,
      textStyle: { color: ink }
    },
    legend: {
      data: ['OpenAI Codex', '腾讯WorkBuddy', 'TRAE IDE', 'Hermes Agent'],
      textStyle: { color: muted },
      bottom: 0
    },
    radar: {
      indicator: [
        { name: '代码开发', max: 100 },
        { name: '文件操作', max: 100 },
        { name: '远程控制', max: 100 },
        { name: '多Agent协作', max: 100 },
        { name: '自进化能力', max: 100 },
        { name: '插件生态', max: 100 }
      ],
      axisName: { color: muted },
      splitArea: { areaStyle: { color: ['rgba(56,189,248,0.02)', 'rgba(56,189,248,0.05)'] } },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [95, 60, 40, 90, 50, 85],
          name: 'OpenAI Codex',
          itemStyle: { color: accent },
          areaStyle: { color: accent + '33' }
        },
        {
          value: [40, 95, 90, 30, 20, 50],
          name: '腾讯WorkBuddy',
          itemStyle: { color: accent2 },
          areaStyle: { color: accent2 + '33' }
        },
        {
          value: [85, 50, 30, 60, 30, 60],
          name: 'TRAE IDE',
          itemStyle: { color: '#34d399' },
          areaStyle: { color: 'rgba(52,211,153,0.2)' }
        },
        {
          value: [50, 30, 80, 40, 95, 70],
          name: 'Hermes Agent',
          itemStyle: { color: '#fbbf24' },
          areaStyle: { color: 'rgba(251,191,36,0.2)' }
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartRadar.resize(); });
})();
