
$(document).ready(function () {
   $(window).scroll(function () {
      let s = $(this).scrollTop();
      let w = $(this).outerWidth();
      let h = $(".content").outerHeight();
      let h_b = $(".parallax").outerHeight();
      let p = s / h * 100;
      let p_b = s / h_b * 30;
      let o = 1 - 1 / 100 * (s / h_b * 100);

      let z_1 = 1 + (w / 10000 * p_b);

      $(".parallax_fog").css("transform", "scale(" + z_1 + ")");
      $(".parallax_fog").css("opacity", o);
      $(".parallax_birds").css("transform", "scale(" + z_1 + ")");
      $(".parallax_birds").css("opacity", o);
      let z_2 = 1 + (2 / 5000000 * p);
      $(".parallax_element_1").css("transform", "scale(" + z_2 + ")");

      let hr = w / 2000 * p_b;
      let z_3 = 1 + (w * 0.000001 * p_b);
      $(".parallax_element_2").css("transform", "translate3d(" + hr * 40 + "px," + hr + "px,0) scale(" + z_3 + ")");

      let hr_2 = w / 2000 * p_b;
      let z_4 = 1 + (w * 0.000005 * p_b);
      $(".parallax_element_3").css("transform", "translate3d(" + -hr_2 * 40 + "px," + hr_2 + "px,0) scale(" + z_4 + ")");

   });
});


