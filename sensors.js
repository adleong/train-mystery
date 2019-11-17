        var freq = parseFloat("12.345");
        var width = 7;
        var height = width * 1.618;
        var hoffset = 3;
        var woffset = 3;
        var gap = 15;
        
        var messages = ["REDIRECT TRAIN", "ROBOT OVERLORD", "JOURNAL MEMORY", "TEMPORAL SHIFT"];
        
        var lettermap = {
          "A": [3,6,9,11,13,15,16,18],
"B": [0,5,6,7,11,16,19,20,23],
"C": [1,4,13,15,24,26],
"D": [0,5,6,7,16,18,21,23],
"E": [0,1,4,5,6,7,9,11],
"F": [0,1,6,7,9,11],
"G": [1,3,4,9,13,15,24,26],
"H": [2,3,6,7,9,11],
"I": [0,1,4,5,8,10],
"J": [0,1,5,6,8,10],
"K": [6,7,11,17,19,20,22],
"L": [4,5,6,7],
"M": [2,3,6,7,12,14,17,19],
"N": [2,3,6,7,12,14,20,22],
"O": [13,15,16,18,21,23,24,26],
"P": [0,6,7,11,16,19],
"Q": [13,15,16,18,20,21,22,23,24,26],
"R": [0,6,7,11,16,19,20,22],
"S": [13,14,16,20,23,26],
"T": [0,1,8,10],
"U": [2,3,4,5,6,7],
"V": [2,7,21,23,24,26],
"W": [2,3,6,7,20,22,25,27],
"X": [12,14,17,19,20,22,25,27],
"Y": [10,12,14,17,19],
"Z": [0,1,4,5,17,19,25,27],
" ": []
        }
        
        var segmentmap = [
            [0,0,2,0], // 0
            [2,0,4,0], // 1
            [4,0,4,2], // 2
            [4,2,4,4], // 3
            [4,4,2,4], // 4
            [2,4,0,4], // 5
            [0,4,0,2], // 6
            [0,2,0,0], // 7
            
            [2,0,2,2], // 8
            [4,2,2,2], // 9
            [2,4,2,2], // 10
            [0,2,2,2], // 11
            
            [0,0,1,1], // 12
            [2,0,1,1], // 13
            [2,2,1,1], // 14
            [0,2,1,1], // 15
            
            [2,0,3,1], // 16
            [4,0,3,1], // 17
            [4,2,3,1], // 18
            [2,2,3,1], // 19
            
            [2,2,3,3], // 20
            [4,2,3,3], // 21
            [4,4,3,3], // 22
            [2,4,3,3], // 23
            
            [0,2,1,3], // 24
            [2,2,1,3], // 25
            [2,4,1,3], // 26
            [0,4,1,3] // 27
        ]
        
        function updateLock() {
            if (localStorage.getItem("sensors/unlocked")) {
                $('.lock').hide();
            }
        }
        
        function select() {
            $('.antenna').removeClass("selected")
            $(this).addClass("selected");
            print();
        }
        
        function print() {
            var message = wordToSegmentsList("NO SIGNAL");
            if ($("#frequency").val() == "12.345") {
                if ($("#antenna1").hasClass("selected")) {
                    message = segmentsListPlusWord(segmentsListPlusWord(wordPlus(messages[0], messages[1]), messages[2]), messages[3]);
                } else if ($("#antenna2").hasClass("selected")) {
                    message = segmentsListPlusWord(wordPlus(messages[1], messages[2]), messages[3]);
                } else if ($("#antenna3").hasClass("selected")) {
                    message = wordPlus(messages[2], messages[3]);
                }
                
            }
            var canvas = $('#signal')[0]
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawWordBySegments(ctx, message);
        }
        
        function drawSegment(ctx, segmentId, offset) {
            var segment = segmentmap[segmentId];
            ctx.beginPath();
            ctx.moveTo(segment[0] * width + offset, segment[1] * height + hoffset);
            ctx.lineTo(segment[2] * width + offset, segment[3] * height + hoffset);
            ctx.stroke();
        }
        
        function drawLetter(ctx, letter, offset) {
            var segments = lettermap[letter];
            drawSegments(ctx, segments, offset);
        }
        
        function drawSegments(ctx, segments, offset) {
            for (var i = 0; i < segments.length; ++i) {
                drawSegment(ctx, segments[i], offset);
            }
        }
        
        function drawWordBySegments(ctx, segmentsList) {
            for (var i = 0; i < segmentsList.length; ++i) {
                drawSegments(ctx, segmentsList[i], (4*width+gap)*i + woffset);
            }
        }
        
        function drawWord(ctx, word) {
            for (var i = 0; i < word.length; ++i) {
                drawLetter(ctx, word[i], (4*width+gap)*i + woffset);
            }
        }
        
        function wordToSegmentsList(word) {
            var result = [];
            for (var i = 0; i < word.length; ++i) {
                result.push(lettermap[word[i]]);
            }
            return result;
        }
        
        function plus(segmentsA, segmentsB) {
            return $(segmentsA).not(segmentsB).get().concat($(segmentsB).not(segmentsA).get());
        }
        
        function wordPlus(wordA, wordB) {
            var result = [];
            for (var i = 0; i < wordA.length; ++i) {
                var segmentsA = lettermap[wordA[i]];
                var segmentsB = lettermap[wordB[i]];
                result.push(plus(segmentsA, segmentsB));
            }
            return result;
        }
        
        function segmentsListPlusWord(segmentsList, word) {
            var result = [];
            for (var i = 0; i < word.length; ++i) {
                var segmentsA = segmentsList[i];
                var segmentsB = lettermap[word[i]];
                result.push(plus(segmentsA, segmentsB));
            }
            return result;
        }
        
        function code(e) {
            var m = $('#code').val().toUpperCase();
            if (m == messages[0]) {
                $('#video').attr("src", "https://www.youtube.com/embed/6M-ZdC1C6sU");
                $('#video').removeClass("hidden");
                localStorage.setItem("sensors/unlocked", true);
                localStorage.setItem("sensors/A", true);
                updateLock();
                if (e != null ) { answers(); }
            } else if (m == messages[1]) {
                $('#video').attr("src", "https://www.youtube.com/embed/7Pn2Ayzafr4");
                $('#video').removeClass("hidden");
                localStorage.setItem("sensors/B", true);
                if (e != null ) { answers(); }
            } else if (m == messages[2]) {
                $('#video').attr("src", "https://www.youtube.com/embed/nPjynnu-FPE");
                $('#video').removeClass("hidden");
                localStorage.setItem("sensors/C", true);
                if (e != null ) { answers(); }
            } else if (m == messages[3]) {
                $('#video').attr("src", "https://www.youtube.com/embed/v4oWoTNu-cc");
                $('#video').removeClass("hidden");
                localStorage.setItem("sensors/D", true);
                if (e != null ) { answers(); }
            }
        }
        
        function answers() {
            var n = 0;
            if (localStorage.getItem("sensors/A")) {
                $('#A').text("REDIRECT TRAIN");
                $('#Arow').removeClass("hidden");
                $('#Arow').unbind("click");
                $('#Arow').click(function() {$('#code').val("REDIRECT TRAIN"); code(null);});
                ++n;
            }
            if (localStorage.getItem("sensors/B")) {
                $('#B').text("ROBOT OVERLORD");
                $('#Brow').removeClass("hidden");
                $('#Brow').unbind("click");
                $('#Brow').click(function() {$('#code').val("ROBOT OVERLORD"); code(null);});
                ++n;
            }
            if (localStorage.getItem("sensors/C")) {
                $('#C').text("JOURNAL MEMORY");
                $('#Crow').removeClass("hidden");
                $('#Crow').unbind("click");
                $('#Crow').click(function() {$('#code').val("JOURNAL MEMORY"); code(null);});
                ++n;
            }
            if (localStorage.getItem("sensors/D")) {
                $('#D').text("TEMPORAL SHIFT");
                $('#Drow').removeClass("hidden");
                $('#Drow').unbind("click");
                $('#Drow').click(function() {$('#code').val("TEMPORAL SHIFT"); code(null);});
                ++n;
            }
            $('#total').text(n);
            if (n == 4) {
                $('#journal').removeClass("hidden");
            }
        }
        
        $(document).ready(function() {
            if (!localStorage.getItem("sensors/access")) {
                window.location.replace("code.html");
            }
            updateLock();
            answers();
            $('.antenna').click(select);
            $('#frequency').on('input', function(e) {
               print(); 
            });
            print();
            $('#code').on("input", code);
        });
