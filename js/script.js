var video = document.querySelector("#videoElement");


function start(e){
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: { width: 480, height:600, framerate: 15 }})
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
}

function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }

// getUserMedia ({ video: { width: 1080, framerate: 15 })