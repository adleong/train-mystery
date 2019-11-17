      function keyBase() {
        ctx = $('#key')[0].getContext('2d');
        ctx.fillStyle = '#CFB53B';
        ctx.beginPath();
        ctx.arc(200, 500, 100, 0, Math.PI*2);
        ctx.fill();
        ctx.fillRect(175, 8, 50, 500);
      }

      function drawWords(words) {
        ctx = $('#key')[0].getContext('2d');
        ctx.font = '12px';
        ctx.fillStyle = "#000000";
        for (i = 0; i < words.length; ++i) {
          ctx.fillText(words[i], 325, 12+30*i);
        }
      }

      function keyTeeth(words, pattern) {
        ctx = $('#key')[0].getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(225, 8, 50, 400);
        ctx.fillStyle = '#CFB53B';
        matches = words.map(function(w) { return !!w.match(pattern); });
        matches.push(false);
        for (i = 0; i < words.length; ++i) {
          if (matches[i]) {
            if (matches[i+1]) {
              ctx.fillRect(225, 30*i+8, 50, 30);
            } else {
              ctx.beginPath();
              ctx.moveTo(225, 30*i+8);
              ctx.lineTo(275, 30*i+8);
              ctx.lineTo(225, 30*i+68);
              ctx.closePath();
              ctx.fill();
            }
          }
        }
        matches.pop();
        correct = words.map(function(w) { return !!w.match('..CK.*R$'); });
        if (matches.every(function(v,i) { return correct[i] === v; })) {
          alert("Password accepted");
          localStorage.setItem("map/access", true);
          window.location.replace("map.html");
        }
      }

      $(document).ready(function(){
        words = ['TRUCKER', 'ICKIER', 'LUCKYSTAR', 'HACKER', 'BLACKCAR', 'BACKERS', 'CRACKER', 'ACKERR', 'BREAKER', 'REUNHACK', 'DOCKR', 'UNHACK'];

        $('#password').on('input',function(e){
          keyTeeth(words, $('#password')[0].value.toUpperCase());

        });

        keyBase();
        drawWords(words);
        $('#password')[0].value = "^B.*R$";
        keyTeeth(words, "^B.*R$");
      });