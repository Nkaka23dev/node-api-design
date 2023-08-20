import express from "express";
import router from "./routers";
import { createNewUser, signInUser } from "./handlers/user";
import { protect } from "./modules/auth";

export const app = express();
app.use(express.json());

app.use((req: any, res: any, next) => {
  req.shhhh = "THIS IS THE AUGMENTED REQUEST";
  console.log("HERE WE GOT SOME MIDDLEWARE");
  next();
});

app.get("/", (req: any, res: any) => {
  res.status = 200;
  res.json({ message: "data from databsae" });
});

app.use("/api", protect, router);

app.post("/signup", createNewUser);
app.post("/signin", signInUser);
