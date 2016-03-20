// 使用するデータ
var dataSet = [25, 20, 45, 10];

// 円グラフレイアウト
var pie = d3.layout.pie()

// 外形と内径を設定
var arc = d3.svg.arc()
  .innerRadius(0)
  .outerRadius(100)

// グラフの描画
var pieElem = d3.select('#myGraph')
  .selectAll('path')
  .data(pie(dataSet))

// データの追加
pieElem
  .enter()
  .append('path')
  .attr('class', 'pie-pink')
  .attr('d', arc)
  .attr('transform', 'translate(110, 105)')
