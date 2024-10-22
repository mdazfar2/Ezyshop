// pages/terms-and-conditions.tsx
import { NextPage } from 'next';
import SeperatorHeading from "@/components/ui/seperatorHeading";

const Policy: NextPage = () => {
  return (
    <>
      <div className="h-full mb-[50px]">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full pb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
            Privacy and Policy</div>
        </div>
      </div>
      <SeperatorHeading label="About privacy and policy" />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
        <p className="mb-4">
        At EzyShop, your privacy is a top priority. We are committed to protecting your personal information and respecting your privacy rights. This Privacy Policy outlines how we collect, use, and protect your data when you visit or make a purchase from our website.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Information We Collect
        </h2>
        <p className="mb-4">
        We collect personal information that you voluntarily provide when using our website, such as your name, email address, billing and shipping details, and payment information. Additionally, we may collect non-personal data like browser type, device details, and usage patterns to improve our services.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. How We Use Your Information</h2>
        <p className="mb-4">
        Your information is used to provide you with the best shopping experience. Specifically, we use your data to:

        Process and fulfill your orders.
        Personalize your experience on our site.
        Communicate updates and offers that may interest you.
        Improve our website functionality and performance.

        </p>

        <h2 className="text-2xl font-bold mb-2">4. Data Sharing</h2>
        <p className="mb-4">
        We do not sell or rent your personal information. However, we may share your data with trusted third-party service providers (such as payment processors and shipping companies) to complete your transactions. All third parties are bound by confidentiality agreements and data protection laws.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Cookies
        </h2>
        <p className="mb-4">
        We use cookies to enhance your browsing experience. Cookies allow us to remember your preferences, track your browsing habits, and provide you with a personalized experience. You can control or disable cookies through your browser settings, but this may affect your experience on our website.


        </p>

        <h2 className="text-2xl font-bold mb-2">6. Data Security
        </h2>
        <p className="mb-4">
        We take reasonable precautions to protect your personal information. We implement appropriate technical and organizational measures to ensure your data is secure and protected from unauthorized access, alteration, or disclosure.


        </p>

        <h2 className="text-2xl font-bold mb-2">7. Your Rights
        </h2>
        <p className="mb-4">
        You have the right to access, correct, or delete your personal information at any time. If you would like to exercise these rights or if you have any questions regarding our Privacy Policy, please contact us.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. Changes to the Policy</h2>
        <p className="mb-4">
        We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. You are encouraged to review this policy regularly to stay informed about how we protect your information.


        </p>

        <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
        <p className="mb-4">
        If you have any questions or concerns regarding this Privacy Policy, please feel free to contact us at <a href="https://ezyshopz.vercel.app/" className='text-black dark:text-white hover:text-blue-700 no-underline'>EzyShop</a>
        </p>
      </div>
    </>
  );
};

export default Policy;
