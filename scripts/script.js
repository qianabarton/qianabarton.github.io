var qb = {};

qb.App = (function() {

  var $mobileNav;

  function initApp() {
    fadeInHeader();
    showAllSections();

    navLinkClick();
    navMenuClick();


    transparentNav();

    callToAction();


    project();

    purpleLogo();

  }

  /* ---> FADE IN Functions <-------------------------- */

  function fadeInHeader() {
    // only on desktop
    $(".bg-img").animate({
      'opacity': '1'
    }, 1500);

    $(".header").animate({
      'opacity': '1'
    }, 4000);
  }

  function showAllSections(){
    showSection($("#projects"), $("#projects-content"));
    showSection($("#skills"), $("#skills-content"));
    showSection($("#about"), $("#about-content"));
    showSection($("#contact"), $("#contact-content"));
  }

  function showSection(section, content){
        $(window).scroll(function() {
          if ($(this).scrollTop() > (section.offset().top - 500)) {
           content.animate({
              'opacity': '1'
            }, 1200);
            if(section[0].id == "skills"){
              barChart();
            }
          }
        });
  }

  /* ---> NAVBAR Functions <-------------------------- */

  function navLinkClick() {
    $(".nav-link").click(function() {
      if ($mobileNav) { // close nav menu if on mobile
        slideNavMenu();
      }
    });
    scrollToSection($(".nav-link"));
  }

    function navMenuClick() {
      $("#mobile-nav-toggler").click(function() {
        $mobileNav = true;
        slideMobileNav();
      });

      $(".close").click(function() {
        slideMobileNav();
      });

      $("#slide-content").click(function() {
        if ($("#slide-content").hasClass("slideOver")) {
          slideMobileNav();
        }
      });
    }

    function slideMobileNav() {
        $mobileNav = true;
        $("#slide-menu").toggleClass("slideMenuToggle");
        $("#slide-content").toggleClass("slideOver");
        $(".navbar").toggleClass("nav-slide");
    }


  function transparentNav() {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than x, adds/removes solid class\
      if ($(this).scrollTop() > $(".bg-img").height() - ($(".navbar").height() * 2)) {
        // scrolls to end of header div
        $(".navbar").addClass('solid');
        $(".navbar-brand").addClass('fadeIn');
        $(".desktop-link").addClass('darken-link');
        $(".navbar").removeClass('navbar-dark');
        $(".navbar").addClass('navbar-light');
      } else {
        $(".navbar").removeClass('solid');
        $(".navbar-brand").removeClass('fadeIn');
        $(".desktop-link").removeClass('darken-link');
        $(".navbar").addClass('navbar-dark');
        $(".navbar").removeClass('navbar-light');
      }
    });
  }



  /* ---> SCROLL Functions <-------------------------- */


  function callToAction() {
    scrollToSection($(".cta-button"));
  }

  function scrollToSection(sourceClick) {

    sourceClick.click(function(event) {
      // animate scroll
      $('html, body').animate({
        scrollTop: ($(this.hash).offset().top - 100)
      }, 600);
    });
  }


  /* ---> Project Click Functions <-------------------------- */


  function project() {
    hoverProject($(".planets"), $(".planets-icon"));
    hoverProject($(".rubiks"), $(".rubiks-icon"));
    hoverProject($(".logos"), $(".logos-icon"));

    clickProject($("#planets-info"), $(".planets"));
    clickProject($("#rubiks-info"), $(".rubiks"));
    clickProject($("#logos-info"), $(".logos"));
  }

  function hoverProject(project, icon) {

    $(project).hover(
      function() {
        $(icon).addClass("app-hover");
      },
      function() {
        $(icon).removeClass("app-hover")
      }
    );
  }

  function clickProject(projectInfo, project) {
    $(projectInfo).hide();
    $(project).click(function() {
      checkVisible($(projectInfo));
    });
  }

  function checkVisible(projectInfo) {
    var $visibleProject;

    if ($("#planets-info").is(":visible")) {
      $visibleProject = "planets-info";
    } else if ($("#rubiks-info").is(":visible")) {
      $visibleProject = "rubiks-info";
    } else if ($("#logos-info").is(":visible")) {
      $visibleProject = "logos-info";
    } else {
      $visibleProject = "undefined";
    }

    slideOrHide(projectInfo, $visibleProject);
  }

  function slideOrHide(clickedProject, visibleProject) {

    if (visibleProject == "undefined") { // no element is visible
      $(".work-sample").hide();
      $(".work-sample").fadeIn(1200);
      clickedProject.slideToggle(400);
      visibleProject = clickedProject[0].id;
      $("html, body").animate({ // open clicked element
        scrollTop: (clickedProject.offset().top - 200)
      }, 600);

    } else if (visibleProject == clickedProject[0].id) { // or click X clicked element is already open
      clickedProject.slideToggle(200); // close toggle
      $("html, body").animate({
        scrollTop: ($(".bg-img").height() - $(".navbar").height() - 15)
      }, 600);

    } else { // another element is already visible
      $("#" + visibleProject).hide();
      clickedProject.fadeIn(1000);
      $("html, body").animate({
        scrollTop: (clickedProject.offset().top - 200)
      }, 600);
    }
  }


  /* ---> Helper Functions <-------------------------- */



  function barChart() {
    $('.bar').each(function(i) {
      var $bar = $(this);
      setTimeout(function() {
        $bar.css('width', $bar.attr('data-percent'));
      }, i * 100);
    });
  }

  function purpleLogo() {
    purple = new Image(100, 100);
    purple.src = "images/logo/qb-4-purple-white.png";
    white = new Image(100, 100);
    white.src = "images/logo/qb-4-round-new.png";

    $(".header-logo").hover(
      function() {
        $(".header-logo").addClass("grow");
        // if !mobile do this
        if ($(window).width() > 768) {
          $(".header-logo").attr("src", purple.src);
        }
      },
      function() {
        $(".header-logo").removeClass("grow");
        $(".header-logo").attr("src", white.src);
      }
    );
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
