
(function ($) {
  Drupal.behaviors.myToggle = {
    attach: function(context, settings) {
      
        // var $body = $('#block-trialobjectivesinstructions');
        // $($body).hide();
        $('#region-help').hide();
        
      $('#btn-help, #user-menu .help', context).css("cursor","pointer").click(function() {
        $(this).toggleClass('active');
        
                event.preventDefault();
         
         $('#region-help').toggleClass('active').toggle('500');
        // $(this).parent().toggleClass('active');
        // $($body).toggle('slow');
      });
     
      var theHidden;
      var myFeatured;
      $('#block-reboot-content .view-duplicated .view-content > div').each(function(index, value){
        
        myFeatured = theHidden;
        theHidden = $(this)[0].classList[0];
        
        if(theHidden == myFeatured){ 
          $(this).hide();	
        }
      });
      
    }
  };
  Drupal.behaviors.myMenus = {
    attach: function(context, settings) {
      
      $( "#tabs" ).tabs({
        collapsible:true,
        //  active: false
        
      });
     
        
      

     

      }
    
  };
})(jQuery);