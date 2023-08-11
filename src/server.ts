import express from "express";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signInUser } from "./handlers/user";

const app = express();
app.use(express.json());

app.use((req: any, res: any, next) => {
  req.shhhh_secret = "augmented request";
  next();
});

app.get("/", (req: any, res: any) => {
  res.status = 200;
  res.json({ Data: "PRISMA DATA IS NOW SET" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signInUser);

export default app;
