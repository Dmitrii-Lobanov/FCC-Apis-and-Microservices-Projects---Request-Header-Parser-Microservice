let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
let useragent = require("express-useragent");

let app = (module.exports = express());
app.use(bodyparser.json());
app.use(cors());
app.use(useragent.express());

let api = "/api/whoami";

app.get(api, (req, res, next) => {
	let language = req.acceptsLanguages();
	let software =
		"OS: " + req.useragent.os + ", Browser" + req.useragent.browser;
	let ipaddress = req.ip;

	res.json({ ipaddress: ipaddress, language: language[0], software: software });
});

app.listen(3000, () => console.log("It works"));
