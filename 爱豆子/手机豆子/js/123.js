
  $(function(){
      $(".zuo").click(function () {
          $(".div_4_1").stop().animate({"marginLeft": "-3.74rem"}, 500, function(){
              $(".div_4_1 img:last").after($(".div_4_1 img:first"));
          $(".div_4_1").css("marginLeft", "0");
      });
      });
      $(".you").click(function () {
          $(".div_4_1 img:first").before($(".div_4_1 img:last"));
          $(".div_4_1").css("marginLeft", "-3.74rem");
          $(".div_4_1").stop().animate({"marginLeft": "0"}, 500);
      });
    $(window).scroll(function(){
      var i=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      var a=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      var b=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      var c=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      var d=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      var e=window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
        console.log(i);
        if(i>57){
            $(".div_1").addClass("xiahua");
        }
        else{
            $(".div_1").removeClass("xiahua");
        }
      if(a>270){
        $(".div_3 h3").addClass("xialai");
      }
      else{$(".div_3 h3").removeClass("xialai")}
      if(b>270){
        $("#im").addClass("xialai");
      }
      else{$("#im").removeClass("xialai")}
      if(c>590){
        $(".div_5 h2").addClass("xialai");
      }
      else{$(".div_5 h2").removeClass("xialai")}
      if(d>1057){
        $(".div_5 p").addClass("xialai");
      }
      else{$(".div_5 p").removeClass("xialai")}
      if(e>1555){
        $(".div_7 h2,.div_7 p").addClass("xialai");
      }
      else{$(".div_7 h2,.div_7 p").removeClass("xialai")}
    });
});
