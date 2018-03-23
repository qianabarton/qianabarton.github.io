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
        // run spinner

        // check if page is loaded
        $(".bg-img").animate({
            'opacity': '1'
        }, 2000);

        setTimeout(function() {
            $(".navbar").animate({
                'opacity': '1'
            }, 1000);
        }, 1700);

        setTimeout(function() {
            $(".header").animate({
                'opacity': '1'
            }, 2000);
        }, 1000);
    }


    function showAllSections() {
        showSection($("#projects"), $("#projects-content"), 500);
        showSection($("#skills"), $("#skills-content"), 850);
        showSection($("#about"), $("#about-content"), 500);
        showSection($("#contact"), $("#contact-content"), 600);

        barChart();
    }

    function showSection(section, content, offset) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > (section.offset().top - offset)) {
                content.animate({
                    'opacity': '1'
                }, 1200);
            }
        });
    }

    /* ---> NAVBAR Functions <-------------------------- */

    function navLinkClick() {
        $(".nav-link").click(function() {
            if ($(window).width() <= 768) {
                // close nav menu if on mobile
                slideMobileNav();
            }
        });
        scrollToSection($(".nav-link"));
    }

    function navMenuClick() {
        $("#mobile-nav-toggler").click(function() {
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
        $("#slide-menu").toggleClass("slideMenuToggle");
        $("#slide-content").toggleClass("slideOver");
        $(".navbar").toggleClass("nav-slide");
    }


    function transparentNav() {
        // Transition effect for navbar
        $(window).scroll(function() {
            // checks if window is scrolled more than x, adds/removes solid class\
            //
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
                scrollTop: ($(this.hash).offset().top)
            }, 600);
        });
    }

    /* ---> Project Click Functions <-------------------------- */

    function project() {
        hoverProject($(".planets"), $(".planets-icon"));
        hoverProject($(".rubiks"), $(".rubiks-icon"));
        hoverProject($(".logos"), $(".logos-icon"));
        hoverProject($(".design"), $(".design-icon"));

        clickProject($("#planets-info"), $(".planets"));
        clickProject($("#rubiks-info"), $(".rubiks"));
        clickProject($("#logos-info"), $(".logos"));
        clickProject($("#design-info"), $(".design"));

        $(".info-close").click(function() {
            slideClose(checkVisible());
        });

    }

    function hoverProject(project, icon) {
        $(project).hover(
            function() {
                $(icon).addClass("app-hover");
            },
            function() {
                $(icon).removeClass("app-hover");
            }
        );
    }

    function clickProject(projectInfo, project) {

        $(projectInfo).hide();
        $(project).click(function() {
            checkVisible($(projectInfo));
            slideOrHide(projectInfo, checkVisible());
        });

    }

    function checkVisible() {
        var visibleProject;

        if ($("#planets-info").is(":visible")) {
            visibleProject = "planets-info";
        } else if ($("#rubiks-info").is(":visible")) {
            visibleProject = "rubiks-info";
        } else if ($("#logos-info").is(":visible")) {
            visibleProject = "logos-info";
        } else if ($("#design-info").is(":visible")) {
            visibleProject = "design-info";
        } else {
            visibleProject = "undefined";
        }
        return visibleProject;
    }

    function slideOrHide(clickedProject, visibleProject) {

        if (visibleProject == "undefined") { // no element is visible
            $(".work-sample").hide();
            $(".work-sample").fadeIn(1200);
            clickedProject.slideToggle(400);
            visibleProject = clickedProject[0].id;

            $("html, body").animate({ // open clicked element
                scrollTop: (getY(clickedProject))
            }, 600);

        } else if (visibleProject == clickedProject[0].id) { // or click X clicked element is already open
            slideClose(clickedProject[0].id);
        } else { // another element is already visible
            $("#" + visibleProject).hide();
            clickedProject.fadeIn(1000);
            $("html, body").animate({
                scrollTop: (getY(clickedProject))
            }, 600);
        }
    }

    function getY(project) {
        if ($(window).width() < 768) {
            return project.offset().top - 40;
        } else {
            return project.offset().top - 80;
        }
    }

    function slideClose(project) {
        var projectId = project.substring(0, (project.length - 5));
        console.log("proj = " + projectId);

        var projectLocation = $("." + projectId).parent().offset().top;
        $("#" + project).slideToggle(200);
        $("html, body").animate({
            scrollTop: (projectLocation - $(".navbar").height() - 20)
        }, 600);
    }

    /* ---> Helper Functions <-------------------------- */

    function barChart() {

        $(window).scroll(function() {
            var start = $("#skills").offset().top - 650;
            var stop = $("#about").offset().top - 500;
            if ($(window).scrollTop() >= start && $(window).scrollTop() <= stop) {
                $('.bar').each(function(i) {
                    var $bar = $(this);
                    setTimeout(function() {
                        $bar.css('width', $bar.attr('data-percent'));
                        $bar.css('transition', 'width 1s');
                    }, i * 100);
                });
            } else {
                $('.bar').each(function(i) {
                    var $bar = $(this);
                    setTimeout(function() {
                        $bar.css('width', 0);
                        $bar.css('transition', 'width 0.2s');
                    }, i * 100);
                });
            }
        });
    }

    function purpleLogo() {
        var purple = new Image(100, 100);
        purple.src = "images/logo/qb-4-purple-white.png";
        //var white = new Image(100, 100);
        //white.src = "images/logo/qb-4-round-new.png";
        if ($(window).width() > 768) {
            //$(".header-logo").attr("src", purple.src);
        }

        $(".header-logo").hover(
            function() {
                //$(".header-logo").addClass("grow");
                // if !mobile do this
                if ($(window).width() > 768) {
                    //  $(".header-logo").addClass("grow");
                    //  $(".header-logo").attr("src", purple.src);
                }
            },
            function() {
                //  $(".header-logo").removeClass("grow");
                //  $(".header-logo").attr("src", white.src);
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