	var tabid=null;
	//#######################################
	//injecting the javascript file in the tab im at...
		 window.addEventListener("load", windowLoaded, false);
		 function windowLoaded() {
			tabid=0;
			//chrome.tabs.getSelected(null, function(tab) {
			//	tabid=tab.id;
			//	});
	
		
			chrome.tabs.executeScript(null,{file: "resources/jquery-1.8.3.js"});
			chrome.tabs.executeScript(null,{file: "resources/jquery-ui.js"});
			chrome.tabs.executeScript(null,{file: "injected-script.js"});
			chrome.tabs.insertCSS(null,{file: "resources/jquery-ui.css"});
			chrome.tabs.insertCSS(null,{file: "resources/sliders_style.css"});
			//for(var s=0;s<100;s++);
			 window.close();
		 }
		 
		 