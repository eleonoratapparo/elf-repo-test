window.watsonAssistantChatOptions = {
	integrationID: "19ddf878-69b7-41b3-b99b-822e8478a82d", // The ID of this integration.
	region: "eu-gb", // The region your integration is hosted in.
	serviceInstanceID: "02cf8e3a-8cdc-4af3-9ecf-9efe52dd6caf", // The ID of your service instance.
	onLoad: function(instance) { instance.render(); }
};

setTimeout(function(){
	const t=document.createElement('script');
	t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
	document.head.appendChild(t);
});

// Variable for storing the reference to custom button
var customButton = document.getElementById("custom-chatbox-button");
// Attaching the function to click event
customButton.onclick = function() {
    // Variable for storing the plugin button
    var pluginButton = document.getElementById("watson-fab");
    // Simulating the click on plugin button
    pluginButton.click();
};
