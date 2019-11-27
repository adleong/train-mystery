    $(document).ready(function(){
        inventory = [];
        
        if (localStorage.getItem("dealer/bomb") && !localStorage.getItem("dealer/soldBomb")) {
          inventory.push('Disarmed Bomb');
        }
        
        if (localStorage.getItem("dealer/registry")) {
          inventory.push('<a href="registry.html">Android Version Registry</a>');
        }
        
        if (localStorage.getItem("dealer/stabilizer")) {
          inventory.push('<a href="stabilizer.html">Signal Stabilizer</a>');
        }
        
        if (localStorage.getItem("dealer/key")) {
          inventory.push('<a href="key.html">Strange Key</a>');
        }
        
        if (localStorage.getItem("dealer/hyperfuel")) {
          inventory.push('<a href="hyperfuel.html">Refined Hyperfuel</a>');
        }

        if (!localStorage.getItem("dealer/sold-crate")) {
            inventory.push('<a href="crate.html">Crate of Goods</a>');
        }
        credits = localStorage.getItem("dealer/credits") || 0;
        inventory.push(credits + ' credits');
        if (inventory.length == 0) {
            $('h3').append('Your inventory is empty');
        }
        for (var i = 0; i < inventory.length; i++) {
            $('ul').append('<li>' + inventory[i] + '</li>');
        }
    });