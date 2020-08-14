const express = require("express");
const PORT = process.env.PORT || 8080;
const path = require('path')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname+ "/public")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, function() {
    console.log(`App listening on port ${8080}!`);
});