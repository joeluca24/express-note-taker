const path = require("path");

module.exports = (app) => {

    // setup homepage
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //setup notes page
    app.get("/notes", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

}