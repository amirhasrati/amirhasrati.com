// Require express
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

const getDailyQuote = async () => {
    try {
        const res = await axios.get("https://zenquotes.io/api/today");
        return res.data[0];
    } catch (err) {
        console.log(err);
    }
};

// Serve the contents of the public directory
app.use(express.static(path.join(__dirname, "public")));

// Set ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
    res.redirect("/home");
});

// Home page
app.get("/home", async (req, res) => {
    const { q, a } = await getDailyQuote();
    res.render("home", { q, a });
});

// Projects
// app.get("/projects", (req, res) => {
//     res.render("projects");
// });

// Roadmap
app.get("/roadmap", (req, res) => {
    res.render("roadmap");
});

// About
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// Contact
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use((req, res) => {
    res.render("404");
});

// Port
app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});


