function menuSlide() {
  var $menutoggle = document.getElementById('menu-toggle');
  var $sideMenu = document.getElementById('side-menu');
  var $slidecontent = document.getElementById('slide-content');
  var $navbar = document.getElementById('navbar')

  $("#menu-toggle").click (function(){
    $sideMenu.classList.toggle("sideMenuToggle");
    $slidecontent.classList.toggle("slideOver");
    $navbar.classList.toggle("nav-slide");
  });
}

function transparentNav(){
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 450px, adds/removes solid class
    if($(this).scrollTop() > 350) {
        $('.navbar').addClass('solid');
        $('.navbar-brand').addClass('shrink');

    } else {
      $('.navbar').removeClass('solid');
      $('.navbar-brand').removeClass('shrink');
    }
  });
}


var $visibleApp;

function openAppInfo(){

  $("#planets-info").hide();
  $("#rubiks-info").hide();
  $("#logos-info").hide();

  $("#planets-toggle").click(function(){
    checkVisible($("#planets-info"));
  });

  $("#rubiks-toggle").click(function(){
    checkVisible($("#rubiks-info"));
  });

  $("#logos-toggle").click(function(){
    checkVisible($("#logos-info"));
  });

}

function slideOrHide(clickedApp){

  if($visibleApp == "undefined"){     // no element is visible
    console.log("no visible");
    workSample();
    clickedApp.slideToggle(400);

    // open clicked element
    $visibleApp = clickedApp[0].id;
    $("html, body").animate({ scrollTop: (clickedApp.offset().top - 150) }, 600);

  } else if($visibleApp == clickedApp[0].id){ // clicked element is already open
    clickedApp.slideToggle(200);
    $("html, body").animate({ scrollTop: ($("#planets-toggle").offset().top - 300)}, 400);

  } else { // another element is already visible
    $("#" + $visibleApp).hide();
    clickedApp.fadeIn(1000);
    console.log("OFFSET! =  " + (clickedApp.offset().top - 150));

    $("html, body").animate({ scrollTop: (clickedApp.offset().top - 150) }, 600);
  }

}

function workSample(){
  console.log("WORKS");
  $(".work-sample").hide();
  $(".work-sample").fadeIn(1200);
}

function checkVisible(clickedApp){

  if($("#planets-info").is(":visible")){
    $visibleApp = "planets-info";
  } else if($("#rubiks-info").is(":visible")){
    $visibleApp = "rubiks-info";
  } else if($("#logos-info").is(":visible")){
    $visibleApp = "logos-info";
  }  else {
    $visibleApp = "undefined";
  }

  slideOrHide(clickedApp);
}

function fadeInDivs(){

  $(window).scroll(function() {
    if($(this).scrollTop() > 400) {
      $("#projects-content").animate({'opacity':'1'},1200);
    }

    if($(this).scrollTop() > 900) {
      $("#skills-content").animate({'opacity':'1'},1200);
    }

    if($(this).scrollTop() > 1300) {
      $("#about-me-content").animate({'opacity':'1'},1200);
    }

    if($(this).scrollTop() > 1700) {
      $("#contact-content").animate({'opacity':'1'},1200);
    }

  });
}



$(document).ready(function() {
  fadeInDivs();
  menuSlide();
  transparentNav();
  openAppInfo();

});
