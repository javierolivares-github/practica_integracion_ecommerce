import nodemailer from "nodemailer";
import envs from "../config/env.config.js";
import __dirname from "../../dirname.js";

export const sendMail = async (email, subject, message, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "codewithraccoon@gmail.com",
      pass: envs.GMAIL_PASS,
    },
    tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: "codewithraccoon@gmail.com",
    to: email,
    subject,
    text: message,
    html: template,
    attachments: [
      {
        filename: "gatito.jpg",
        path: __dirname + "/public/images/gatito.jpg",
        cid: "gatito",
      },
    ],
  });
};