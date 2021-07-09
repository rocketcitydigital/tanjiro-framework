function supportsVideoType(type) {
  var videoTest;

  // Allow user to create shortcuts, i.e. just "webm"
  var formats = {
    ogg: 'video/ogg; codecs="theora"',
    h264: 'video/mp4; codecs="avc1.42E01E"',
    webm: 'video/webm; codecs="vp8, vorbis"',
    vp9: 'video/webm; codecs="vp9"',
    hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
  };

  if(!videoTest) {
    videoTest = document.createElement('video')
  }

  return videoTest.canPlayType(formats[type] || type);
}

var circleVideo = document.getElementById("circleVideo");
var circleSource = document.getElementById("circleSource");

var circle2Video = document.getElementById("circle2Video");
var circle2Source = document.getElementById("circle2Source");

var comp2Video = document.getElementById("comp2Video");
var comp2Source = document.getElementById("comp2Source");

var fbVideo = document.getElementById("fbVideo");
var fbSource = document.getElementById("fbSource");

var igVideo = document.getElementById("igVideo");
var igSource = document.getElementById("igSource");

var sqVideo = document.getElementById("sqVideo");
var sqSource = document.getElementById("sqSource");

var wideVideo = document.getElementById("wideVideo");
var wideSource = document.getElementById("wideSource");


$(window).on('load', function(){

  var ss = window.innerWidth;

  if(circleVideo){
		var src = circleVideo.getAttribute("data-src");
    circleSource.setAttribute('src', src);
		circleVideo.load();
		circleVideo.play();
	}

  if(circle2Video){
		var src = circle2Video.getAttribute("data-src");
    circle2Source.setAttribute('src', src);
		circle2Video.load();
		circle2Video.play();
	}

  if(comp2Video){
		var src = comp2Video.getAttribute("data-src");
    comp2Source.setAttribute('src', src);
		comp2Video.load();
		comp2Video.play();
	}

  if(wideVideo){
		var src = wideVideo.getAttribute("data-src");
    wideSource.setAttribute('src', src);
		wideVideo.load();
		wideVideo.play();
	}

  if(sqVideo){
		var src = sqVideo.getAttribute("data-src");
    sqSource.setAttribute('src', src);
		sqVideo.load();
		sqVideo.play();
	}

	if(fbVideo){
		var src = fbVideo.getAttribute("data-src");
		if (ss > 600) {
      fbSource.setAttribute('src', src);
  		fbVideo.load();
  		fbVideo.play();
		}
	}

  if(igVideo){
		var src = igVideo.getAttribute("data-src");
		if (ss > 600) {
      igSource.setAttribute('src', src);
  		igVideo.load();
  		igVideo.play();
		}
	}

});
