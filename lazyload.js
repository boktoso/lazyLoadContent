function lazyLoad(){
	var lazyLoad = $("span.lazyLoad:last");
	
	if($(lazyLoad).html() == ""){
		$(lazyLoad).html("loading...");
		
		$.get($(lazyLoad).attr("data-url"), function(content){
			$(lazyLoad).remove();
			$("#lazyButton").remove();
			$("#content").append(content);
		});
	}
}
