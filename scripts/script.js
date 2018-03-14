var qb = {};


qb.App = (function() {

  var $mobileNav;
  var $visibleApp;

  function initApp() {
    //fadeInHeader();
    fadeInDivs();
    menuSlide();
    transparentNav();
    openAppInfo();
    navClick();
    callToAction();
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
      if ($(this).scrollTop() > ($("#projects").offset().top - 550)) {
        $("#projects-content").animate({
          'opacity': '1'
        }, 1200);
      }

      if ($(this).scrollTop() > ($("#skills").offset().top - 500)) {
        $("#skills-content").animate({
          'opacity': '1'
        }, 1200);
        $('.skillBars').addClass('enabled');
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
  }

  function transparentNav() {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than x, adds/removes solid class
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



  function navClick() {

    $(".nav-link").click(function() {
      if ($mobileNav) { // close nav menu if on mobile
        slideNavMenu();
      }
    });

    scrollToSection($(".nav-link"));
  }

  function callToAction() {
    console.log("CATA");
    scrollToSection($(".cta-button"));
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
        scrollTop: (clickedApp.offset().top - 150)
      }, 600);

    } else if ($visibleApp == clickedApp[0].id) { // clicked element is already open
      clickedApp.slideToggle(200);
      $("html, body").animate({
        scrollTop: ($("#rubiks-toggle").offset().top - 300)
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

  function scrollToSection(sourceClick) {

    sourceClick.click(function(event) {

      // prevent default anchor click behavior
      event.preventDefault();

      // animate scroll
      $('html, body').animate({
        scrollTop: ($(this.hash).offset().top - 75)
      }, 600, function() {
        // when done, add hash to url
        window.location.hash = this.hash;
      });
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
