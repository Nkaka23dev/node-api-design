import { Router } from "express";

const router = Router();

// Products routes starts here

router.get("/products", (req: any,res) => {
    res.json({
        "Message": req.shhhh_secret
    })
});
router.get("/products/:id", () => {});
router.put("/products/:id", () => {});
router.post("/products", () => {});
router.put("/products/:id", () => {});
router.delete("/products/:id", () => {});

// Updates routes are here

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put("/update/:id", () => {});
router.delete("/update", () => {});

// Products routes starts here

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint", () => {});


export default router;