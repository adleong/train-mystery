      $(document).ready(function(){
        $('button').click(function(e) {
          e.preventDefault();
          if($('input').val().toLocaleLowerCase() == "artisart") {
            window.location = "artisart.html";
          } else if (
            $('input').val().toLocaleLowerCase() == "b8e8" ||
            $('input').val().toLocaleLowerCase() == "e8be"
          ) {
            window.location = "b8e8.html";
          } else if ($('input').val().toLocaleLowerCase() == "intro"){
            window.location = "intro.html";
          } else if ($('input').val().toLocaleLowerCase() == "poem"){
            window.location = "poem.html";
          } else {
            window.location = "../404.html";
          }
        });
      });