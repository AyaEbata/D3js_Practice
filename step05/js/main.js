// 初期表示
var csvFile = document.getElementById('test1').getAttribute('data-src');

d3.csv('data/' + csvFile, function(error, data) {

    // dataSetにdata1.csvのデータを入れる
    var dataSet = [];
    for (var i = 0; i < data.length; i++) {
        dataSet.push(data[i]['商品１']);
    }

    // 描画
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

// csvファイル名が書かれたボタンが押されたとき
d3.selectAll('button')
  .on('click', function() {

      // 押されたファイル名を取得
      csvFile = this.getAttribute('data-src');
      d3.csv('data/' + csvFile, function(error, data) {

          // 押されたファイルのデータをdataSetに入れる
          var dataSet = [];
          for (var i = 0; i < data.length; i++) {
              dataSet.push(data[i]['商品１']);
          }

          // グラフの棒の長さのみ更新（だから、グラフの棒の数は初期表示と一緒）
          d3.select('#myGraph')
            .selectAll('rect')
            .data(dataSet)
            .attr('width', function(d, i) {
                return d + 'px';
            })
      })
  })
  