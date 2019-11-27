    $(document).ready(function(){
        var credits = JSON.parse(localStorage.getItem("dealer/credits")) || 0;
        
        if (!localStorage.getItem("dealer/hyperfuel")) {
            if (credits >= 1200) {
                credits -= 1200;
                localStorage.setItem("dealer/credits", credits);
                localStorage.setItem("dealer/hyperfuel", true);
            } else {
                $('p').text("You don't have enough credits to buy the Refined Hyperfuel.");
            }
        }
        
        $('#credits').text(credits);
    });