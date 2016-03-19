// jsonファイルの読み込み
d3.json('data/data.json', function(error, data) {
    console.log(data);

    var dataSet = [];
    for (var i = 0; i < data[0].sales.length; i++) {
        dataSet.push(data[0].sales[i]);
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
