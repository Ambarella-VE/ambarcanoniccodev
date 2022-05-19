// Modules
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const emoji = require("node-emoji");

const port = process.env.PORT || 8080;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Access static files
const staticFiles = express.static(path.join(__dirname, "../client/build"));
app.use(staticFiles);

// Start router
const router = express.Router();

// Use router
app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use("/*", staticFiles);

// Start server
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`${emoji.get('earth-americas')}Server Listening on port ${app.get("port")}`);
});
