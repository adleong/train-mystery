    $(document).ready(function(){
        var credits = JSON.parse(localStorage.getItem("dealer/credits")) || 0;
        $('#credits').text(credits);
        
        $('#buy-button').click(function(e) {
          e.preventDefault();
          $('#buy').removeClass("hidden");
          $('#buy-button').addClass("disable");
          $('#sell').addClass("hidden");
          $('#sell-button').removeClass("disable");
        });
        
        $('#sell-button').click(function(e) {
          e.preventDefault();
          $('#sell').removeClass("hidden");
          $('#sell-button').addClass("disable");
          $('#buy').addClass("hidden");
          $('#buy-button').removeClass("disable");
        });
        
        if (localStorage.getItem("dealer/registry")) {
          $('#registry').addClass("hidden");
        }
        
        if (localStorage.getItem("dealer/stabilizer")) {
          $('#stabilizer').addClass("hidden");
        }
        
        if (localStorage.getItem("dealer/key")) {
          $('#key').addClass("hidden");
        }
        
        if (localStorage.getItem("dealer/hyperfuel")) {
          $('#hyperfuel').addClass("hidden");
        }
        
        if (localStorage.getItem("dealer/password")) {
          $("#password").addClass("hidden");
        } else {
          $('#password-submit').click(function(e) {
            e.preventDefault();
            if ($("#password-input").val().toLocaleLowerCase() == "letmein") {
              localStorage.setItem("dealer/password", true);
              credits += 200;
              localStorage.setItem("dealer/credits", credits);
              $("#password").addClass("hidden");
              $('#credits').text(credits);
            } else {
              $("#password-input").val("");
            }
          });
        }
        
        if (localStorage.getItem("dealer/route")) {
          $("#route").addClass("hidden");
        } else {
          $('#route-submit').click(function(e) {
            e.preventDefault();
            if ($("#route-input").val().toLocaleLowerCase() == "gsgbjpzarku") {
              localStorage.setItem("dealer/route", true);
              credits += 200;
              localStorage.setItem("dealer/credits", credits);
              $("#route").addClass("hidden");
              $("#credits").text(credits);
            } else {
              $("#route-input").val("");
            }
          });
        }
        
        if (localStorage.getItem("dealer/meal")) {
          $("#meal").addClass("hidden");
        } else {
          $("#meal-submit").click(function(e) {
            e.preventDefault();
            if ($("#meal-input").val().toLocaleLowerCase() == "second dessert") {
              localStorage.setItem("dealer/meal", true);
              credits += 200;
              localStorage.setItem("dealer/credits", credits);
              $("#meal").addClass("hidden");
              $("#credits").text(credits);
            } else {
              $("#meal-input").val("");
            }
          });
        }
        
        if (localStorage.getItem("dealer/paradox")) {
          $("#paradox").addClass("hidden");
        } else {
          $("#paradox-submit").click(function(e) {
            e.preventDefault();
            if ($("#paradox-input").val().toLocaleLowerCase().search("memory") >= 0) {
              localStorage.setItem("dealer/paradox", true);
              credits += 200;
              localStorage.setItem("dealer/credits", credits);
              $("#paradox").addClass("hidden");
              $("#credits").text(credits);
            } else {
              $("#paradox-input").val("");
            }
          });
        }
        
        if (localStorage.getItem("dealer/turtle")) {
          $("#turtle").addClass("hidden");
        } else {
          $("#turtle-submit").click(function(e) {
            e.preventDefault();
            if ($("#turtle-input").val().toLocaleLowerCase() == "xuan wu") {
              localStorage.setItem("dealer/turtle", true);
              credits += 500;
              localStorage.setItem("dealer/credits", credits);
              $("#turtle").addClass("hidden");
              $("#credits").text(credits);
            } else {
              $("#turtle-input").val("");
            }
          });
        }
        
        if (localStorage.getItem("dealer/bomb") && !localStorage.getItem("dealer/soldBomb")) {
          $("#bomb").removeClass("hidden");
          $("#sell-bomb").click(function(e) {
            e.preventDefault();
            localStorage.setItem("dealer/soldBomb", true);
            credits += 1000;
            localStorage.setItem("dealer/credits", credits);
            $("#bomb").addClass("hidden");
            $("#credits").text(credits);
          });
        }
    });