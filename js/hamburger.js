$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.btn-menu-nav').toggleClass('btn-menu-nav_active');
  $('.btn-menu__link').toggleClass('btn-menu__link_active');
});