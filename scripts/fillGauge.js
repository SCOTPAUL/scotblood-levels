var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = "#FF7777";
config1.textColor = "#FF4444";
config1.waveTextColor = "#FFAAAA";
config1.waveColor = "#f15252";
config1.circleThickness = 0.2;
config1.textVertPosition = 0.2;
config1.waveAnimateTime = 1000;
config1.displayPercent = false;
config1.maxValue = 10;

var vals;

var i = 0;
function getIndex(){
  i = (i + 1) % vals.length;
  return i;
}

function updateGauge(gauge, label){
    var index = getIndex();
    var newVal = vals[index].values.slice(-1)[0].y;
    label.innerHTML = vals[index].key;
    gauge.update(newVal);
}


function startgauge(data){
  vals = data;
  var gauge1 = loadLiquidFillGauge("fillgauge1", vals[0].values.slice(-1)[0].y, config1);
  var label = document.getElementById("gauge1label");

  label.innerHTML = vals[0].key;
  document.getElementById("gauge").onclick = function(){ updateGauge(gauge1, label); };
}
