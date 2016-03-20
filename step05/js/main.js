// buttonがクリックされたら
d3.selectAll('button').on('click', function() {

    // クリックされたbuttonのファイル名を取得 
    var csvFile = this.getAttribute('data-src');

    // そのcsvファイル名を読み込んで
    d3.csv('data/' + csvFile, function(error, data) {

        // dataSetにファイルのデータをセット
        var dataSet = [];
        for (var i = 0; i < data.length; i++) {
            dataSet.push(data[i]['商品１']);
        }

        // データを更新させたい場合は、分けて書く
        var barElem = d3.select('#myGraph')
          .selectAll('rect')
          .data(dataSet)

        // データ数によってrectを追加する処理
        barElem
          .enter()      
          .append('rect')
          .attr('x', 0)
          .attr('y', function(d, i) {
              return i * 25;
          })
          .attr('height', '20px')

        // データの値によって横幅を変更する処理
        barElem
          .attr('width', function(d, i) {
                return d + 'px';
          })

        // データ数の変更によっていらなくなったrectを削除する処理
        barElem
          .exit()    // 対応するデータがなくなったrectを
          .remove()  // 削除する
    })
})
  