import express from "express"
import router from "./router";

const app = express();

app.use((req: any, res: any, next) => {
    req.shhhh_secret =  "Doggy";
    next();
})

app.get('/', (req: any, res: any) => {
    res.status = 200;
    res.json({ "Data": "PRISMA DATA IS NOW SETTED" })
});

app.use("/api", router)

export default app;
