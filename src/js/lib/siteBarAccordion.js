var siteBarAccordion = function() {

  $('.js-accordion').click(function() {
    $(this).next().slideToggle();
  });;

};


module.exports = siteBarAccordion;
