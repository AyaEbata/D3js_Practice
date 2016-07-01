// 使用するデータ
var dataSet = [48, 95, 73, 17, 49, 26, 85, 63, 74, 27];

// svgのサイズを取得
const SVG_WIDTH = document.getElementById('myGraph').clientWidth;
const SVG_HEIGHT = document.getElementById('myGraph').clientHeight;


// 折れ線グラフのラインを設定
var line = d3.svg.line()
  .x(function(d, i) {
      return i * (SVG_WIDTH/(dataSet.length-1));
  })
  .y(function(d, i) {
      return SVG_HEIGHT - d;
  })

// 折れ線グラフを描画
var lineElements = d3.select('#myGraph')
  .append('path')
  .attr('class', 'line')
  .attr('d', line(dataSet))
