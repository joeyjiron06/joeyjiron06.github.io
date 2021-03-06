(function() {
  var $leftArrow = $('.project-gallery__arrow--left');
  var $rightArrow = $('.project-gallery__arrow--right');
  var $image = $('.project-gallery__image');
  var numImages = $('.project-gallery__image').length || 0;
  var currentIndex = 0;

  // LEFT ARROW
  $leftArrow.on('click', function() {
    if ( currentIndex === 0 ) {
      showImage(numImages - 1);
    } else {
      showImage(currentIndex - 1);
    }
  });

  // RIGHT ARROW
  $rightArrow.on('click', function() {
    if ( currentIndex === (numImages - 1) ) {
      showImage(0);
    } else {
      showImage(currentIndex + 1);
    }
  });

  // image
  $image.on('click', function() {
    showNextImage();
  });


  function showNextImage() {
    if (currentIndex === numImages - 1) {
      showImage(0);
    } else {
      showImage(currentIndex + 1);
    }
  }

  function showImage(index) {
    var $currentImage = $('[data-img-index='+(currentIndex+1)+']');
    var $imageToShow = $('[data-img-index='+(index+1)+']');

    $currentImage.css('z-index', '0');
    $currentImage.removeClass('project-gallery__image--visible');

    $imageToShow.css('z-index', '5');
    $imageToShow.addClass('project-gallery__image--visible');

    currentIndex = index;
  }

  showImage(0);

}());
