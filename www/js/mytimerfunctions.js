// JavaScript Document

	
	//			audioElement.loop=true;

function resetBtn() {
	
			location.reload();
};

function stopBtn(){		
		stopTimer('main-timer');
		stopTimer('camo-timer');
		stopTimer('os-timer');
		stopTimer('rocket-timer');
		stopCheck();
		if ($('#startBtn').css('display') !== 'none') {
			
		} else 	{			
		$("#stopBtn").hide();
		$("#stopBtnP").hide();
		$("#add2Btn").hide();
		$("#add2BtnP").hide();
		$("#resumeBtn").show();
		$("#resumeBtnP").show();
		$("#resetBtn").show();
		$("#resetBtnP").show();
		}
};
function resumeBtn(){
				
		        startTimer('main-timer');
    		    startTimer('camo-timer');
		        startTimer('os-timer');
        		startTimer('rocket-timer');
				startCheck();
				$("#resumeBtn").hide();
				$("#resumeBtnP").hide();
				$("#resetBtn").hide();
				$("#resetBtnP").hide();
				$("#stopBtn").show();
				$("#stopBtnP").show();
				$("#add2Btn").show();
				$("#add2BtnP").show();
				

};

function timerStart(){
				startCheck();
				$("#largeTime").show();
				$("#startBtn").hide();
				$("#add2Btn").show();
				$("#resetBtn").hide();
				setTimeout(function(){
					startTimer('main-timer'),
					startTimer('camo-timer'),
					startTimer('os-timer'),
					startTimer('rocket-timer')
					},
					2000
				 );
				
};

function timerDelay1(){
		if ($('#startBtn').css('display') !== 'none') {			
				} else 	{
				stopTimer('main-timer');
		        stopTimer('camo-timer');
        		stopTimer('os-timer');
		        stopTimer('rocket-timer');
				stopCheck();
				$("#resumeBtn").hide();
				$("#stopBtn").show();
				
				setTimeout(function(){
					startTimer('main-timer'),
					startTimer('camo-timer'),
					startTimer('os-timer'),
					startTimer('rocket-timer')
					startCheck();
					},
					2000
				 );
				};
				//audioElement.play();
				//audioElement.currentTime = audioElement.currentTime -.99;
};







	/*
var sec = document.getElementById('sec').innerHTML;
	*/
var time;

function startCheck(){
	time = setInterval(checkTime, 1000);
};

function stopCheck(){
	time = clearInterval(time);
};


function checkTime(){
var sec = document.getElementById('sec').innerHTML;
		

		switch (sec){
			case '00': if(document.getElementById("00").checked) {
				beep.play();
			};
				break;
			case '50': if(document.getElementById("50").checked) {
				sec50.play();
			};
				break;
			case '40': if(document.getElementById("40").checked) {
				sec40.play();
			};
				break;			
			case '30': if(document.getElementById("30").checked) {
				sec30.play();
			};
				break;
			case '20': if(document.getElementById("20").checked) {
				sec20.play();
			};
				break;
			case '10': if(document.getElementById("10").checked) {
				sec10.play();
			};
				break;
			case '09': if(document.getElementById("9").checked) {
				sec9.play();
			};
				break;
			case '08': if(document.getElementById("8").checked) {
				sec8.play();
			};
				break;
			case '07': if(document.getElementById("7").checked) {
				sec7.play();
			};
				break;
			case '06': if(document.getElementById("6").checked) {
				sec6.play();
			};
				break;
			case '05': if(document.getElementById("5").checked) {
				sec5.play();
			};
				break;
			case '04': if(document.getElementById("4").checked) {
				sec4.play();
			};
				break;
			case '03': if(document.getElementById("3").checked) {
				sec3.play();
			};
				break;
			case '02': if(document.getElementById("2").checked) {
				sec2.play();
			};
				break;
			case '01': if(document.getElementById("1").checked) {
				sec1.play();
			};
				break;
		}
		
};
 
/*   MAP SELECTION FUNCTIONS    */

   function msSimpletimer(){
		setTimeout(function(){
		$('#camo-timer').hide();
		$('#os-timer').hide();
		$('#rocket-timer').hide();
		$('#resetBtn').attr("onClick","refreshST()");
		$('#resetBtnP').attr("onClick","refreshST();");	
		},50);
};
function refreshST(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msSimpletimer();
};

   function msBattlecreek(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Battle Creek');
		$('#resetBtn').attr("onClick","refreshBC()");
		$('#resetBtnP').attr("onClick","refreshBC()");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background":"url(images/bc-dark.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};

function refreshBC(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msBattlecreek();
};

   function msBloodgulch(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","180");
		$('#rocketTimer').attr("countdown","90");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((180-seconds)/180)*100)| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((90-seconds)/90)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Blood Gulch');
		$('#resetBtn').attr("onClick","refreshBG()");
		$('#resetBtnP').attr("onClick","refreshBG();");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background" : "url(images/bg.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshBG(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msBloodgulch();
};

   function msBoardingaction(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","180");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((180-seconds)/180)*100)| number:0}}%; min-width:50px;");
		$('#mapName').html('Boarding Action');
		$('#resetBtn').attr("onClick","refreshBA()");
		$('#resetBtnP').attr("onClick","refreshBA();");	
	if (document.getElementById("bgimages").checked) {	
		$('#timerContainer').css({"background" : "url(images/ba.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshBA(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msBoardingaction();
};

   function msChillout(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","120");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Chill Out');
		$('#resetBtn').attr("onClick","refreshCO()");
		$('#resetBtnP').attr("onClick","refreshCO();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/co.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshCO(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msChillout();
};

   function msChiron(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","45");
		$('#osTimer').attr("countdown","45");
		$('#rocketTimer').attr("countdown","45");
		$('#camoBar').attr("style","width:{{(((45-seconds)/45)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((45-seconds)/45)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((45-seconds)/45)*100)+2| number:0}}%; min-width:50px;");
		$('#mapName').html('Chiron TL-45');
		$('#resetBtn').attr("onClick","refreshCH()");
		$('#resetBtnP').attr("onClick","refreshCH();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/ch.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshCH(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msChiron();
};

   function msDamnation(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Damnation');
		$('#resetBtn').attr("onClick","refreshDA()");
		$('#resetBtnP').attr("onClick","refreshDA()");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background":"url(images/da.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};

function refreshDA(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msDamnation();
};

   function msDerelict(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","30");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((30-seconds)/30)*100)+3 | number:0}}%; min-width:50px;");
		$('#mapName').html('Derelict');
		$('#resetBtn').attr("onClick","refreshDE()");
		$('#resetBtnP').attr("onClick","refreshDE()");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background":"url(images/de.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};

function refreshDE(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msDerelict();
};

   function msHangemhigh(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","180");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((180-seconds)/180)*100)| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Hang Em High');
		$('#resetBtn').attr("onClick","refreshHH()");
		$('#resetBtnP').attr("onClick","refreshHH();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/hh.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshHH(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msHangemhigh();
};

   function msLongest(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocket-timer').hide();
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:0px;");
		$('#mapName').html('Longest');
		$('#resetBtn').attr("onClick","refreshLO()");
		$('#resetBtnP').attr("onClick","refreshLO();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/lo.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshLO(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msLongest();
};
   
   function msPrisoner(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Prisoner');
		$('#resetBtn').attr("onClick","refreshPR()");
		$('#resetBtnP').attr("onClick","refreshPR()");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background":"url(images/pr.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};

function refreshPR(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msPrisoner();
};

   function msRatrace(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","90");
		$('#osTimer').attr("countdown","60");
		$('#rocket-timer').hide();
		$('#camoBar').attr("style","width:{{(((90-seconds)/90)*100)+1| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:0px;");
		$('#mapName').html('RatRace');
		$('#resetBtn').attr("onClick","refreshRR()");
		$('#resetBtnP').attr("onClick","refreshRR();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/rr.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshRR(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msRatrace();
};

   function msSidewinder(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocketTimer').attr("countdown","120");
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:{{(((120-seconds)/120)*100)+1 | number:0}}%; min-width:50px;");
		$('#mapName').html('Sidewinder');
		$('#resetBtn').attr("onClick","refreshSW()");
		$('#resetBtnP').attr("onClick","refreshSW()");
	if (document.getElementById("bgimages").checked) {
		$('#timerContainer').css({"background":"url(images/sw.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};

function refreshSW(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msSidewinder();
};

   function msWizard(){
		setTimeout(function(){
		$('#camoTimer').attr("countdown","60");
		$('#osTimer').attr("countdown","60");
		$('#rocket-timer').hide();
		$('#camoBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#osBar').attr("style","width:{{(((60-seconds)/60)*100)+2| number:0}}%; min-width:50px;");
		$('#rocketBar').attr("style","width:0px;");
		$('#mapName').html('Wizard');
		$('#resetBtn').attr("onClick","refreshWZ()");
		$('#resetBtnP').attr("onClick","refreshWZ();");	
	if (document.getElementById("bgimages").checked) {		
		$('#timerContainer').css({"background" : "url(images/wz.jpg) center bottom no-repeat", "background-size":"cover"});
	};
		},50);
};
function refreshWZ(){
	mainView.refreshPage({ 
		reload: true,
		ignoreCache: false,
	});
	msWizard();
};