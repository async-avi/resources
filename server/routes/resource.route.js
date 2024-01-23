import { Router } from "express";
import { Resource } from "../db/index.js";

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const allResources = await Resource.find({});
    res.status(200).json(allResources);
  } catch (error) {}
});

router.post("/new", async (req, res) => {
  try {
    await Resource.create({
      title: req.body.title,
      category: req.body.category,
      type: req.body.type,
      url: req.body.url,
    });
    res.status(200).json({ json: "New resource created" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
