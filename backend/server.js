const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));


app.use(express.json());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Handle contact form submissions
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    res.status(201).json({ message: "Form submitted successfully!", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
