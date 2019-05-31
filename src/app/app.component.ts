import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
//  import { p } from '@angular/core/src/render3';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }
  LineChart:any;
  BarChart:any;
  PieChart:any;
  DoughnutChart:any;
  chart:any;
  BubbleChart:any;
  // context:any;
  ngOnInit() {
  this.LineChart = new Chart('lineChart',{
    type:'line',
  data:{
    labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets:[{
      label:'Number Of Schools Being Helped Each Months',
      data:[9,7,3,5,2,10,15,16,19,3,1,9],
      fill:true,
      lineTension:0.25,
      borderColor:"blue",
      borderWidth:2
    }]  
  },
  options:{
    title:{
      text:"Line Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
});
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label:"Some Random Data",
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.25)',
         'rgba(54, 162, 235, 0.30)',
         'rgba(255, 206, 86, 0.40)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.53)',
         'rgba(255, 159, 64, 0.50)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: 'Random Data',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Pie Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
this.DoughnutChart = new Chart('doughnutChart', {
  type: 'doughnut',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: 'Random Data',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
  responsive:true,
 title:{
     text:"Doughnut Chart",
     display:true,

 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 },
 animation:{
   animateScale:true,
   animateRotate:true
 }
}
});
this.chart = new Chart('mixedChart',{
  type:'bar',
  options:{
    responsive:true,
    title:{
      display:true,
      text:'Bar and Line Chart'
    },
  },
  data:{
    labels:['1','2','3','4','5','6'],
    datasets:[
      {
        type:'bar',
        label:"DataSet for Bar",
        data:[250,420,530,560,200,170],
        backgroundColor:'rgba(255,0,255,0.5)',
        borderColor:'rgba(255,10,255,0.6)',
        hoverBackgroundColor:'rgba(260,40,255,0.4)',
        fill:false
      },
      {
        type:'line',
        label:'DataSet for Line',
        data:[170,250,530,560,420,230],
        backgroundColor:'rgba(0,0,255,0.4)',
        borderColor:'rgba(0,250,250,0.6)',
        fill:true
      }
    ]
  }
  });
  let options ={
    tooltips:false,
    elements:{
      point:{
        borderWidth:function(context:any){
          return Math.min(Math.max(1,context.dataIndex+1),8);
        },
        hoverBackgroundColor:"transparent",
        hoverBorderColor:function(){
          return "blue";
        },
        hoverBorderWidth: function(context:any){
          var value = context.dataset.data[context.dataIndex];
          return Math.round(8 * value.r/1000);
        },
        radius:function(context:any){
          var value = context.dataset.data[context.dataIndex];
          var size = context.chart.width;
          var base = Math.abs(value.r)/1000;
          return (size/24)*base;
        }
      }
    }
  };
this.BubbleChart = new Chart('bubbleChart',{
      type:'bubble',
      options:options,
      data:{
        datasets:[
          {
            backgroundColor:'rgba(255,0,0,0.4)',
            label:'Bubble Chart',
            data:[{
              x:50,
              y:60,
              r:200
            },{
              x:60,
              y:80,
              r:700
            },{
              x:60,
              y:60,
              r:500
            },{
              x:40,
              y:90,
              r:250
            }
          ]
          }
        ]
      }
});
}
}

