window.onload=function(){
    var attractVideo=document.getElementById("video_attract");

        function playAttract()
          {
          attractVideo.currentTime = 0;
          attractVideo.play(); 
          } 

        function pauseAttract()
          { 
          attractVideo.pause(); 
          }

        /* playAttract(); */

        $leave_attract = jQuery( "#leave_attract" );
        $video_attract = jQuery( "#video_attract" );
        $attract = jQuery( "#attract" );
        $presentation = jQuery( "#presentation" );

        
    
    

    var idleSeconds = 120;

    $(function(){

      var idleTimer;

      function resetTimer(){
        clearTimeout(idleTimer);
        idleTimer = setTimeout(whenUserIdle, idleSeconds*1000);
        console.log("timer reset");
      }
        
    resetTimer();
        
      jQuery("#video_attract").click(function() {
        jQuery("#attract").animate({ opacity: 0 }, 1000);
        jQuery("#attract").css('pointer-events', 'none');
        jQuery( "#presentation" ).css( "pointer-events", "auto" );
//        window.location='./'; 
        setTimeout(function() {
            pauseAttract();
        }, 1000);
    });

      $(document.body).click(function(){ 
        console.log(Date.now());
        resetTimer();
        
      });

    });

    function whenUserIdle(){
        playAttract(); 
        console.log("presentation reset");
        jQuery("#attract").animate({ opacity: 1 }, 1000);
        $video_attract.get(0);
        $attract.css('pointer-events', 'auto');
        jQuery( "#presentation" ).css( "pointer-events", "none" );
    }
}