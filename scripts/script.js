function menuSlide() {
  console.log("HIHIHI");
  var $toggle = document.getElementById('menu-toggle');
  var $sideMenu = document.getElementById('side-menu');
  var $slidecontent = document.getElementById('slide-content');
  var $navbar = document.getElementById('navbar')

  $toggle.addEventListener('click', function(){
    $sideMenu.classList.toggle("sideMenuToggle");
    $slidecontent.classList.toggle("slideOver");
    $navbar.classList.toggle("nav-slide");

  });
}

function transparentNav(){
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 450px, adds/removes solid class
    if($(this).scrollTop() > 450) {
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });
}

$(document).ready(function() {
  menuSlide();
  transparentNav();
});
