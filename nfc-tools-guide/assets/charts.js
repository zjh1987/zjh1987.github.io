(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var chartDom = document.getElementById('chart-stars');
  if (!chartDom) return;

  var chart = echarts.init(chartDom, null, { renderer: 'svg' });

  var tools = [
    'MifareClassicTool',
    'nfc-pcsc',
    'MCT-bruteforce-key',
    'desfire-tools',
    'NFCman',
    'LibraryNFC'
  ];
  var stars = [6174, 600, 177, 121, 62, 59];

  chart.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var p = params[0];
        return p.name + '<br/>Stars: <b>' + p.value + '</b>';
      }
    },
    grid: { left: '3%', right: '6%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: tools,
      inverse: true,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 }
    },
    series: [{
      type: 'bar',
      data: stars,
      itemStyle: {
        color: function(params) {
          return params.dataIndex === 0 ? accent : accent2;
        },
        borderRadius: [0, 4, 4, 0]
      },
      barWidth: '55%',
      label: {
        show: true,
        position: 'right',
        color: muted,
        fontSize: 11,
        fontFamily: 'GeistMono, monospace',
        formatter: '{c}'
      }
    }]
  });

  window.addEventListener('resize', function() { chart.resize(); });
})();
