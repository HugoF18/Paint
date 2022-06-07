let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;
let distx = 0;
let disty = 0;
let dist = 0;
let W = 0;
let H = 0;
let mode = 0;
function reset(){
x0 = 0;
y0 = 0;
x1 = 0;
y1 = 0;
dist = 0;
W = 0;
H = 0;
}

const button1 = document.createElement('button')
button1.id = 'mainButton1'
button1.addEventListener('click', () => {
    mode = 1;
  })
document.body.appendChild(button1)

const button2 = document.createElement('button')
button2.id = 'mainButton2'
button2.addEventListener('click', () => {
    mode = 2;
})
document.body.appendChild(button2)

const button3 = document.createElement('button')
button3.id = 'mainButton3'
button3.addEventListener('click', () => {
    mode = 3;
})
document.body.appendChild(button3)





const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
reset();
var dataURL = canvas.toDataURL();
console.log(dataURL);
myCanvas.addEventListener('mousedown', e => {
    if (mode == 1){
    if (x0 == 0){
        x0 = e.clientX;
        y0 = e.clientY;
}
    else {
        x1 = e.clientX;
        y1 = e.clientY;
        line(context, x0, y0, x1, y1);
        reset();
        var dataURL = canvas.toDataURL();
        console.log(dataURL);
    }
}
    if (mode == 2){
        if (x0 == 0){
        x0 = e.clientX;
        y0 = e.clientY;
        }
        else {
            x1 = e.clientX;
            y1 = e.clientY;
            dist = Math.sqrt((Math.pow((x1 - x0), 2))+(Math.pow((y1 - y0), 2)))
            circle(context, x0, y0, dist);
            reset();
            var dataURL = canvas.toDataURL();
            console.log(dataURL);
        }

    }
    if (mode== 3){
        if(x0 == 0){
            x0 = e.clientX;
            y0 = e.clientY;
        }
        else {
            x1 = e.clientX;
            y1 = e.clientY;
            W = x1 - x0;
            H = y1 - y0;
            square(context, x0, y0, W, H);
            reset();
            var dataURL = canvas.toDataURL();
            console.log(dataURL);
        }
    }
});

function line(context, x0, y0, x1, y1){
if (canvas.getContext) 
 {
  context.beginPath(); 
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.stroke();
   }}

function circle (context, x0, y0, dist){
    if (canvas.getContext)
    {
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");
        context.beginPath();
        context.arc(x0, y0, dist, 0, 2 * Math.PI);
        context.stroke();
    }
}

function square(context, x0, y0, W, H){
    if (canvas.getContext){
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");
        context.beginPath();
        context.rect(x0, y0, W, H);
        context.stroke();
    }
}
