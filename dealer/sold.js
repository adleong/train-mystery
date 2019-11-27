    $(document).ready(function(){
        if (!localStorage.getItem("dealer/sold-crate")) {
          localStorage.setItem("dealer/sold-crate", true);
          localStorage.setItem("dealer/credits", "309");
        }
    });