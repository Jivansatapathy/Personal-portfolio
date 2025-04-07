require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize the server
const app = express();

// CORS configuration to allow frontend to make requests
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions)); // Enable CORS with the specified options
app.use(express.json()); // Parse incoming JSON requests

// Root route for server status check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Set up email transport using environment variables
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify the email transport setup
contactEmail.verify((error) => {
  if (error) {
    console.log("Error during email transport setup:", error);
  } else {
    console.log("Ready to Send emails");
  }
});

// Route to handle contact form submissions
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  // Define the mail options
  const mail = {
    from: name,
    to: "satapathyjjivan@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send message", error });
    } else {
      return res.status(200).json({ message: "Message sent successfully", info });
    }
  });
});

// Start the server
app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
