const connectDB = require('../db/db');
const Student = require('../models/students');

export default async function handler(req, res) {
    await connectDB();

    try {
        if (req.method === "GET") {
            const data = await Student.find();
            return res.status(200).json(data);
        }

        if (req.method === "POST") {
            const student = await Student.create(req.body);
            return res.status(201).json(student);
        }

        if (req.method === "PUT") {
            const { id } = req.query;
            const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
            return res.status(200).json(student);
        }

        if (req.method === "DELETE") {
            const { id } = req.query;
            await Student.findByIdAndDelete(id);
            return res.status(200).json({ message: "Deleted" });
        }

        res.status(405).json({ message: "Method not allowed" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
