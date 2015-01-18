$(document).ready(function () {

	var beatsData = {"three":{"one":[["RS","0","0","0","0","0","0","0"],["LR","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LS","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LR","0","0","0","0","0","0","0"]],"two":[["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"]],"three":[["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"]],"four":[["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"]]},"four":{"one":[["RS","0","0","0","0","0","0","0"],["LR","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LR","0","0","0","0","0","0","0"]],"two":[["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"]],"three":[["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"]],"four":[["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"]]},
	"seven":{

		"one":[

		["RR","0","0","0","0","0","0","0"],
		["LR","0","0","0","0","0","0","0"],
		["RS","0","0","0","0","0","0","0"],
		["LR","0","0","0","0","0","0","0"],
		["RS","0","0","0","0","0","0","0"],
		["LR","0","0","0","0","0","0","0"],
		["RS","0","0","0","0","0","0","0"],

		["LR","0","0","0","0","0","0","0"],
		["RR","0","0","0","0","0","0","0"],
		["LS","0","0","0","0","0","0","0"],
		["RR","0","0","0","0","0","0","0"],
		["LS","0","0","0","0","0","0","0"],
		["RR","0","0","0","0","0","0","0"],
		["LS","0","0","0","0","0","0","0"]
		],



	"two":[["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"]],"three":[["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"]],"four":[["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"]]},

	"eight":{"one":[["RR","0","0","0","0","0","0","0"],["LR","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LS","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LS","0","0","0","0","0","0","0"],["RR","0","0","0","0","0","0","0"],["LS","0","0","0","0","0","0","0"]],"two":[["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"],["RR","0","0","0","LA","0","0","0"],["RS","0","0","0","LA","0","0","0"]],"three":[["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"],["RR","0","LA","0","RA","0","LA","0"],["RS","0","LA","0","RA","0","LA","0"]],"four":[["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"],["RR","LA","RA","LA","RA","LA","RA","LA"],["RS","LA","RA","LA","RA","LA","RA","LA"]]},"threehalf":{"one":[


	["RS","0","0","0","LR","0","0","0"],
	["RS","0","0","0","LR","0","0","0"],
	["RS","0","0","0","LR","0","0","0"],
	["RR","0","0","0","LS","0","0","0"],
	["RR","0","0","0","LS","0","0","0"],
	["RR","0","0","0","LS","0","0","0"],
	["RR","0","0","0","LR","0","0","0"]


	]},"five":{"one":[

	["RS","0","0","0","RR","0","LR","0"],
	["RR","0","LR","0","RR","0","0","0"],
	["RR","0","LS","0","0","0","RR","0"],
	["LR","0","RR","0","LR","0","0","0"],
	["RS","0","0","0","0","0","0","0"]
	
	]}}


	var platform = navigator.platform;
	
	//  make height and width dynamic and always updated on resize
	var resize = $( window ).resize(function() {
		var viewport = {
		    width  : $(window).width(),
		    height : $(window).height()
		};

		console.log("height: " + viewport.height);
		console.log("width: " + viewport.width);
	});

	
	function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
	    return true;
	  }
	 else {
	    return false;
	  }
	}

	// detect if device is mobile
	 var isMobile =  detectmob();

	 // log screen and platform 
	console.log(isMobile);
	console.log(platform);
	resize;
	var gameIsOn;
	setup();


	//// main programme ///////

	function setup(){

	gameIsOn = false;
	var errorState = false;

	var ERRORS = {
		'beat': 'Please choose a beat',
		'number': 'Please enter a tempo between 30 and 120'
	}

	function raiseError(thing) {

		$('#errors').text(ERRORS[thing]);
		$('#errors').css('visibility','visible');
		errorState = true;
	}

	function checkforerrors() {

		 var beat = $(".active").attr("value");
		 var bpm = parseInt(document.getElementById("tempo_value").value);
		
		if (beat == null) 	{raiseError('beat');}

		else if (Number.isInteger(bpm) == false || bpm < 30 || bpm > 120) {
			raiseError('number');

	 		$("#tempo_value").animate({
	 			opacity: 0.25
	 		},500)
	 		.animate({
	 			opacity: 1
	 		},500);

	 		document.getElementById("tempo_value").value = 60;

	 	}
		else {
			errorState = false;
		}
	}

	function cleanDrumsText() {
		// clean up drums
		$('#text_left').removeClass().text('');
		$('#text_right').removeClass().text('');
	}
	
// selecting a beat ////

	$('ul li').on('click', function() {
		var myBeat = $(this).attr("value");
		var myLevel =  $(this).attr("name");
		var myBeatName =  $(this).text();

		$('#errors').css('visibility','hidden');

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		$('#current_beat').text(myBeatName);

	});


// pressing stop/go
	$('#play').on('click', function(){

		checkforerrors();
		
		if (errorState==false) {
			togglePlayState(true);
			$('#errors').css('visibility','hidden');
			
			}
		else {
			$('#errors').css('visibility','visible');
			}
		});
	}

// start the game
	function startgame() {
		gameIsOn = true;

		myBeat =  $(".active").attr("value");
		myLevel =  $(".active").attr("name");

		var bpm = document.getElementById("tempo_value").value;
      	var beatMs = 60000.0 / bpm;		
		// console.log(myBeat,myLevel,beatMs);

		var data = beatsData[myBeat][myLevel];
		var bars = data.length;
		var i = 1;

		function cleanDrumsText() {
			// clean up drums
			$('#text_left').removeClass().text('');
			$('#text_right').removeClass().text('');
		}

		playData(myBeat,myLevel,beatMs,bars);
		function playData(beat,level,beatMs,bars) {
			
			animateDrums(data[0], beat, level, 0);	
			playBeat(0,beat,level,beatMs);

			var game = setInterval(function(){
				
				if (i < bars) {
					var currentBar = data[i];
				
					animateDrums(currentBar, beat, level, i);
					playBeat(i,beat,level,beatMs);
				}
				i++;
			
				if (i==bars){i=0;} 	// infinite loop

			// set break functions
				$('#play').on('click', function(){i=bars+1;	var end = true; });
				$('nav ul li').on('click', function(){i=bars+1;
										startgame(); return false
					// setTimeout(togglePlayState(game),beatMs)
				});

				$('#temposelect').on('change',function(){
					i=bars+1;
					startgame();

				});

			},beatMs);
		}

		

		function updateCounter(i,beat,level,side){
			var count = i + 1;
			if (beat=="three"&&level=="one"&&count>3){count = count-3; }
			if (beat=="seven"&&level=="one"&&count>7){count = count-7; }
			if (beat=="threehalf"&&count==4 || beat=="threehalf"&&count==8){count = 'h'; }


			$('#count').text(count.toString());
		}

		function animateDrums(beat_array,beat,level,index) {

			var j = 1;
			var side = "L";

			setInterval(function(){
				
				if (j <= beat_array.length) {

					var currentBeat = beat_array[j-1];
					// console.log(currentBeat);
					var pos= "none";
					var stressed = false;
					var beatExists= true;

					if (currentBeat == "LS" || currentBeat == "LR" || currentBeat == "LA" ){
						var pos = "L";
					} else if (currentBeat == "RS" || currentBeat == "RR" || currentBeat == "RA" ){
						var pos = "R";
					} else {
						var beatExists= false;
					}

					// work out if a stressed beat to determine fontsize later
					if (currentBeat == "LS" || currentBeat == "RS"){var stressed = true;}
					else if ( currentBeat == "LR" || currentBeat == "LA"  
						|| currentBeat == "RR" || currentBeat == "RA" ){var stressed = false;}

					var info = "beat:" + currentBeat + "; pos:" + pos + "; index:" + (j-1)+ "; stress: " + stressed + "; bar:" + beat_array;
					
					// console.log(info);

					if (currentBeat=="LA"){currentBeat="LR";}
					if (currentBeat=="RA"){currentBeat="RR";}

					// get L or R attribute
					if (pos=="L")		{var side = $('#text_left');}
					else {var side = $('#text_right');}

					// show text(L/R) if there is a beat at all
					if (beatExists==true){

						cleanDrumsText();

						if(beat=="threehalf"){console.log(index,j,beat)}
						updateCounter(index,beat,level);

						// select the text for the correct drum
						side.text(pos);

						// make it big or small
						if (stressed==true //&& level=="one" || stressed==true && level=="two"
							)
							 {side.addClass('textbig');
								shakeDrum(pos,beatMs);}
						else {side.addClass('textsmall');}

						if (j==1 && level=="three" || j==1 && level=="four"){shakeDrum(pos,beatMs);}

					}
					else {
						cleanDrumsText();
					}
				}
				j++;
				
			},beatMs/8);
			
		}

	}
	// end of startgame()
		

	function playBeat(b,beat,level,beatMs){

		setTimeout(function () {

			if (b=="0")
				{document.getElementById("strong").play();}
			else if (b=="3"&&beat=="three"&&level=="one")
				{document.getElementById("strong").play();}
			else {document.getElementById("weak").play();}

			if (level=="three"||level=="four"){shakeDrum();}

		},beatMs/8);
	
	}

	function shakeDrum (pos, beatMs) {
			// get L or R attribute
			if (pos=="L") {var drumside = $('#drums_left');}
			else {var drumside = $('#drums_right');}


		drumside.css("opacity","0.2").animate({opacity: 1},beatMs/8);

		// console.log(drumside.attr('class'));

		}

	function togglePlayState(game){
		clearInterval(game);
		var state = $('nav span#play').attr('class');
		console.log(state);
		startStopGame();

		if (state=='play')		{$('#play').removeClass('play').addClass('stop');}
		else if (state=='stop')	{$('#play').removeClass('stop').addClass('play');}
	}

	function startStopGame(){

		if (!gameIsOn) {
			gameIsOn = true;
			startgame();
			
		} else {
			gameIsOn = false;
			setup();
		}
	}











});