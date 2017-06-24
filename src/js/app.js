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