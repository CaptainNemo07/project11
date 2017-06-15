// in jQuery everything is contained in a document.ready function
$(document).ready(function(){
	// store an array of video data here
	var i = 0
	var screenMain = document.getElementById("myIFrame");

	// dev google keys
	var myKey = "AIzaSyAr0fnc8B-t96isVPUByudWNPFDKJIugoc";


	loadVideo();

	// function to load videos this is a jQuery ajax request
	function loadVideo()
	{
		var category = 44;
		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&type=video&videoCategoryId='+category+'&videoEmbeddable=true&key='+myKey;

		$.ajax({
			url:url,
			success:function(data){
				// handle data from your request here
				
				 screenMain.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId;
		 	 $('#next').click(function()
				 {
					 if (i == 9) {
						 i = 0;
						 screenMain.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId;
					 } else {
				 		i += 1
						screenMain.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId;
						}
				 });


			$('#last').click(function()
			 	{
					if (i == 0) {
						i = 9;
						screenMain.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId;
					} else {
						i -= 1
						screenMain.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId;
					}
			 	});

			}
		});
	}

	}); // this is the end of document.ready
