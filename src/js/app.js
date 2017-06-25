var ctx1 = document.getElementById("donut");
var myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
      data: [75, 25]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    circumference: 1*Math.PI
  }
});


var ctx2 = document.getElementById("donut2");
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [50, 50],
        backgroundColor: [
            "#2ecc71",
            "#e74c3c"
      ],
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    circumference: 1*Math.PI
  }
});

var ctx3 = document.getElementById("donut3");
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
      data: [30, 70]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    circumference: 1*Math.PI
  }
});

function showSpeed(data) {
  console.log(data);
  var speed = data.average_speed;
  if (speed !== undefined) {
    var speedText = document.getElementById('speed');
    speedText.innerHTML = speed;
  }
};

gm.info.watchVehicleData(showSpeed, ['average_speed']);
gm.info.getVehicleData(showSpeed, ['average_speed']);