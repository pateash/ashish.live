
//TODO: why icons/images not showing when we navigate to other route and come back
//binding event on button clicks so we do not get problem

$(document).on('ready click',function(evt){
    evt.stopPropagation();
    document.addEventListener("touchstart",function(){},!0);
    $(".fixed-single-content .items").theiaStickySidebar({
        additionalMarginTop: 30
    });
    $(window).resize(function(){
        if ($(window).width() < 992) {
            $("single-project").removeClass("fixed-single-content");
        }
    });

    $(window).load(function(){
        $(".masonry").isotope({
            itemSelector: ".section"
        });
        $(function() {
            var t = $(".masonry").isotope({
                itemSelector: ".item"
            });
            i = {
                numberGreaterThan50: function() {
                    var t = $(this).find(".number").text();
                    return parseInt(t, 10) > 50
                },
                ium: function() {
                    var t = $(this).find(".name").text();
                    return t.match(/ium$/)
                }
            };
            $("#filters").on("click", "li", function() {
                var n = $(this).attr("data-filter");
                n = i[n] || n, t.isotope({
                    filter: n
                })
            }), $(".filters").each(function(t, i) {
                var n = $(i);
                n.on("click", "li", function() {
                    n.find(".active").removeClass("active"), $(this).addClass("active")
                })
            })
        })
    })

    $("#owl-toolbox").owlCarousel({
        items : 5, //items to be seen once, others will be seen using courosel
        autoPlay : true,
        navigation : false,
        pagination : false,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate : 50,
        responsiveBaseWidth: window,
        baseClass : "owl-carousel",
        theme : "owl-theme",
        lazyLoad : true,
        lazyFollow : true,
        lazyEffect : "fade"
    });
    //added by ashishpatel0720
    $("#owl-social-icons").owlCarousel({
        items : 5,
        autoPlay : true,
        navigation : false,
        pagination : false,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        baseClass : "owl-carousel",
        theme : "owl-theme",
        lazyLoad : true,
        lazyFollow : true,
        lazyEffect : "fade"
    });

    $(window).load(function(){
        var $menu = $('header ul'),
            $menuTrigger = $('.menu-item-has-children > a');
        $menuTrigger.on("click",function(e) {
            e.stopPropagation();
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass("active").next('ul').slideToggle("fast");
        });
    });
    console.clear();
    $("#menu").slicknav();

    // TODO: fix error -> nav do not automatically fixed
    // target=evt.target;
    // ts=$('a[role="menuitem"]');
    // var flag=false;
    // for(t in ts) {
    //     console.error("targets-> " + t);
    //     if (t == target) {
    //         flag = true;
    //         break;
    //     }
    // }
    // if(flag)
    // $(".slicknav_icon-bar").click();
// else console.error("target-"+target),console.error("targets-"+$('a[role="menuitem"]'));



});
