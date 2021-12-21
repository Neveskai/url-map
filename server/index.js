const express = require('express');
const cors = require('cors');
const PDO = require('./src/services/PDO.js');
const app = express();

const UserService = require('./src/services/user/UserService');
const MailService = require('./src/services/mailing/MailService');
const UrlsService = require('./src/services/url-shorter/UrlShorterService');

app.set('PDO', PDO)
app.use(express.json())
app.use(cors())

var userService = new UserService(app);
var mailService = new MailService(app);
var urlsService = new UrlsService(app);

app.listen(3001, () => {
  console.log('Backend server running at: http://localhost:3001')
});
