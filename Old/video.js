function(){

var video= document.getElementById('video'),
    vendorURL= window.URl || window.webkitURL;

  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


  // Capture video
  navigator.getMedia({
    video: true,
    audio: false

  },function(stream){
    video.src= vendorURL.createObjectURl(stream);
    video.play();

  },function (error){
//Error occured

  });



})();
