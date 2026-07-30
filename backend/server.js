const express = require("express");

const app = express();

app.use(express.json());

app.post("/", (req, res) => {

    console.log("Request Body:");
    console.log(req.body);

    res.json({
        message: `Thank you, ${req.body.name}!`,
        feedback: req.body.message
    });

});

app.listen(5500, () => {
    console.log("Server running on port 5500");
});