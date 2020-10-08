import express from "express";
import dotenv from "dotenv";
import db from "./models/db";
import user from "./routers/user";

dotenv.config();
const app = express();

//  db connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log("error", error));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "endpoint working successfully",
  });
});
app.use("/user", user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running  on port ${PORT}`));
