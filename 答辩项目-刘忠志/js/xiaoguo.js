/**
 * Created by ÁõÖÒÖ¾ on 2017/4/26.
 */
$(function(){
        $(window).scroll(function(){
                var top=$("body").scrollTop();
                console.log(top);
                if(top>877)
                {
                        $(".xuantin").addClass("xuan_fix").slideDown(500);
                }
                else
                {
                        $(".xuantin").removeClass("xuan_fix");
                }
        });

        var o=0;
        $(".k ul li:first").children("a").addClass("white");
        $(".k ul li").click(function(){
                o=$(this).index();
                $(".ka").animate({"marginLeft":o*-1350+"px"},0);
                $(this).children("a").addClass("white");
                $(this).siblings().children("a").removeClass("white");
        });

        $(".dian_1").click(function(){
                $("body").scrollTop(800)
        });
        $(".dian_2").click(function(){
                $("body").scrollTop(2436)

        });
        $(".touzhong li").hover(function(){
           $(this).stop().addClass("bord")
        },function(){
           $(this).stop().removeClass("bord")
        });
        $(".v").hover(function(){
                $(this).attr("src","images/bi_03.gif");
        },function(){
                $(this).attr("src","images/bb.gif");
        });
        $("#gouwu").hide();
        $(".c").hover(function(){
                $("#gouwu").show();
                $(this).attr("src","images/bia_03.gif");
                },function(){
                        $("#gouwu").hide();
                $(this).attr("src","images/cc.gif");
                });
        $(".gouwu").hover(function(){
                $(this).show();
        },function(){
                $(this).hide();
        })
        $(".d").hover(function(){
                $(this).attr("src","images/biac_03.gif");
        },function(){
                $(this).attr("src","images/dd.gif");
        });
        $(window).scroll(function(){
                var top=$("body").scrollTop();
                console.log(top);
                if(top>80)
                {
                        if($(".logo").attr("class")=="logo") {
                                $(".logo").addClass("logo_new");
                                $(".logo").stop().animate({"height":50},300);
                                $(".logo .logonei").stop().animate({"marginTop": -100},300);
                        }
                }
                else
                {

                        $(".logo").removeClass("logo_new");
                        $(".logo").stop().animate({"height": 150},300);
                        $(".logo .logonei").stop().animate({"marginTop": 0},300);
                }
        });
        var path="";
        $(".logonei li").hover(function(){
                 path=$(this).children("a").children("img").attr("src").substr(7,2);
                $(this).children("a").children("img").attr("src","images/"+path+"_1.gif");
        },function(){
                $(this).children("a").children("img").attr("src","images/"+path+".gif");
        });
        $(".batu a").hover(function(){
                $(this).stop().animate({"marginTop":-2});
        },function(){
                $(this).stop().animate({"marginTop":0});

        });
        $(".youss img").hover(function(){
                $(this).attr("src","images/fnexiangkongj.gif")
        },function(){
                $(this).attr("src","images/fenxiang_03.gif")
        });
       $(".bo_li1").click(function(){
               $(".bo_di_1 img").attr("src","images/lunbo_1.gif")
       });
        $(".bo_li2").click(function(){
                $(".bo_di_1 img").attr("src","images/lunbo_2.gif")
        });
        $(".bo_li3").click(function(){
                $(".bo_di_1 img").attr("src","images/lunbo_3.gif")
        });
        $(".bo_li4").click(function(){
                $(".bo_di_1 img").attr("src","images/lunbo_4.gif")
        });
        $(".xia_di>div:not(:first)").hide();
        $(".bo_ul>li").click(function(){
                var i=$(this).index();
                $(".xia_di>div").eq(i).show().siblings().hide();
        })

});


