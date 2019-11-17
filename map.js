      var london = [155, 115];
      var beijing = [620, 164];
      var hyderabad = [490, 260];
      
      function clear() {
        var canvas = $('canvas')[0];
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      function drawCities() {
        var ctx = $('canvas')[0].getContext("2d");
        ctx.fillStyle = "#0000FF";
        ctx.beginPath();
        ctx.arc(london[0], london[1], 2, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(beijing[0], beijing[1], 2, 0, Math.PI*2);
        ctx.fill();
        if (localStorage.getItem("map/redirect")) {
          ctx.beginPath();
          ctx.arc(hyderabad[0], hyderabad[1], 2, 0, Math.PI*2);
          ctx.fill();
        }
      }
      
      function drawLine(ratio) {
        
        var xpos = (beijing[0] - london[0])*ratio + london[0];
        var ypos = (beijing[1] - london[1])*ratio + london[1];
        
        var ctx = $('canvas')[0].getContext("2d");
        
        ctx.strokeStyle = "#C00000";
        ctx.lineWidth = 2;
        
        ctx.setLineDash([0]);
        ctx.beginPath();
        ctx.moveTo(london[0], london[1]);
        ctx.lineTo(xpos, ypos);
        ctx.stroke();
        
        if (localStorage.getItem("map/redirect")) {
          ctx.setLineDash([4]);
          ctx.beginPath();
          ctx.moveTo(xpos, ypos);
          ctx.lineTo(hyderabad[0], hyderabad[1]);
          ctx.stroke();
          ctx.strokeStyle = "#888";
        }
        ctx.setLineDash([4]);
        ctx.beginPath();
        ctx.moveTo(xpos, ypos);
        ctx.lineTo(beijing[0], beijing[1]);
        ctx.stroke();
        
        
        $('.gps_ring').css('left', xpos-9);
        $('.gps_ring').css('top', ypos-9);
      }
      
      function ratio() {
        var start = parseFloat(localStorage.getItem("startTime"));
        var elapsed = Date.now() - start;
        return elapsed / (5*60*60*1000); 
      }
      
      function handleDest(e) {
        if ($("#dest").val().toLocaleLowerCase() == "hyderabad") {
          $("#passcode-div").removeClass("hidden");
        } else {
          $("#passcode-div").addClass("hidden");
        }
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        if ($("#dest").val().toLocaleLowerCase() == "hyderabad") {
          if (localStorage.getItem("refueled")) {
            if ($("#passcode").val() == "191") {
              localStorage.setItem("map/redirect", true);
              draw();
              setTimeout(function() {
                alert("Incoming message");
                window.open("https://www.youtube.com/embed/Opz8d8uR-zE");
              }, 10*1000);
            } else {
              alert("Invalid passcode");
            }
          } else {
            alert("Insufficient fuel");
          }
        } else {
          alert("Invalid destination"); 
        }
      }
      
      function draw() {
        clear();
        drawLine(ratio());
        drawCities();
      }
      
      $(document).ready(function() {
        
        if (!localStorage.getItem("map/access")) {
          window.location.replace("key.html");
        }
        
        $("#dest").on('input', handleDest);
        $("button").click(handleSubmit);
        
        draw();
        setInterval(draw, 10*1000);
      });