      $(document).ready(function(){
        $('button').click(function(e) {
          e.preventDefault();
          if($('input').val().toLocaleLowerCase() == "iegturjjzkhyikztpue") {
            window.location = "bomb.html";
          } else if (
            $('input').val().toLocaleLowerCase() == "jfegcilmekfdhggedb" ||
            $('input').val().toLocaleLowerCase() == "jfegdmclafgeebdegk" ||
            $('input').val().toLocaleLowerCase() == "jfegdmlfgegeebhcdk" ||
            $('input').val().toLocaleLowerCase() == "jfegdmlfgegeekdcba"
          ) {
            window.location = "defused.html";
          } else if ($('input').val().toLocaleLowerCase() == "hq") {
            window.location = "hq.html";
          } else if ($('input').val().toLocaleLowerCase() == "intro"){
            window.location = "intro.html";
          } else if ($('input').val().toLocaleLowerCase() == "daedalus"){
            window.location = "daedalus.html";
          } else {
            window.location = "../404.html";
          }
        });
      });