var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
 });


 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause() 
	 });

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate*=0.9;
	console.log("Speed is ", video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate/=0.9;
	console.log("Speed is ", video.playbackRate);
});
	
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime+=10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Position is ", video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true){
	console.log("volume is on")
	video.muted = false
	document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("volume is muted now")
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	video.volume -= (100/1000)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("volume is changed")
});


document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});
