// 今回使うデータ
var dataSet = [54, 134, 60, 98, 43];

// svgのheightを取得
var svgHeight = document.getElementById('myGraph').clientHeight;

// グラフの棒の横幅
var barWidth = 20;

// グラフのずれ調整
var offsetX = 30;
var offsetY = 15;

// 目盛りの最大値
var dataRange = 140;

// グラフの描画
var barElem = d3.select('#myGraph')
  .selectAll('rect')
  .data(dataSet)

// データの追加
barElem
  .enter()
  .append('rect')
  .attr('class', 'bar-pink')
  .attr('width', barWidth)
  .attr('height', function(d, i) {
      return d;
  })
  .attr('x', function(d, i) {
      // 目盛りの分(offsetX + 10)だけ右にずらしとく
      return i * 25 + (offsetX + 10);
  })
  .attr('y', function(d, i) {
      // ここで取得したheightを使う(使わないと逆さまになる)
      // offsetYで目盛りとの場所調節
      return svgHeight - d - offsetY;
  })

// テキストの追加
barElem
  .enter()
  .append('text')
  .attr('class', 'bar-label')
  .attr('x', function(d, i) {
      // グラフのwidthが20だから、真ん中を選択するために10を足す
      // and 目盛りの分(offsetX + 10)だけ右にずらしとく
      return i * 25 + barWidth/2 + (offsetX + 10);
  })
  .attr('y', svgHeight - 5 - offsetY)  // offsetYで目盛りとの場所調節
  .text(function(d, i) {
      return d;
  })

// 目盛りのスケールの設定
var yScale = d3.scale.linear()
  .domain([0, dataRange])  // データの範囲
  .range([dataRange, 0])   // 目盛り全体のサイズ

// 目盛りの生成
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left')

// 目盛りの描画
d3.select('#myGraph')
  .append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + offsetX + ', ' + (svgHeight-dataRange-offsetY) + ')')
  .call(yAxis)
