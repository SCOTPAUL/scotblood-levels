---
---

// Placeholder from http://nvd3.org/examples/line.html
function startgraph(){
   nv.addGraph(function() {
      var chart = nv.models.lineWithFocusChart()
                      .margin({left: 100, right:50})  //Adjust chart margins to give the x-axis some breathing room.
                      .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                      .showLegend(true)        //Show the legend, allowing users to turn on/off line series.
                      .showYAxis(true)        //Show the y-axis
                      .showXAxis(true)        //Show the x-axis
      ;

      chart.xAxis     //Chart x-axis settings
           .tickFormat(function(d) { return d3.time.format('%Y-%m-%d')(new Date(d)); });

      chart.x2Axis     //Chart x-axis settings
           .tickFormat(function(d) { return d3.time.format('%Y-%m-%d')(new Date(d)); });

      chart.yAxis     //chart y-axis settings
           .axisLabel('days remaining')
           .tickFormat(d3.format('.1f'));

      chart.y2Axis     //chart y-axis settings
           .tickFormat(d3.format('.1f'));

      function svg_height() {
        return parseFloat(getComputedStyle(document.getElementById("chart")).height);
      }

      chart.focusHeight(0.2 * svg_height());

      /* Done setting the chart up? Time to render it!*/
      var myData = getData();    //You need data...

      d3.select('#chart svg')    //Select the &lt;svg&gt; element you want to render the chart in.
           .datum(myData)          //Populate the &lt;svg&gt; element with chart data...
           .call(chart);           //Finally, render the chart!

      //Update the chart when window resizes.
      nv.utils.windowResize(function() {
         chart.focusHeight(0.2 * svg_height());
         chart.update(); });
      return chart;
  });
};
