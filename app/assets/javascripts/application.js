//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require global/toast

const HOVER_CLASS = 'hover';

function previous() {
  if (gon.index === 0) {
    gon.index = gon.images.length - 1;
  } else {
    gon.index -= 1;
  }
  updateImage();
};

function next() {
  if (gon.index === (gon.images.length - 1)) {
    gon.index = 0;
  } else {
    gon.index += 1;
  }
  updateImage();
};

function updateImage() {
  var new_image = gon.images[gon.index];
  $('img#animal').attr('src', new_image);
  $('div#index').text(gon.index + 1);
};

$(function ready() {
  // Setup the hover for the arrows
  $('div.arrow').hover(function mouseenter() {
    $(this).addClass(HOVER_CLASS);
  }, function mouseleave() {
    $(this).removeClass(HOVER_CLASS);
  });

  gon.index = 0;
  updateImage();
  $('div#image').css('display', 'block');
  $('div#info').css('display', 'flex');

  // Setup the click handlers for the arrows
  $('div#left.arrow').click(previous);
  $('div#right.arrow').click(next);

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        previous();
        break;
      case 39: // right
        next();
        break;
      default: return;
    }
    e.preventDefault();
  });
});

