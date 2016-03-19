// txtファイルの読み込み
d3.text('data/data.txt', function(error, text) {
    var dataSet = [];
    var data = text.split('\x0a');   // 改行で区切る
    var sales = data[0].split('/');  // '/'で区切る

    console.log(sales);

    for (var i = 1; i < sales.length; i++) {
        dataSet.push(sales[i]);
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
