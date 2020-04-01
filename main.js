//
$($(document).ready(function() {

  var dropMenu = $(".mainMenuDx ul li a");
  var menuHamburger = $ ("#hamburgerMenu");
  var closeIcon = $ (".close");
  var hamburgerIcon = $ (".iconHamburgerMenu");

  var elementoMostrato;

  dropMenu.click(
    function() {

      if (elementoMostrato != null) {

        elementoMostrato.toggle();
        elementoMostrato = null;
      }
      elementoMostrato = $(this).siblings("div");
      $(this).siblings("div").toggle();
    }
  );

  // $(".mainMenuDx ul li").mouseenter(
  //   function(){
  //     $(".mainMenuDx ul li").children("div").hide();
  //     $(this).children("div").show();
  //   }
  // )
  hamburgerIcon.click(
    function(){
      hamburgerIcon.addClass('iconHamburgerMenuHide');
      $(".menuTop").addClass('menuTopHide');
      menuHamburger.show();
      $(".mainMenuSx").addClass('mainMenuSxHide');
    }
  )

















})
);
