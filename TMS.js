// ==UserScript==
// @name         Eyny Link Grab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Grab links from Eyny.
// @author       Me
// @match        http://video.eyny.com/*
// @grant        none
// ==/UserScript==

function createCopyLinkBtn() {
	var newbutton = document.createElement("button");
	var directLinkParentElem = document.getElementById("ajaxwaitid");
	newbutton.innerHTML = "Copy";
	newbutton.className = "button";
	newbutton.id = "copylinkbtn";
	newbutton.style.border = "1px solid #3a90f2";
	newbutton.style.padding = "7 px 13px 7px 13px";
	newbutton.style.backgroundColor = "#3A90F2";
	newbutton.style.color = "#fff";
	newbutton.style.fontSize = "13px";

	newbutton.addEventListener("click", function() {
		var ajaxw8 = document.getElementById("ajaxwaitid");
		var textBox = ajaxw8.firstChild;
		textBox.select();
		document.execCommand('copy');
	});
	directLinkParentElem.appendChild(newbutton);
}

function createNewTabBtn() {
	var newbutton = document.createElement("button");
	var directLinkParentElem = document.getElementById("ajaxwaitid");
	newbutton.innerHTML = "New Tab";
	newbutton.className = "button";
	newbutton.id = "newtabbtn";
	newbutton.style.border = "1px solid #f50";
	newbutton.style.padding = "7 px 13px 7px 13px";
	newbutton.style.backgroundColor = "#f50";
	newbutton.style.color = "#fff";
	newbutton.style.fontSize = "13px";
	//margin:2px; border:1px solid #3A90F2; padding:7px 13px 7px 13px; background-color: #3A90F2; font-weight:bold; color: #fff; font-size:13px; border-radius:5px;
	newbutton.addEventListener("click", function() {
		window.open(video.currentSrc,'_blank');
	});
	directLinkParentElem.appendChild(newbutton);
}

function reloadButtons() {
	var copyLinkButton = document.getElementById("copylinkbtn");
	var newTabButton = document.getElementById("newtabbtn");
	if (copyLinkButton == null) {
		console.log("copylinkbtn != Null");
		createCopyLinkBtn();
	} else {
		copyLinkButton.remove();
	}
	if (newTabButton == null) {
		console.log("newtabbtn != Null");
		createNewTabBtn();
	} else {
		newTabButton.remove();
	}
}

(function() {
    'use strict';
	var videoLINK = video.currentSrc;
	if (videoLINK == "") {
		console.log("No link found");
		return;
	}
	var text = document.createElement("textarea");
	text.style.width = "98%";
	text.style.height = "15px";
	text.row = 1;
	text.readOnly = true;
	text.wrap = "soft";
	text.style.resize = "none";
	var t = document.createTextNode(video.currentSrc);
	text.appendChild(t);
	document.getElementById("ajaxwaitid").appendChild(text);
	video.controlsList = "download";
    //document.write("<h1>" + video.currentSrc + "</h1>");
	//alert(video.currentSrc);
	reloadButtons();
})();
