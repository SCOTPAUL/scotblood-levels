---
---

// Placeholder from http://nvd3.org/examples/line.html
$(document).ready(function(){
  $.get('/scotblood-levels/_data/blood_stats.csv',

    function startgraph(data){
       var res = $.csv.toObjects(data);
       nv.addGraph(function() {
        var chart = nv.models.lineChart()
                        .margin({left: 100, right:50})  //Adjust chart margins to give the x-axis some breathing room.
                        .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                        .showLegend(true)        //Show the legend, allowing users to turn on/off line series.
                        .showYAxis(true)        //Show the y-axis
                        .showXAxis(true)        //Show the x-axis
        ;

        chart.xAxis     //Chart x-axis settings
             .axisLabel('Date')
             .tickFormat(function(d) { return d3.time.format('%Y-%m-%d')(new Date(d)); });

        chart.yAxis     //Chart y-axis settings
             .axisLabel('Days Remaining')
             .tickFormat(d3.format('.1f'));

        /* Done setting the chart up? Time to render it!*/
        var myData = getData(res);    //You need data...

        d3.select('#chart svg')    //Select the &lt;svg&gt; element you want to render the chart in.
             .datum(myData)          //Populate the &lt;svg&gt; element with chart data...
             .call(chart);           //Finally, render the chart!

        //Update the chart when window resizes.
        nv.utils.windowResize(function() { chart.update(); });
        return chart;
    });
  });

  function getData(res) {
    var ret = [];
    var i;

    var ret_cpy = [];
    /* jshint ignore:start */
    
    
    
    

    ret_cpy = [
    
      {
        key: "O-",
        values:[
          
            
              {x:new Date("2016-03-16"), y:parseFloat("5.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("5.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("5.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("5.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("5.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("4.4")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("4.4")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("4.2")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("4.9")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
        ],
      },
    
      {
        key: "A-",
        values:[
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("7.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("8.2")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("7.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("7.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
        ],
      },
    
      {
        key: "B-",
        values:[
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("6.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("6.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("6.9")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("7.7")},
            
          
            
          
            
          
            
          
            
          
            
          
        ],
      },
    
      {
        key: "AB-",
        values:[
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("8.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("9.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("10.0")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("10.0")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("10.0")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("8.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("8.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("8.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("9.5")},
            
          
            
          
            
          
            
          
            
          
        ],
      },
    
      {
        key: "O+",
        values:[
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("7.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("7.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("7.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("6.4")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("6.4")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("6.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("6.5")},
            
          
            
          
            
          
            
          
        ],
      },
    
      {
        key: "A+",
        values:[
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("8.4")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("8.0")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("7.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("7.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("7.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("7.3")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("7.2")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("7.5")},
            
          
            
          
            
          
        ],
      },
    
      {
        key: "B+",
        values:[
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("11.7")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("11.7")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("11.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("11.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("11.8")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("11.2")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("11.2")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("10.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("9.7")},
            
          
            
          
        ],
      },
    
      {
        key: "AB+",
        values:[
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-16"), y:parseFloat("15.9")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-17"), y:parseFloat("15.6")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-18"), y:parseFloat("15.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-19"), y:parseFloat("15.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-20"), y:parseFloat("15.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("15.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-21"), y:parseFloat("15.1")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-22"), y:parseFloat("14.5")},
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
          
            
              {x:new Date("2016-03-23"), y:parseFloat("15.7")},
            
          
        ],
      },
    
    ]
    /* jshint ignore:end */

    console.log(ret_cpy);
    var blood_types = ['O-', 'A-', 'B-', 'AB-', 'O+', 'A+', 'B+', 'AB+'];

    for(i = 0; i < blood_types.length; ++i){
       ret.push({
           values: [],
           key: blood_types[i]
       });
    }

    ret.push({
        values: [],
        key: 'Target',
        classed: 'dashed',
        color: '#000000',
        strokeWidth: 4
    });

    for(i = 0; i < res.length; ++i){
       var current = res[i];
       var pos = blood_types.indexOf(current.type);
       if(pos != -1){
        ret[pos].values.push({x:new Date(current.date), y:parseFloat(current.days_remaining)});
        ret[ret.length - 1].values.push({x: new Date(current.date), y:6.0} );
       }
    }

    //Line chart data should be sent as an array of series objects.
    return ret_cpy;
  }
});
