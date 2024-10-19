
import transporter from "./nodemailerConfig";

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const sendEmail = async ({ to, subject, text, html }: EmailOptions) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail;
