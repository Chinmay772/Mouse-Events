var over = document.getElementById('mouseover')
var coun = 0;
over.addEventListener('mouseover',function(){
    var count = document.querySelector('#mouseover > h3')
    coun +=1;
    count.innerHTML=coun;
    console.log("Mouse Over is occured")
})


var enter = document.getElementById('mouseenter')
coun1 = 0;
enter.addEventListener('mouseenter',function(){
    var count11 = document.querySelector('#mouseenter > h3')
    coun1 +=1;
    count11.innerHTML=coun1;
    console.log('Mouse Enter event is occured')
})

var move = document.getElementById('mousemove')
coun2=0;
move.addEventListener('mousemove',function(){
    var count22 = document.querySelector('#mousemove > h3')
    coun2 += 1;
    count22.innerHTML= coun2;
    console.log('Mousemove occured');
})

var down = document.getElementById('mousedown')
coun3=0;
down.addEventListener('mousedown',function(){
    var count33 = document.querySelector('#mousedown > h3')
    coun3 +=1;
    count33.innerHTML=coun3;
    console.log('MouseDown occured');
})

var up = document.getElementById('mouseup')
coun4=0;
up.addEventListener('mouseup',function(){
    var count44 = document.querySelector('#mouseup > h3')
    coun4 +=1;
    count44.innerHTML=coun4
    console.log('MouseUp occured')
})

var click = document.getElementById('click')
coun5=0;
click.addEventListener('click',function(){
    count55 = document.querySelector('#click > h3')
    coun5 +=1;
    count55.innerHTML=coun5;
    console.log('Click occured')
})

var dClick = document.getElementById('mouseout')
coun6=0;
dClick.addEventListener('mouseout',function(){
    var count66 = document.querySelector('#mouseout > h3')
    coun6 +=1;
    count66.innerHTML=coun6; 
    console.log('Mouseout occured')
})

var wheel = document.getElementById('wheel')
count7=0;
wheel.addEventListener('wheel',function(){
    count77 = this.querySelector('wheel > h3')
    coun7 += 1;
    count77.innerHTML=counn7;
    console.log('Wheel Event Ocurred')
})

var Dclick = document.getElementById('Dclick')
count8=0;
wheel.addEventListener('dblclick',function(){
    count88 = this.querySelector('Dclick > h3')
    coun8 += 1;
    count77.innerHTML=counn7;
    console.log('Double click Event Ocurred')
})