      $(document).ready(function(){
        $('button').click(function(e) {
          e.preventDefault();
          if($('input').val().toLocaleLowerCase() == "goods") {
            window.location = "goods.html";
          } else if ($('input').val().toLocaleLowerCase() == "intro") {
            window.location = "intro.html";
          } else if ($('input').val().toLocaleLowerCase() == "143"){
            window.location = "sold.html";
          } else if ($('input').val().toLocaleLowerCase() == "bazaar"){
            window.location = "bazaar.html";
          } else if ($('input').val().toLocaleLowerCase() == "disarmedbomb"){
            window.location = "disarmedbomb.html";
          } else {
            window.location = "../404.html";
          }
        });
      });