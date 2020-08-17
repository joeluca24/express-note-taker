let db = require("../db/db.json");

module.exports = (app) => {
    // creates notes, req has a body with information
 app.post("/api/notes",(req, res) =>{
     console.log(req.body)
     let note = req.body;
     // add an id
     note.id = Math.floor(Math.random() * 240000);
    // push item into db array
    db.push(note)
    res.json(true)
 })   

 app.get("/api/notes",(req,res) =>{
     res.json(db)

 })
app.delete("/api/notes/:id",(req,res)=>{
    console.log(req.params.id);
    // db.filter( note => note.id === req.params.id) // --> gets exactly that record
    db = db.filter( note => note.id != req.params.id) // --> gets everything but that record... deletes it
    res.json(true);
})
}
