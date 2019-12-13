        var refuelCode = "umadbro";
        
        function ratio() {
          var start = parseFloat(localStorage.getItem("startTime"));
          var elapsed = Date.now() - start;
          return elapsed / (5*60*60*1000); 
        }
        
        function fuel() {
          var f = (100-ratio()*100);
          if (localStorage.getItem("refueled")) {
              f = 100;
          }
          $("#fuel").text(f.toFixed());
          return Math.round(f);
        }
        
        $(document).ready(function() {
            fuel();
           $("button").click(function (e){
              e.preventDefault();
              if ($("input").val().toLocaleLowerCase() == refuelCode) {
                  var f = fuel();
                  localStorage.setItem("refueled", true);
                  $("input").val("");
                  var incr = setInterval(function() {
                      f++;
                      $("#fuel").text(f.toFixed());
                      if (f >= 100) {
                          window.clearInterval(incr);
                      }
                  }, 100);
                  
              } else {
                  alert("Invalid code");
              }
           });
        });