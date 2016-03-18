// グラフのデータ
var dataSet = [300, 130, 5, 60, 240];

// rectタグの生成
// データ1つめ
d3.select('#myGraph')
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', dataSet[0])
  .attr('height', '20px')

// データ2つめ
d3.select('#myGraph')
  .append('rect')
  .attr('x', 0)
  .attr('y', 25)
  .attr('width', dataSet[1])
  .attr('height', '20px')