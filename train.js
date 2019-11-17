var offset = 0;

function blink() {
  return setInterval(function(){
    $('alarm').each(function(){
      $(this).css('visibility' , $(this).css('visibility') === 'hidden' ? '' : 'hidden')
    });
  }, 500);
}

function tick() {
  $('#clock').text((new Date(new Date - offset)).toLocaleTimeString());
}

function time_stable() {
  $('alarm').text("TIME MATRIX STABLE");
  $('alarm').show();
  $('alarm').css('visibility', '');
  $('alarm').fadeOut(10000);
  $('.jumbotron').css('background-color', 'rgb(238, 238, 238)');
  $('body').css('background-color', 'white');
}

function reverse_flow() {
  $('alarm').text("REVERSING TEMPORAL FLOW");
  offset = 0;
  var flow = setInterval(function() {
    if (offset < 5*60*60*1000) {
      offset += 5000;
      tick();
    }
  },1);
  setTimeout(function() {
    clearInterval(flow);
    clearInterval(b);
    localStorage.setItem("offset", 5*60*60*1000);
    localStorage.setItem("startTime", Date.now());
    time_stable();
  }, 16000);
}

function time_travel() {
  $('alarm').text("TIME TRAVEL CODE RECOGNIZED");
  $('alarm').show();
  $('.jumbotron').css('background-color', 'yellow');
  $('body').css('background-color', 'yellow');
  b = blink();
  setTimeout(reverse_flow, 3000);
}

function nav() {
  $('#sensors').unbind("click");
  $('#map').unbind("click");
  $('#status').unbind("click");
  if (localStorage.getItem("backdoor")) {
    $('#sensors').attr('href', 'sensors.html');
    $('#map').attr('href', 'map.html');
    $('#status').attr('href', 'status.html');
  } else {
    $('#sensors').click(function() { alert("Access Denied");});
    $('#map').click(function() { alert("Access Denied");});
    $('#status').click(function() { alert("Access Denied");});
  }
}

$(document).ready(function(){
  offset = localStorage.getItem("offset") || 0;

  setInterval(tick, 1000);

  $('button').click(function(e) {
    e.preventDefault();
    if( $('input').val() == "Tj3SFHxe" && offset == 0) {
      $('input').val("");
      time_travel();
    } else if ($('input').val() == "Tj3SFHxe" || $('input').val() == "Qkyq3J7n") {
      $('input').val("");
      $('alarm').text("CODE EXPIRED");
      $('alarm').show();
      $('alarm').fadeOut(3000);
    } else if ($('input').val() == "backd00r") {
      localStorage.setItem("backdoor", true);
      nav();
      $('input').val("");
      $('alarm').text("ACCESS GRANTED");
      $('alarm').show();
      $('alarm').fadeOut(3000);
    } else {
      $('input').val("");
      $('alarm').text("INVALID CODE");
      $('alarm').show();
      $('alarm').fadeOut(3000);
    }
  });
  nav();
});