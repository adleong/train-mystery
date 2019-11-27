    $(document).ready(function(){
        var credits = JSON.parse(localStorage.getItem("dealer/credits")) || 0;
        
        if (!localStorage.getItem("dealer/stabilizer")) {
            if (credits >= 400) {
                credits -= 400;
                localStorage.setItem("dealer/credits", credits);
                localStorage.setItem("dealer/stabilizer", true);
            } else {
                $('p').text("You don't have enough credits to buy the Signal Stabilizer.");
            }
        }
        
        $('#credits').text(credits);
    });