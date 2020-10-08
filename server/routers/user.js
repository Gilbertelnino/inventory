import express from "express";
const router = express.Router();
import db from "../models/db";
import User from "../models/User";
import { UserController } from "../controllers/UserController";

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((error) => console.log(error));
});

router.post("/signup", UserController.createUser);

router.post("/login", UserController.loginUser);

export default router;
