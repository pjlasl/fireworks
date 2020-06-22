
// To start we will create 2 variables:


function generateFireworks() {

  var flight = 1;
  var explosions = 1
  var colors = [1973019,11743532,3887386,5320730,2437522,8073150,2651799,11250603,4408131,14188952,4312372,14602026,6719955,12801229,15435844,15790320];
  var explosionArray = '';
  var amount = 64;
  
  // Flight Duration/Height
  flight = getRandomInt(3) + 1;

  //Generates the Explosions  
  explosions = getRandomInt(3) + 1;

  document.getElementById('flight-duration').value = flight;
  document.getElementById('explosions').value = explosions;

  for (var i=1; i<=explosions; i=i+1) {
    
    var type = getRandomInt(5);
    var flicker = getRandomInt(2);
    var trail = getRandomInt(2);
    var color1Count = getRandomInt(3) + 1;
    var color2Count = getRandomInt(3) + 1;
    var color1 = '';
    var color2 = '';
      
    for (var j=0; j<=color1Count - 1; j++) {
      var colorIndex = getRandomInt(16);
          if (color1.length == 0) {
            color1 = 'I;' + colors[colorIndex];
          } else {
            color1 = color1 +  "," + colors[colorIndex];
          }
        
    }
      
    for (var k=0; k<=color2Count - 1; k++) {
      var colorIndex = getRandomInt(16);
        if (color2.length == 0) {
          color2 = 'I;' + colors[colorIndex];
        } else {
          color2 = color2 +  "," + colors[colorIndex];
        }

        console.log(colors[colorIndex])
    }

    if (explosionArray.length === 0) {
        explosionArray = "{Type: " + type + ", Flicker: " + flicker + ", Trail: " + trail + ",Colors:[" + color1 + "],FadeColors:[" + color2 + "]}";
      } else {
        explosionArray = explosionArray + ',' + "{Type: " + type + ", Flicker: " + flicker + ", Trail: " + trail + ",Colors:[" + color1 + "],FadeColors:[" + color2 + "]}";
      }
  }

  var fireworks = "/give @p firework_rocket{Fireworks:{Flight:" + flight + ",Explosions:[" + explosionArray + "]}} " + amount;

  var div = document.getElementById('fireworks');
  div.innerHTML = '';
  div.innerHTML = fireworks + '<br>';

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}