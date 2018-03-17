var qb = {};


qb.App = (function() {

  var $mobileNav;
  var $visibleApp;

  function initApp() {
    fadeInHeader();
    fadeInDivs();
    menuSlide();
    transparentNav();
    openAppInfo();
    navClick();
    callToAction();
    purpleLogo();
  }

  /* ---> Event Functions <-------------------------- */

  function fadeInHeader() {

    $(".bg-img").animate({
      'opacity': '1'
    }, 1500);

    $(".header").animate({
      'opacity': '1'
    }, 4000);

  }

  function fadeInDivs() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > ($("#projects").offset().top - 540)) {
        $("#projects-content").animate({
          'opacity': '1'
        }, 1200);
      }

      if ($(this).scrollTop() > ($("#skills").offset().top - 500)) {
        $("#skills-content").animate({
          'opacity': '1'
        }, 1200);
        barChart();
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

  function menuSlide() {
    $("#menu-toggle").click(function() {
      $mobileNav = true;
      slideNavMenu();
    });

    $(".close").click(function() {
      slideNavMenu();
    });

    $(".page-content").click(function(){

      if($("#slide-content").hasClass("slideOver")){
        slideNavMenu();
      }

    });
  }

  function transparentNav() {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than x, adds/removes solid class
      if ($(this).scrollTop() > 450) {
        $('.navbar').addClass('solid');
        $(".navbar-brand").addClass('navbar-fadeIn');
      } else {
        $('.navbar').removeClass('solid');
        $(".navbar-brand").removeClass('navbar-fadeIn');

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

  function navClick() {

    $(".nav-link").click(function() {
      if ($mobileNav) { // close nav menu if on mobile
        slideNavMenu();
      }
    });

    scrollToSection($(".nav-link"));
  }

  function callToAction() {
    scrollToSection($(".cta-button"));
  }

  function barChart() {

      $('.bar').each(function (i) {
          var $bar = $(this);
          setTimeout(function () {
              $bar.css('width', $bar.attr('data-percent'));
          }, i * 100);
      });
  }

  function purpleLogo(){
    purple = new Image(100,100);
    purple.src = "images/logo/qb-4-purple.png";
    white = new Image(100,100);
    white.src = "images/logo/qb-4-round-new.png";

    $(".header-logo").hover(
      function(){
      $(".header-logo").addClass("grow");
      // if !mobile do this
      if ($(window).width() > 768){
        $(".header-logo").attr("src", purple.src);
      }
      },
      function(){
        $(".header-logo").removeClass("grow");
      $(".header-logo").attr("src", white.src);
      }
  );
  //$("#pic1").attr("src", searchPic.src);

  }


  /* ---> Helper Functions <-------------------------- */

  function slideNavMenu() {
    var $sideMenu = document.getElementById('side-menu');
    var $slidecontent = document.getElementById('slide-content');
    var $navbar = document.getElementById('navbar')

    $sideMenu.classList.toggle("sideMenuToggle");
    $slidecontent.classList.toggle("slideOver");
    $navbar.classList.toggle("nav-slide");
  }

  function slideOrHide(clickedApp) {

    if ($visibleApp == "undefined") { // no element is visible
      console.log("no visible");
      workSample();
      clickedApp.slideToggle(400);

      // open clicked element
      $visibleApp = clickedApp[0].id;
      $("html, body").animate({
        scrollTop: (clickedApp.offset().top - 200)
      }, 600);

    } else if ($visibleApp == clickedApp[0].id) { // clicked element is already open
      clickedApp.slideToggle(200);
      $("html, body").animate({
        scrollTop: ($("#rubiks-toggle").offset().top - 350)
      }, 600);

    } else { // another element is already visible
      $("#" + $visibleApp).hide();
      clickedApp.fadeIn(1000);

      $("html, body").animate({
        scrollTop: (clickedApp.offset().top - 200)
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

  function scrollToSection(sourceClick) {

    sourceClick.click(function(event) {
      // animate scroll
      $('html, body').animate({
        scrollTop: ($(this.hash).offset().top - 100)
      }, 600
    );
    });
  }

  /* ------------------------------------------------- */

  return {
    init: function() {
      initApp();
    }
  }

})();


$(document).ready(function($) {
  new qb.App.init();
});
