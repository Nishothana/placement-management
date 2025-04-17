const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());

// Storage setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// File upload route
app.post("/upload-placement", upload.single("placementFile"), (req, res) => {
  const year = req.body.year;
  const fileName = req.file.filename;

  // Here, save `year` and `fileName` into a DB (e.g., JSON, SQLite)
  console.log(`File uploaded for ${year}: ${fileName}`);

  res.send("File uploaded successfully");
});

// Show uploaded files (GET list)
app.get("/placement-files", (req, res) => {
  // You'd fetch file info from DB, here's dummy data:
  res.json([
    { year: "2019-2023", file: "assets/Placement Details 2023.pdf" },
    { year: "2020-2024", file: "assets/Placement Details 2024.pdf" }
  ]);
});

app.listen(3000, () => console.log("Server started on port 3000"));
