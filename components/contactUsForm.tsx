"use client";
import sendContactEmail from "@/actions/send-contactEmail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true); // Set loading to true when the form is submitted

    try {
      await sendContactEmail(formData);
      // console.log(response);
      toast.success("Your message has been sent successfully!"); // Success message
    } catch (error) {
      // console.error(error);
      toast.error("There was an error sending your message. Please try again."); // Error message
    } finally {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      setLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center text-gray-200 lg:px-10 flex-col justify-center gap-5 md:py-8 py-4"
    >
      <Toaster /> {/* Render the Toaster component */}
      <h1 className="md:text-2xl text-lg font-nunito text-customTeal dark:text-[#75c364] mb-2 font-semibold">
        Have a question or need assistance?
      </h1>

      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Name"
      />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Email"
      />
      <Input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Subject"
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        rows={5}
        placeholder="Message"
      />
      <Button
        type="submit"
        variant="default"
        size="lg"
        className={`bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 md:mt-5 mb-10 lg:mb-0 text-sm md:text-md rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable the button while loading
      >
        {loading ? "Sending..." : "Send Message"} {/* Change button text based on loading state */}
      </Button>
    </form>
  );
};

export default ContactUsForm;
