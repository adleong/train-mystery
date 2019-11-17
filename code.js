        $(document).ready(function() {
        $('button').click(function(e) {
          e.preventDefault();
          if( $('input').val().replace(/ /g, "").toLocaleLowerCase() == 'helloworld' ) {
              alert("Encoding error");
          } else if ( $('input').val().replace(/ /g, "").toLocaleLowerCase() == 'do<-->def>j-!' ) {
              alert("Password accepted");
              localStorage.setItem("sensors/access", true);
              window.location.replace("sensors.html");
          } else {
            alert("Password incorrect");
          }
        });
        });