// 色の指定
var colorList = ['#FF4081', '#536DFE', '#E040FB', '#8BC34A', '#FFC107'];

// 円グラフレイアウト
var pie = d3.layout.pie()

// 外形と内径を設定
var arc = d3.svg.arc()
  .innerRadius(40)
  .outerRadius(100)


// 初期表示
drowPie('data1');

// selectが変更された時
d3.select('#select-data')
  .on('change', function() {

      // 変更されたらいったん表示してるの消す
      d3.select('#myGraph')
        .selectAll('*')
        .remove()

      drowPie(this.value);
  })


// 円グラフの描画メソッド
function drowPie(fileName) {

    // csvファイルの読み込み
    d3.csv('data/' + fileName + '.csv', function(error, data) {
        var dataSet = [];
        for (var i in data[0]) {
            dataSet.push(data[0][i]);
        }

        // dataSetを降順に変換(そうじゃないとアニメーション崩れる)
        dataSet.sort(function(a, b) {
            a = parseInt(a);
            b = parseInt(b);

            if( a > b ) return -1;
            if( a < b ) return 1;
            return 0;
        });

        // グラフの描画
        var pieElem = d3.select('#myGraph')
          .selectAll('g')
          .data(pie(dataSet))
          .enter()
          .append('g')
          .attr('transform', 'translate(110, 105)')

        // データの追加
        pieElem
          .append('path')
          .attr('class', 'pie')
          // .attr('d', arc)  // アニメーションをつける時は、ここで指定しなくなる
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

        // 各データの値を円弧内に表示
        pieElem
          .append('text')
          .attr('class', 'pie-val')
          .attr('transform', function(d, i) {
              return 'translate(' + arc.centroid(d) + ')';
          })
          .text(function(d, i) {
              console.log(d);  // (中身みてみ)
              return d.value;
          })

        // テキストの表示(中央に合計値)
        var textElem = d3.select('#myGraph')
          .append('text')
          .attr('class', 'sum-label')
          .attr('transform', 'translate(110, ' + (105 + 5) + ')')
          .text('SUM ' + d3.sum(dataSet))
    })
}
