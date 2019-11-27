      $(document).ready(function(){
        $('button').click(function(e) {
          e.preventDefault();
          if($('input').val().toLocaleLowerCase() == "intro") {
            window.location = "intro.html";
          } else if ($('input').val().toLocaleLowerCase() == "signal") {
            window.location = "signal.html";
          } else {
            window.location = "../404.html";
          }
        });
      });