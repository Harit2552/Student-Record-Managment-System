const express = require("express");
const Student = require("../models/students");

const router = express.Router();

router.get("/students", async (req, res) => {
    const data = await Student.find({});
    res.json(data);
});

router.get("/students/:id", async (req, res) => {
    const data = await Student.findById(req.params.id);
    res.json(data);
});

router.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

router.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

router.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

module.exports = router;
