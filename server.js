const express = require('express');
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.REACT_APP_USER, // Your Gmail address
    pass: process.env.REACT_APP_PSWD, // Your Gmail password or app password
  },
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: {
      name: `${firstName} ${lastName}`,
      address: email,
    },
    to: process.env.REACT_APP_USER, // Your email address where you want to receive the form data
    subject: `New Contact Message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.stack);
    res.status(500).json({ code: 500, message: "Something went wrong, please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
