
import transporter from "./nodemailerConfig";

// Define the EmailOptions type
interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

// Define the sendEmail function
const sendEmail = async ({ to, subject, text, html }: EmailOptions) => {
  // Validate sender email is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[sendEmail] SMTP_USER or SMTP_PASS is not configured. Cannot send email.');
    throw new Error('SMTP credentials are not configured. Set SMTP_USER and SMTP_PASS environment variables.');
  }

  // Mail options object
  const mailOptions = {
    from: process.env.SMTP_USER, // Sender email address from environment variable
    to,                          // Recipient email
    subject,                     // Email subject
    text,                        // Plain text body (optional)
    html,                        // HTML body (optional)
  };

  try {
    console.log(`[sendEmail] Sending email to: ${to}, subject: "${subject}", from: ${process.env.SMTP_USER}`);
    // Send the email and return the response
    const info = await transporter.sendMail(mailOptions);
    console.log(`[sendEmail] Email sent successfully! MessageId: ${info.messageId}, Accepted: ${info.accepted}`);
    return info; // Contains messageId, accepted, rejected, etc.
  } catch (error: unknown) {
    const err = error as Error & { code?: string; responseCode?: number };
    // Provide detailed error messages for common issues
    if (err.code === 'EAUTH') {
      console.error('[sendEmail] SMTP Authentication Failed. Check SMTP_USER and SMTP_PASS. For Gmail, use an App Password (not your regular password).');
    } else if (err.code === 'ECONNREFUSED') {
      console.error('[sendEmail] SMTP Connection Refused. Check SMTP_HOST and SMTP_PORT settings.');
    } else if (err.code === 'ETIMEDOUT' || err.code === 'ESOCKET') {
      console.error('[sendEmail] SMTP Connection Timed Out. The SMTP server may be unreachable from this environment.');
    } else {
      console.error('[sendEmail] Error sending email:', err.message || err);
    }
    throw error; // Ensure error is rethrown for proper handling
  }
};

export default sendEmail;

