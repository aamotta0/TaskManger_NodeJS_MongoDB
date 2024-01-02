const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./database/connect');
require("dotenv").config();

//  Middleware

/* 
this line of code configures Express to serve static files from the public folder. When a client makes a request to the corresponding path, Express will look for and serve static files from that folder if they exist. This is useful for serving static resources such as HTML files, images, CSS styles and JavaScript scripts through the web application.
*/
app.use(express.static("./public/"));
app.use(express.json());

// Routes 
app.get("/hello", (req, res) => {
    res.send("¡Task Manager App! 🚀");
});

app.use("/api/v1/tasks", tasks);


// connect 
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}...🚀`));
    } catch (error) {
        console.log(error);
    }
};

start();