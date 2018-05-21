/**
 * Created by lzz on 2017/10/8.
 */
$(function(){
    $(".ul_1_1").hide();
    $(".ul_1 li").hover(function(){
        $(this).children("ul").show()
    },function(){
        $(this).children("ul").hide()
    });
    $(".aa").hide();
    $(".bannerlist li").hover(function(){
        $(this).children("a").addClass("a1").show();
    },function(){
        $(this).children("a").hide()});
    $(".bb").hide();
    $(".div_6_2 ul li").hover(function(){
        $(this).children("a").addClass("a2").show();
    },function(){
        $(this).children("a").hide()});

    $(window).scroll(function(){
            var i=window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
        var e=window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
        var b=window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
        var h=window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
        var k=window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
        var l=window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
            console.log(i);
            if(i>38){
                $(".div_3 h2").addClass("xialai")
            }
            else{
            $(".div_3 h2").removeClass("xialai")
        }
        if(e>38){
            $(".div_3 p").addClass("shangqu")
        }
        else{
            $(".div_3 p").removeClass("shangqu")
        }
        if(b>445){
            $(".div_5 p").addClass("shangqu1")
        }
        else{
            $(".div_5 p").removeClass("shangqu1")
        }
        if(h>1200){
            $(".div_6 p").addClass("shangqu2")
        }
        else{
            $(".div_6 p").removeClass("shangqu2")
        }
        if(k>1000){
            $(".div_6 h2").addClass("shangqu3")
        }
        else{
            $(".div_6 h2").removeClass("shangqu3")
        }
        if(l>61){
            $("header").addClass("guding").slideDown()
        }else{
            $("header").removeClass("guding")
        }
    });
});
