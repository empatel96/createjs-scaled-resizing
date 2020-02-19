var ratio, windowRatio;
var w = window.innerWidth,
  h = window.innerHeight;
  var scale = w/1024;
function handleResize(event) {
  ratio = 1024/768;
  windowRatio = w/h;
  // Layout other assets
  if (windowRatio > ratio) {
    scale = h/768;
  }
  stage.update();
}
