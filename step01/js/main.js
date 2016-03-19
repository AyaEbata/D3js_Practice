// CSVファイルからデータの読み込み
d3.csv('data/data.csv', function(error, data) {
    var dataSet = [];

    // item1のデータをセット
    for (var i = 0; i < data.length; i++) {
        dataSet.push(data[i].item1);
    }

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
      .attr('width', '0px')    // transition()でアニメーションをつけるにあたって、一旦0pxにしておく
      .attr('height', '20px')
      .transition()            // グラフのアニメーション
      .delay(function(d, i) {  // 1つずつ順番に時間ずらしてアニメーション
          return i * 300;      // 0.3秒ごと
      })
      .duration(1500)          // 1.5秒かけてアニメーションを実施
      .attr('width', function(d, i) {  // dにdataSetの値が入っているので、順番に出力
          return d + 'px';
      })

    // グラフがクリックされたとき
    d3.select('#myGraph')
      .selectAll('rect')
      .on('click', function() {
          d3.select(this)  // thisでクリックしたグラフの棒のみを指定できる
            .style('fill', '#F8BBD0')
      })

    // ボタンがクリックされたときグラフのデータを更新
    d3.select('#updateButton')
      .on('click', function() {

          dataSet = [];

          // item2のデータをセット
          for (var i = 0; i < data.length; i++) {
              dataSet.push(data[i].item2);
          }

          // 更新するグラフ
          d3.select('#myGraph')
            .selectAll('rect')
            .data(dataSet)
            .transition()    // グラフのアニメーション
            .duration(1500)  // 1.5秒かけてアニメーションを実施
            .attr('width', function(d, i) {
                return d + 'px';
            })
      })
})
