    $(document).ready(function(){
        var credits = JSON.parse(localStorage.getItem("dealer/credits")) || 0;
        
        if (!localStorage.getItem("dealer/key")) {
            if (credits >= 600) {
                credits -= 600;
                localStorage.setItem("dealer/credits", credits);
                localStorage.setItem("dealer/key", true);
            } else {
                $('p').text("You don't have enough credits to buy the Strange Key.");
            }
        }
        
        $('#credits').text(credits);
    });