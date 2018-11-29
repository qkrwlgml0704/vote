
    $(function () {
        $('.banner1 ul li a').click(function (e) {
          e.preventDefault();
          var tg = $(this).attr('href');
          $('.content > div').stop().hide();
          $(tg).stop().show();
        });
      });
  
      $(function () {
        $('.banner2 ul li a').click(function (e) {
          e.preventDefault();
          var tg = $(this).attr('href');
          $('.content > div').stop().hide();
          $(tg).stop().show();
        });
      });
  
      $(function () {
        $('.banner1 ul li').click(function () {
          $('li').removeClass('on');
          $(this).addClass('on');
        });
      });
  
      $(function () {
        $('.banner2 ul li').click(function () {
          $('li').removeClass('on');
          $(this).addClass('on');
        });
      });
  
      $(function () {
        $('.select ul li a').click(function (e) {
          e.preventDefault();
          var tg = $(this).attr('href');
          $('.choice').stop().fadeOut();
          $(tg).stop().fadeIn();
        });
      });
  
      $(function () {
        $('.select li').click(function () {
          $('.select li').removeClass('mo');
          $(this).addClass('mo');
        });
      });
  
      function pops() {
  
  
        $(".modal").addClass("active");
  
        $(".modal h1").on("click", function () {
          $(".modal").removeClass("active");
        });
      }