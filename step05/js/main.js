var dataSet = [73, 128, 49, 95, 63];

d3.select('#myGraph')
  .selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
  .datum(function(d, i) {  // .datum()でグラフデータの値を変更できる
      console.log('d = ' + d + ', i = ' + i);
      return d;
  })
