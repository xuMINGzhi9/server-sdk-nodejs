'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var KeepAlive = Chatroom.KeepAlive;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/keepalive.html#add
*/
var chatroom = {
	id: 'chrmId001'
};
KeepAlive.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/keepalive.html#remove
*/
var chatroom = {
	id: 'chrmId001'
};
KeepAlive.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/keepalive.html#getList
*/
KeepAlive.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});