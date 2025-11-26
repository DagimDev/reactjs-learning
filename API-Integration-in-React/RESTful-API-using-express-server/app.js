const express = require("express");
const app = express();

app.listen(3333, () => {
    console.log("Server listening at port 3333")
})

app.get('/female', (req, res) => {
    res.send({
        name: "Alem",
        age: 33,
    })
})