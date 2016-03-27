---
---

// Placeholder from http://nvd3.org/examples/line.html
$(document).ready(startgraph());


function startgraph(){
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
      var myData = getData();    //You need data...

      d3.select('#chart svg')    //Select the &lt;svg&gt; element you want to render the chart in.
           .datum(myData)          //Populate the &lt;svg&gt; element with chart data...
           .call(chart);           //Finally, render the chart!

      //Update the chart when window resizes.
      nv.utils.windowResize(function() { chart.update(); });
      return chart;
  });
}


function getData() {
  var ret = [];
  var i;

  /* jshint ignore:start */
  {% assign blood_types = "O-,A-,B-,AB-,O+,A+,B+,AB+" | split:"," %}
  {% assign stats_len = site.data.blood_stats | size %}
  {% assign num_types = blood_types | size %}
  {% assign data = site.data.blood_stats %}

  var ret = [
  {% for type in blood_types %}
    {
      key: "{{ type }}",
      values:[
        {% for record in data %}
          {% if record.type == type %}
            {x:new Date("{{ record.date }}"), y:parseFloat("{{ record.days_remaining }}")},
          {% endif %}
        {% endfor %}
      ],
    },
  {% endfor %}
  ]
  /* jshint ignore:end */


  //Line chart data should be sent as an array of series objects.
  return ret;
}
