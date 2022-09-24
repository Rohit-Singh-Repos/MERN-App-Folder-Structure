const express = require("express");
const app = express();
const config = require("./config/config");
const connectToDB = require("./config/connection");
const router = require("./routes/routes");
const cors = require("cors")
const PORT = config.port;

// Connect to Database
connectToDB()

// Resolving CORS Issue
app.use(cors({origin:true}))

// parse incoming requests of content-type - application/json
app.use(express.json())

app.use(
    express.urlencoded({ extended: true })
);

// Creating Api Routes
app.get('/', (req, res) => res.send('Hello world!'));
app.use("/api",router)

app.listen(PORT,() => {
    console.log(`Server Running at http://localhost:${PORT}`)
})


