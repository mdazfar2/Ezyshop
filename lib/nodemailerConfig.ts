
import nodemailer from "nodemailer";

// Validate required SMTP env vars at module load
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_SECURE = process.env.SMTP_SECURE === "true"; // false for port 587 (STARTTLS)
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_USER || !SMTP_PASS) {
  console.error(
    "[Nodemailer] WARNING: SMTP_USER or SMTP_PASS environment variables are missing! OTP emails will NOT be sent."
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  // Fast timeouts suited for serverless functions
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 8000,
});

export default transporter;

