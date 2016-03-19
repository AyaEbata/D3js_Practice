var svg = d3.select('#myGraph')
  .append('svg')
  // .append('rect')  // rectの中にrectができてしまう
  // .append('rect')

svg.append('rect')    // 複数rectするにはこう書く
svg.append('rect')