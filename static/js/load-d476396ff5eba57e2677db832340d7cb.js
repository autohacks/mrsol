
				var referrer = window.btoa(unescape(window.location.href));
		
				var originator = window.btoa(unescape(window.location.href));
		
		var id = "d476396ff5eba57e2677db832340d7cb";
		var querystring = "";
		var lockerurl = "https:\/\/www.dlmyfiles.com\/cl\/gl.php?" + 'id=' + encodeURIComponent(id) + '&r=' + encodeURIComponent(originator) + '&a=' + encodeURIComponent(referrer) + querystring;

		
		var iframecontents;
		var old_display;

		function optionstoquery(options) {

			var query = "";

			if (options.mt) query += "&mt=" + encodeURIComponent(options.mt);
			if (options.dt) query += "&dt=" + encodeURIComponent(options.dt);
			if (options.dd) query += "&dd=" + encodeURIComponent(options.dd);
			if (options.md) query += "&md=" + encodeURIComponent(options.md);

			return query;

		}

		function og_load(options) {

			if (options) lockerurl += optionstoquery(options);

							//preload
				var xhr = new XMLHttpRequest();
				xhr.open('GET', lockerurl, true);
				xhr.onreadystatechange = function() {
					if (this.readyState!==4) return;
					if (this.status!==200) {
						iframecontents = false;
						return;
					}

					iframecontents = this.responseText;
				};
				xhr.send();

				ogEditBody();
					}

				function ogEditBody() {

			var body = document.getElementsByTagName('body')[0];

			if(document.getElementsByTagName('body')[0] === undefined) {
				setTimeout(ogEditBody, 100);
				return;
			}

			var old_overflow = body.style.overflow;
			old_display = body.style.display;

			
			ogMakeLocker();

			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

			eventer(messageEvent,function(e) {
				var key = e.message ? "message" : "data";
				var data = e[key];
				if (e.origin != window.location.origin) {
					return;
				}
				if (data == 'close') {

					var url_redirect = "https:\/\/www.dlmyfiles.com\/cl\/u.php?id=0vhEVTB6vnEGatmzW%2Fui5kWkpywuQIt4E0sS2rLqbi4cj4fVtuA90Zl%2BWQxcCj5R&r=aHR0cHM6Ly93d3cucmFiYml0ZmlsZXMuY29tL2NsLnBocD9pZD1mMDY2NjM2NjM1MTUyZGI3ODQzMmU2NGMwMGUxZmY1Yg%3D%3D";

					
											window.location.href = url_redirect;
					
				} else if (data == 'hide_scrollbar') {
					body.style.overflow = 'hidden';
				}
			}, false);
		}

		function ogMakeLocker() {

			var body = document.getElementsByTagName('body')[0];

			if(iframecontents === undefined) {
				setTimeout(ogMakeLocker, 100);
				return;
			}

			
			if(iframecontents !== false) ogSetContents();
		}

		function ogSetContents() {

			var body = document.getElementsByTagName('body')[0];

			var iframe = document.createElement('iframe');
			iframe.name = 'iframe';
			iframe.scrolling = 'yes';
			iframe.frameborder = '0';
			iframe.style.border = 'none';
			iframe.style.width = '100%';
			iframe.style.height = '100%';
			iframe.style.position = 'fixed';
			iframe.style.top = 0;
			iframe.style.left = 0;
			iframe.style.zIndex = 16777271;
			iframe.id = 'test_iframe';
			body.appendChild(iframe);
			iframe = document.getElementById("test_iframe");
			iframe.contentDocument.write(iframecontents);
		}

		
function og_getScriptURL() {
	var myScript = document.getElementById('ogjs');

	if(!myScript) {
		var scripts = document.getElementsByTagName('script');
		var index = scripts.length - 1;
		var myScript = scripts[index];
	}

    return myScript.src.split('#').shift().split('?').shift();
}

function call_locker(options) {
	og_load(options);
}


var ogblock = false;