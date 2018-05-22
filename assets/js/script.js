$(document).ready(function() {
  $('.menu-link').click(function(e) {
    e.preventDefault();
    $('.home-wrapper').addClass('post-intro');
    let href = e.target.pathname;
    console.log(href);
    $.get(href, function( response ) {

      $('.main-container').replaceWith($(response).find('.main-container'));
      window.history.pushState("", "", href);
      let classes = $(e.target).attr('class');
      $('.active').removeClass('active');
      $(e.target).addClass('active');




    })
  });
});
