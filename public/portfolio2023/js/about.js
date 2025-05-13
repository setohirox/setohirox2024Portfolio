//rocket
$(document).ready(function () {
  var path = document.getElementById('motionPath');
  var pathLength = path.getTotalLength();

  var movingImage = document.getElementById('movingImage');
  var pos = path.getPointAtLength(0);

  movingImage.setAttribute('x', pos.x - (movingImage.getAttribute('width') / 2));
  movingImage.setAttribute('y', pos.y - (movingImage.getAttribute('height') / 2));

  function updateImagePosition() {
    var scrollPosition = $(window).scrollTop();
    var scrollPercentage = 1 - (scrollPosition / ($(document).height() - $(window).height()));
    var targetPosition = pathLength * scrollPercentage;

    pos = path.getPointAtLength(targetPosition);
    movingImage.setAttribute('x', pos.x - (movingImage.getAttribute('width') / 2));
    movingImage.setAttribute('y', pos.y - (movingImage.getAttribute('height') / 2));

    var nextPos = path.getPointAtLength(targetPosition + 1);
    var angle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * 180 / Math.PI;
    angle -= 270;
    movingImage.setAttribute('transform', 'rotate(' + angle + ',' + pos.x + ',' + pos.y + ')');
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = -targetPosition;
  }

  $(window).scroll(function () {
    updateImagePosition();
  });
  updateImagePosition();
});

//fadein
$(function () {
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});