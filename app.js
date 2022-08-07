const express = require("express");
const app = express();
const path = require("path")
const conn = require('./db/conn')
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const port = process.env.PORT || 3000;



const staticpath = path.join(__dirname, ("../public"));
const templatepath = path.join(__dirname, ("../src/views"));
const partialpath = path.join(__dirname, ("../partials"));
console.log(templatepath)
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('style', express.static(path.join(__dirname, "../src/style/style.css")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))



app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath)

// const viewspath = path.join(__dirname, "../views");
// app.set("views", viewspath, )
// console.log(viewspath),



app.get("/", (req, res) => {
    res.render("index")
})
app.get("/contacts",(req,res)=>{
    res.render("contact")
})

app.get("/", (req, res) => {
    res.send('hi uys')
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})