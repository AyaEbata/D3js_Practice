// グラフのデータ
var dataSet = [300, 130, 5, 60, 240];

// rectタグの生成
d3.select('#myGraph')
  .selectAll('rect')
  .data(dataSet)
  .enter()  // 自動的にdataSetの数だけrectが生成される
  .append('rect')
  .attr('x', 0)
  .attr('y', function(d, i) {  // (0, 25*i)が各rectのスタート位置
      return i * 25;
  })
  .attr('width', function(d, i) {  // dにdataSetの値が入っているので、順番に出力
      return d + 'px';
  })
  .attr('height', '20px');