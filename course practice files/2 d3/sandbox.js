const canvas=d3.select('.canvas');
const svg=canvas.append('svg');
svg.attr('height',600);
svg.attr('width',600);


const group=svg.append('g')
.attr('transform','translate(90,100)');
//append shapes to svg container
group.append('rect')
.attr('width',200)
.attr('height',100)
.attr('fill','blue')
.attr('x',20)
.attr('y',20);
group.append('circle')
.attr('r',50)
.attr('cx',300)
.attr('cy',80)
.attr('fill','yellow');
group.append('line')
.attr('x1',370)
.attr('x2',400)
.attr('y1',20)
.attr('y2',120)
.attr('stroke','red');
//text
svg.append('text')
.attr('x',20)
.attr('y',200)
.attr('fill','grey')
.text('Hello world!')
.style('font-size','50px');
