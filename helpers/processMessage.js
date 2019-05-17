const API_AI_TOKEN = '8c3c2a178692425c962b01b56a80173d';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAADzP3SOBg0BAJLGdAJoWDNZBqSmyFtZAgVZAZAHZBbVcFmOI2JyAGe7IdaKzOlPIJ5dsAozv2KxKn71aDhbZBh1QmZBogPfujUqix7VczgluspsvKBPl27qeKhRiqzgK6nkd2zXiH0ZBJOn7ZCPQrDzmY5GT54aVX8wJPFHUGUyWY5AR5ZB2Qg3oTqBc0P3xpc04ZD';
const request = require('request');
const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'csassistantbotics'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};