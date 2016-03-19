d3.csv('data/data.csv')
  .row(function(d) {
      return {
          // 日本語表記を英語に変換（てゆか、d['商品１']をitem1に入れた的な）
          item1: d['商品１'],
          item2: d['商品２'],
          item3: d['商品３']
      };
  })
  .get(function(error, data) {  // .get()を使うと、csvファイルが読み込み終わった後に実行される
      console.log(data);

      var dataSet = [];
      for (var i = 0; i < data.length; i++) {
          // 日本語表記から英語表記に変換したからitem1でいける
          dataSet.push(data[i].item1);
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
