const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Connect to MongoDB

mongoose
.connect("mongodb+srv://pandey22pranjali:4EgFe9W8mE6FhmhK@cluster0.04vbpm9.mongodb.net/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected…"))
.catch((err) => console.error("MongoDB connection error:", err));


// Define a student schema
const studentSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  semester1: { type: Number, required: true },
  semester2: { type: Number, required: true },
  semester3: { type: Number, required: true },
  cgpa: { type: Number, required: true },
});

// Create a student model
const Student = mongoose.model("Student", studentSchema);

app.use(express.json());

// GET - List all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// GET - Details of a specific student by UID
app.get("/students/:uid", async (req, res) => {
  try {
    const student = await Student.findOne({ uid: req.params.uid });
    if (student) {
      res.json(student);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// POST - Add a new student
app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.send("Student added");
  } catch (error) {
    res.status(400).send("Bad Request");
  }
});

// PUT - Modify information of a student by UID
app.put("/students/:uid", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { uid: req.params.uid },
      req.body,
      { new: true }
    );
    if (updatedStudent) {
      res.send("Student updated");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// PATCH - Update information of a student by UID
app.patch("/students/:uid", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { uid: req.params.uid },
      req.body,
      { new: true }
    );
    if (updatedStudent) {
      res.send("Student updated");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// DELETE - Remove a student by UID
app.delete("/students/:uid", async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      uid: req.params.uid,
    });
    if (deletedStudent) {
      res.send(`Student with UID ${req.params.uid} deleted`);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/*", (req, res) => {
  res.send("You are on the wrong route. Here's the list of possible routes");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
