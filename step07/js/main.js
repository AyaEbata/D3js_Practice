// 使用するデータ
var dataSet = [45, 25, 15, 10, 5];
var colorList = ['#FF4081', '#536DFE', '#E040FB', '#8BC34A', '#FFC107'];

// 円グラフレイアウト
var pie = d3.layout.pie()

// 外形と内径を設定
var arc = d3.svg.arc()
  .innerRadius(40)
  .outerRadius(100)

// グラフの描画
var pieElem = d3.select('#myGraph')
  .selectAll('path')
  .data(pie(dataSet))

// データの追加
pieElem
  .enter()
  .append('path')
  .attr('class', 'pie')
  // .attr('d', arc)  // アニメーションをつける時は、ここで指定しなくなる
  .attr('transform', 'translate(110, 105)')
  .style('fill', function(d, i) {
      return colorList[i];
  })

  // アニメーション
  .transition()
  .duration(700)
  .delay(function(d, i) {
      return i * 640;
  })
  .ease('sin-out')  // アニメーションの波形を変更
  .attrTween('d', function(d, i) {
      var interpolate = d3.interpolate(
          { startAngle: d.startAngle, endAngle: d.startAngle },  // アニメーション始まる前の位置
          { startAngle: d.startAngle, endAngle: d.endAngle }     // アニメーション終わってからの位置
      )
      return function(t) {  // t = 時間
          return arc(interpolate(t));
      }
  })

// テキストの表示
var textElem = d3.select('#myGraph')
  .append('text')
  .attr('class', 'sum-label')
  .attr('transform', 'translate(110, ' + (105 + 5) + ')')
  .text('SUM ' + d3.sum(dataSet))
