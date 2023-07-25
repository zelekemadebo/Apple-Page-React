// import React from 'react';
import $ from 'jquery'

      $(document).on("click", ".footer-links-wrapper h3", function () {
    if ($(window).width() <= 768) {
          $(this).next("ul").slideToggle()
          $(this).toggleClass("expanded");
    }
    $(window).on("resize", function () {
      window.location.reload();
    });
  })
    
 


