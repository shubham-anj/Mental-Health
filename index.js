const express = require("express");
const path = require("path");
const authRoutes = require("./routes/user.js");


const app = express();
const PORT = 3000 ;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views" , path.resolve("./views"));

app.get("/" , (req , res) => {
  res.render("home");
});

app.use("/user", authRoutes);


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
