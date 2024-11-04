
"use server";


// Define the EmailOptions type
interface EmailOptions {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the sendContactEmail function as a server action
const sendContactEmail = async ({ name, email, subject, message }: EmailOptions) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Contact Form Submission: ${subject}`,
    text: `
      New contact form submission:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `,
    html: `
      <h2>New contact form submission:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    // Send the email and return the response
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default sendContactEmail;
