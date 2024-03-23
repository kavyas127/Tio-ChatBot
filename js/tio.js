window.botpressWebChat.init({

    "botId": "90cb7ccf-3c5b-477e-baea-595b11805483",
    "clientId": "90cb7ccf-3c5b-477e-baea-595b11805483",

    "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
    "messagingUrl": "https://messaging.botpress.cloud",

    "botName": "Tio",

    "containerWidth": "100%25",
    "layoutWidth": "100%25",

    "hideWidget": true,
    "disableAnimations": true,
    "enableConversationDeletion": true,
    "enableTranscriptDownload": false,
    "showTimestamp": false,

    "avatarUrl": "https://i.pinimg.com/564x/0a/fd/51/0afd51574035e142398877b08609c751.jpg",
});


window.botpressWebChat.onEvent(
    function () {
        window.botpressWebChat.sendEvent({ type: "show" });
    },
    ["LIFECYCLE.LOADED"]
);