const express = require ("express");

// Tells node that we are creating an "express" server

const app = express();






// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");

const htmlRoutes = require("./routes/htmlRoutes");

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
});