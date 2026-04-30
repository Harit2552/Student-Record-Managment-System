const express = require("express");
const Student = require("../models/students");

const router = express.Router();

router.get("/students", async (req, res) => {
    const data = await Student.find({});

    res.send(data);
})

router.get("/students/:id", async (req, res) => {
    const studId = req.params.id;

    const data =await Student.find(studId);

    res.send(data);
})

router.post("/students", async (req, res) => {

    const studId = await Student.create(req.body);

    Student.push(studId);

    await Student.save();
})

module.exports = router;


// GET /api/students Fetch all students
// POST /api/students Add a new student
// GET /api/students/:id Get one student by ID
// PUT /api/students/:id Update student details
// DELETE /api/students/:id Delete a student
