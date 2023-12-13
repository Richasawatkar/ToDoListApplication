import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const list = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function toAddList(req, res, next) {
    const item2 = req.body["item"];
    if (item2 && item2.trim() !== "") {
        list.push(item2.trim());
    }
    next();
}

app.use(toAddList);

app.get("/", (req, res) => {
    res.render("index.ejs", { item: list });
});

app.post("/submit", (req, res) => {
    // Handle the form submission and redirect to the home page
    console.log(list);
    res.redirect("/");
});

app.get("/today", (req, res) => {
    res.render("today.ejs", { item: list });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { item: list });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

