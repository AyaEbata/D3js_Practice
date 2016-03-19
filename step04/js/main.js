d3.csv('data/data.csv', function(error, data) {
    var dataSet = [];
    for (var i = 0; i < data.length; i++) {
        // data.csvのヘッダー部分が日本語の場合、このように指定する
        dataSet.push(data[i]['商品１']);
    }

    // グラフの描画
    d3.select('#myGraph')
      .selectAll('rect')
      .data(dataSet)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', function(d, i) {
          return i * 25;
      })
      .attr('width', function(d, i) {
          return d + 'px';
      })
      .attr('height', '20px')
})
