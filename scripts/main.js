---
---

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
      values:[{% for record in data %}{% if record.type == type %}{x:new Date("{{ record.date }}"), y:parseFloat("{{ record.days_remaining }}")},{% endif %}{% endfor %}]
    },
  {% endfor %}
  ]
  /* jshint ignore:end */

  //Line chart data should be sent as an array of series objects.
  return ret;
};

function initGlobalHandlers(data){
  document.getElementById("download-json").onclick = function(){
    this.href = "data:plain/text," + JSON.stringify(data);
  };
}

window.onload = function(){
   var data = getData();
   initGlobalHandlers(data);
   startgraph();
   startgauge(data);
};
