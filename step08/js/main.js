// 使用するデータ
var dataSet = [48, 95, 73, 17, 49, 26, 85, 63, 74, 27];

// svgのサイズを取得
const SVG_WIDTH = document.getElementById('myGraph').clientWidth;
const SVG_HEIGHT = document.getElementById('myGraph').clientHeight;

// まわりの余白
const MARGIN_LEFT = 40;
const MARGIN_TOP = 10;
const MARGIN_BOTTOM = 20;

// グラフ領域
const GRAPH_AREA_HEIGHT = SVG_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM;

// メモリの最大値
const MAX_AXIS_Y = 100;

// 倍率
const SCALE = GRAPH_AREA_HEIGHT / MAX_AXIS_Y;


// 折れ線グラフのラインを設定
var line = d3.svg.line()
  .x(function(d, i) {
      return i * (SVG_WIDTH/(dataSet.length-1));
  })
  .y(function(d, i) {
      return SVG_HEIGHT - d * SCALE;
  })

// 折れ線グラフを描画
var lineElements = d3.select('#myGraph')
  .append('path')
  .attr('class', 'line')
  .attr('d', line(dataSet))
  .attr('transform', 'translate(' + MARGIN_LEFT + ', ' + (-MARGIN_BOTTOM) + ')')


// 目盛りのスケールの設定
var yScale = d3.scale.linear()
  .domain([0, MAX_AXIS_Y])
  .range([GRAPH_AREA_HEIGHT, 0])

// メモリ(縦線)を表示
d3.select('#myGraph')
  .append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + MARGIN_LEFT + ', ' + MARGIN_TOP + ')')
  .call(
    d3.svg.axis()
      .scale(yScale)
      .orient('left')
  )


// 横線の表示
d3.select('#myGraph')
  .append('rect')
  .attr('width', SVG_WIDTH - MARGIN_LEFT)
  .attr('height', 1)
  .attr('transform', 'translate(' + MARGIN_LEFT + ', ' + (SVG_HEIGHT - MARGIN_BOTTOM) + ')')
