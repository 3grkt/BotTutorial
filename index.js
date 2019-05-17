const verificationController = require('./controllers/verification');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// app.get('/', verificationController);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5500, () => console.log('Webhook server is listening, port 5500'));

// const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');
app.get('/', verificationController);
app.post('/', messageWebhookController);