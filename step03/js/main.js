d3.select('#myGraph')
  .append('svg')
  .append('rect')
  .attr({
      x: '10px',
      y: '20px',
      width: '100px',
      height: '80px',
      id: 'rectangle'
  })

d3.select('#rectangle')
  .on('click', function() {
      d3.select(this)
        .attr('class', 'bar_color')  // cssで先に作成していたclassを指定してあげるだけ
  })