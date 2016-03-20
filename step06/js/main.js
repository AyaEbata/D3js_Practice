// 今回使うデータ
var dataSet = [54, 134, 60, 98, 43];

// svgのheightを取得
var svgHeight = document.getElementById('myGraph').clientHeight;

// グラフの描画
var barElem = d3.select('#myGraph')
  .selectAll('rect')
  .data(dataSet)

barElem
  .enter()
  .append('rect')
  .attr('class', 'bar-pink')
  .attr('width', '20px')
  .attr('height', function(d, i) {
      return d;
  })
  .attr('x', function(d, i) {
      return i * 25;
  })
  .attr('y', function(d, i) {
      // ここで取得したheightを使う(使わないと逆さまになる)
      return svgHeight - d;
  })