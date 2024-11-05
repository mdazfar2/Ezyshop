"use server"
import prismadb from "@/lib/prismadb";
import sendEmail from "@/lib/sendEmail";

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendSubscriptionWelcomeEmail(name: string, email: string) {
  try {
    // Check if email is already in the newsletter table
    const existingSubscription = await prismadb.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      return {
        success: false,
        message: "This email is already subscribed to the EzyShop newsletter.",
      };
    }

    // Customize welcome email with user's name
    const subject = `Hi ${name}, Welcome to EzyShop!`;
    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #ff6600;">EzyShop</h1>
        <h2>Welcome to the EzyShop Family, ${name}! 🎉</h2>
        <p>We're thrilled to have you with us! 🛍️</p>
        <p>Hi ${name},</p>
        <p>Thank you for subscribing to the EzyShop Newsletter! 🎉 We're excited to bring you exclusive offers, updates, and insights from the world of e-commerce.</p>
        
        <p>As a subscriber, you’ll enjoy:</p>
        <ul>
          <li>🌟 <strong>Exclusive Deals</strong>: Be the first to know about exclusive deals and discounts on our latest products!</li>
          <li>🛒 <strong>Shopping Guides</strong>: Get tips and insights to make the most out of your shopping experience at EzyShop.</li>
          <li>💌 <strong>Curated Product Recommendations</strong>: Discover curated collections tailored to your interests.</li>
        </ul>

        <p>We’re committed to bringing you the best shopping experience and valuable content to enhance your journey with us.</p>

        <p>If you have any questions, suggestions, or topics you'd like us to cover, feel free to reach out. Your feedback is invaluable, and we’re looking forward to growing together!</p>

        <p>Stay tuned for our next update!</p>

        <p>Best regards,</p>
        <p><strong>The EzyShop Team 🛒</strong></p>

        <p>Follow us on our Socials:</p>
        <ul>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>

        <p>©️ EzyShop</p>
      </div>
    `;

    const emailResponse = await sendEmail({
      to: email,
      subject,
      html,
    });

    // Insert the email and name into the newsletter table if email sent successfully
    await prismadb.newsletter.create({
      data: { email, name },
    });

    return {
      success: true,
      message: "Welcome email sent successfully, and user subscribed to the newsletter.",
      emailResponse,
    };
  } catch (error) {
    console.error("Failed to send subscription welcome email:", error);
    return {
      success: false,
      message: "An error occurred while subscribing to the newsletter.",
    };
  }
}

export default sendSubscriptionWelcomeEmail;
