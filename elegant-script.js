/**
 * Created by zivlevy on 27/05/2017.
 */

// graph data
let data = [50, 82, 30, 70, 5, 90, 12];

// create simple lables
let labels = [];
for (let i = 0; i < data.length; i++) {
    labels.push(i + 1);
}

// create random colors - this is in a separate for loop just for readability
let colors = [];
for (let i = 0; i < data.length; i++) {
    colors.push(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`);
}

// get the canvas
let ctx = document.getElementById("myChart");

var barButton = document.getElementById("BarChart");
let lineButton = document.getElementById("LineChart");
let pieButton = document.getElementById("PieChart");

barButton.addEventListener('click',CreateChartFunc('bar'));
lineButton.addEventListener('click',CreateChartFunc('line'));
pieButton.addEventListener('click',CreateChartFunc('pie'));

//Defualt
let chartD = CreateChartFunc('bar');

// create the graph fucnction
function CreateChartFunc(chartType){
    return function (){
    let myChart = new Chart(ctx, {
    type: chartType,
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors,
            borderWidth: 2
        }]
    },
    options: {
        legend: {display: false},
        // responsive:false, //<====  play with this to see what happens
        layout: {padding: {left: 50, right: 50, top: 30, bottom: 0}}
    }
    })
    }
}