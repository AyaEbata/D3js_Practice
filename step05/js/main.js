var dataSet = [73, 128, 49, 95, 63];

d3.select('#myGraph')
  .selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
  // .datum(function(d, i) {  // .datum()でグラフデータの値を変更できる
  //     console.log('d = ' + d + ', i = ' + i);
  //     return d;
  // })
  .call(function(elem) {  // call()とeach()で上記datum()と同じ出力結果は得られる
      elem.each(function(d, i) {
          console.log('d = ' + d + ', i = ' + i);
      });
  })
  