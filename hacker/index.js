      $(document).ready(function(){
        $('button').click(function(e) {
          e.preventDefault();
          if($('input').val().toLocaleLowerCase() == "bombs") {
            window.location = "bombs.html";
          } else if ($('input').val().toLocaleLowerCase() == "hacktheplanet") {
            window.location = "hacktheplanet.html";
          } else if ($('input').val().toLocaleLowerCase() == "intro"){
            window.location = "intro.html";
          } else {
            window.location = "../404.html";
          }
        });
      });