	// alert("欢迎来看仙女姐姐!");
	function delayChange(){
		setTimeout(function(){changeToWhere()},2000);
	}
	function changeToWhere(){
		document.getElementById("begin").style.display="none";
		document.getElementById("big").style.display="block";
		// window.location.href="./js/study.html"
		// alert("hello")
	}
	function delayOut(){
		setTimeout(function(){changeToBack()},2000);
	}
	function changeToBack(){
		document.getElementById("begin").style.display="block";
		document.getElementById("big").style.display="none";
		// window.location.href="../index.html"
		// alert("hello")
	}