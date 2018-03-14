var $mobileNav = false;
var $visibleApp;

function menuSlide() {


  $("#menu-toggle").click(function() {
    $mobileNav = true;
    slideNavMenu();
  });
}

function slideNavMenu(){
  var $sideMenu = document.getElementById('side-menu');
  var $slidecontent = document.getElementById('slide-content');
  var $navbar = document.getElementById('navbar')

  $sideMenu.classList.toggle("sideMenuToggle");
  $slidecontent.classList.toggle("slideOver");
  $navbar.classList.toggle("nav-slide");
}

function transparentNav() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 450px, adds/removes solid class
    if ($(this).scrollTop() > 350) {
      $('.navbar').addClass('solid');
      $('.navbar-brand').addClass('shrink');

    } else {
      $('.navbar').removeClass('solid');
      $('.navbar-brand').removeClass('shrink');
    }
  });
}


function openAppInfo() {

  $("#planets-info").hide();
  $("#rubiks-info").hide();
  $("#logos-info").hide();

  $("#planets-toggle").click(function() {
    checkVisible($("#planets-info"));
  });
  $("#rubiks-toggle").click(function() {
    checkVisible($("#rubiks-info"));
  });
  $("#logos-toggle").click(function() {
    checkVisible($("#logos-info"));
  });
}

function slideOrHide(clickedApp) {

  if ($visibleApp == "undefined") { // no element is visible
    console.log("no visible");
    workSample();
    clickedApp.slideToggle(400);

    // open clicked element
    $visibleApp = clickedApp[0].id;
    $("html, body").animate({
      scrollTop: (clickedApp.offset().top - 150)
    }, 600);

  } else if ($visibleApp == clickedApp[0].id) { // clicked element is already open
    clickedApp.slideToggle(200);
    $("html, body").animate({
      scrollTop: ($("#planets-toggle").offset().top - 300)
    }, 400);

  } else { // another element is already visible
    $("#" + $visibleApp).hide();
    clickedApp.fadeIn(1000);

    $("html, body").animate({
      scrollTop: (clickedApp.offset().top - 150)
    }, 600);
  }

}

function workSample() {
  $(".work-sample").hide();
  $(".work-sample").fadeIn(1200);
}

function checkVisible(clickedApp) {

  if ($("#planets-info").is(":visible")) {
    $visibleApp = "planets-info";
  } else if ($("#rubiks-info").is(":visible")) {
    $visibleApp = "rubiks-info";
  } else if ($("#logos-info").is(":visible")) {
    $visibleApp = "logos-info";
  } else {
    $visibleApp = "undefined";
  }

  slideOrHide(clickedApp);
}

function fadeInDivs() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > ($("#projects").offset().top - 450)) {
      $("#projects-content").animate({
        'opacity': '1'
      }, 1200);
    }

    if ($(this).scrollTop() > ($("#skills").offset().top - 500)) {
      $("#skills-content").animate({
        'opacity': '1'
      }, 1200);
    }

    if ($(this).scrollTop() > ($("#about-me").offset().top - 550)) {
      $("#about-me-content").animate({
        'opacity': '1'
      }, 1200);
    }

    if ($(this).scrollTop() > ($("#contact").offset().top - 550)) {
      $("#contact-content").animate({
        'opacity': '1'
      }, 1200);
    }

  });
}

function navClick() {
  $(".nav-link").click(function(e) {
    console.log("NAV CLICK")
    // prevent default anchor click behavior
    e.preventDefault();

    // close slider
    if($mobileNav){
      slideNavMenu();
    }

    // animate scroll
 $('html, body').animate({
     scrollTop: ($(this.hash).offset().top - 75)}, 600, function(){
     // when done, add hash to url
     window.location.hash = this.hash;
   });
  });
}



$(document).ready(function() {
  fadeInDivs();
  menuSlide();
  transparentNav();
  openAppInfo();
  navClick();
});
