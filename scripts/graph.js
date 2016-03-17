---
---
// Placeholder from http://nvd3.org/examples/line.html
$(document).ready(function(){
  $.get( "{{ "/_data/blood_stats.csv" | prepend: site.baseurl }}",
    function startgraph(data){
      var res = $.csv.toObjects(data);
      nv.addGraph(function() {
        var chart = nv.models.lineChart()
                      .margin({left: 100, right:50})  //Adjust chart margins to give the x-axis some breathing room.
                      .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                      .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
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
        var myData = getData(res);   //You need data...

        d3.select('#chart svg')    //Select the &lt;svg&gt; element you want to render the chart in.   
            .datum(myData)         //Populate the &lt;svg&gt; element with chart data...
            .call(chart);          //Finally, render the chart!
    
        //Update the chart when window resizes.
        nv.utils.windowResize(function() { chart.update() });
        return chart;
    });
  });

  function getData(res) {
    var ret = []

    var blood_types = ['O-', 'A-', 'B-', 'AB-', 'O+', 'A+', 'B+', 'AB+'];
    
    for(var i = 0; i < blood_types.length; ++i){
      ret.push({
          values: [],
          key: blood_types[i]
      });
    }

    for(var i = 0; i < res.length; ++i){
      var current = res[i];
      var pos = blood_types.indexOf(current.type);
      if(pos != -1){
        ret[pos].values.push({x:new Date(current.date), y:parseFloat(current.days_remaining)});
      }
    }
    
  
    //Line chart data should be sent as an array of series objects.
    return ret;
  }
});
