import express from "express"


const app = express();

app.get('/', (req: any, res: any) => {
    res.status = 200;
    res.json({ "Data": "PRISMA DATA IS NOW SETTED" })
});


export default app;
