"use client";

import { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import sendSubscriptionWelcomeEmail from "@/actions/newsLetterEmail";
import { Send, Loader2 } from "lucide-react";

const NewsLetterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await sendSubscriptionWelcomeEmail(name, email);

      if (response.success) {
        toast.success("You have successfully subscribed to the newsletter!");
        setName("");
        setEmail("");
      } else {
        toast.error(response.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-start gap-4">
      <div>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white font-nunito tracking-tight">
          Newsletter
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Get exclusive deals, new store alerts & updates delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white dark:bg-zinc-800/80 border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-white placeholder-slate-400 h-10 rounded-xl focus:border-customTeal focus:ring-1 focus:ring-customTeal transition-all text-sm shadow-sm"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white dark:bg-zinc-800/80 border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-white placeholder-slate-400 h-10 rounded-xl focus:border-customTeal focus:ring-1 focus:ring-customTeal transition-all text-sm shadow-sm"
        />
        <Button
          type="submit"
          disabled={loading}
          className="h-10 w-full bg-customTeal hover:bg-customTeal/90 text-white rounded-xl font-medium shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 transition-all text-sm flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Subscribe</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsLetterForm;
