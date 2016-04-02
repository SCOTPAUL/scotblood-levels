var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = "#C94141";
config1.textColor = "#FF4444";
config1.waveTextColor = "#FFAAAA";
config1.waveColor = "#8A0707";
config1.circleThickness = 0.2;
config1.textVertPosition = 0.2;
config1.waveAnimateTime = 1000;
config1.displayPercent = false;
config1.maxValue = 10;

var vals;

function updateGauge(gauge, index){
    var newVal = vals[index].values.slice(-1)[0].y;
    gauge.update(newVal);
}

function onTabSelect(gauge, tab, index){
    Array.prototype.forEach.call(tab.parentElement.children, function(elem){
        elem.classList.remove("selected");
    });

    tab.className += " selected";

    updateGauge(gauge, index);
}

function initHandlers(gauge){
  var tabs = document.getElementsByClassName("gaugetab");

  Array.prototype.forEach.call(tabs, function(elem, index){
      elem.onclick = function() {
        onTabSelect(gauge, elem, index);
      };
  });
}

function startgauge(data){
  vals = data;
  var gauge1 = loadLiquidFillGauge("fillgauge1", vals[0].values.slice(-1)[0].y, config1);

  initHandlers(gauge1);
}
