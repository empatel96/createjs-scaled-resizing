var ratio, windowRatio;
var w = window.innerWidth,
  h = window.innerHeight;
  var scale = w/1024; // w/width

function handleResize(event) {
  ratio = 1024/768; // width/height
  windowRatio = w/h;
  // Layout other assets
  if (windowRatio > ratio) {
    scale = h/768; // h/height
  }
  stage.update();
}
