const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Start Server (Only Once)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Nodemailer Transporter (Use Environment Variables)
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Load from environment variable
    pass: process.env.EMAIL_PASS,  // Load from environment variable
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email Error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Contact Form Route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`; // Fixes spacing issue

  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use environment variable
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email Send Error:", error);
      res.status(500).json({ error: "Email not sent" });
    } else {
      res.status(200).json({ message: "Message Sent Successfully!" });
    }
  });
});
