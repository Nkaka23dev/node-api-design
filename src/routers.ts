import { Router } from "express";

const router = Router();

router.get("/products", (req: any, res: any) => {
  res.json({
    "Augmented Request Found": req.shhhh,
  });
});

router.post("/products/:id", () => {});

export default router;
