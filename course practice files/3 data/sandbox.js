const data=[
        {width:200,height:100,fill:'purple'},
        {width:100,height:50,fill:'green'},
        {width:20,height:100,fill:'blue'}
];
const svg = d3.select('svg');
//join data to rects
const rects = svg.selectAll('rect')
.data(data);
//add attributes to rects already in DOM
rects.attr('width',(d,i,n)=>d.width)
.attr('height',d=>d.height)
.attr('fill',d=>d.fill);
//add attributes to virtual rects and then append it to DOM
rects.enter()
.append('rect')
.attr('width',(d,i,n)=>d.width)
.attr('height',d=>d.height)
.attr('fill',d=>d.fill);
console.log(rects);