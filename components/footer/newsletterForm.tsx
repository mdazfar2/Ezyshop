import { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import sendSubscriptionWelcomeEmail from "@/actions/newsLetterEmail";

const NewsLetterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        // Validate inputs
        if (!name || !email) {
            toast.error("Please fill in both fields.");
            return;
        }

        setLoading(true);

        try {
            // Call the server action to handle subscription
            const response = await sendSubscriptionWelcomeEmail( name, email );

            if (response.success) {
                toast.success("You have successfully subscribed to the newsletter!");
                // Reset the form
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
        <div className="flex flex-col w-full lg:w-10/12 items-start py-4 lg:ml-10 lg:p-4 gap-5">
            <p className="font-bold text-3xl text-customTeal dark:text-Green font-handlee">
                News Letter
            </p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-start gap-5">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#f9f9f9] dark:bg-[#2f4f4f] text-gray-800 dark:text-gray-200 h-10 w-10/12"
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#f9f9f9] dark:bg-[#2f4f4f] text-gray-800 dark:text-gray-200 h-10 w-10/12"
                />
                <Button 
                    type="submit" 
                    disabled={loading} 
                    className="lg:h-14 bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 rounded-full w-10/12"
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </Button>
            </form>
        </div>
    );
}

export default NewsLetterForm;
