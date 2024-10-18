// pages/terms-and-conditions.tsx
import { NextPage } from 'next';
import SeperatorHeading from "@/components/ui/seperatorHeading";

const Terms: NextPage = () => {
  return (
    <>
      <div className="h-full mb-[50px]">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full pb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
            Terms and Conditions</div>
        </div>
      </div>
      <SeperatorHeading label="Read Terms and Conditions here" />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-2">1. General Terms</h2>
        <p className="mb-4">
          EzyShop reserves the right to change these terms at any time. We will notify users of major updates, but it is your responsibility to regularly check for any updates.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Acceptance of Terms</h2>
        <p className="mb-4">
        By browsing, accessing, or purchasing products from Ezyshop, you acknowledge that you have read, understood, and agree to abide by these terms. If you do not agree, please refrain from using our site.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
        You agree to use Ezyshop only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else use and enjoyment of the website. You must not post or transmit any content that is unlawful, harmful, or otherwise objectionable. Unauthorized use of our site may result in suspension or termination of your account.
        </p>

        <h2 className="text-2xl font-bold mb-2">4. Account Responsibilities</h2>
        <p className="mb-4">
        To make purchases or access certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password. All activities that occur under your account are your responsibility.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Order Placement</h2>
        <p className="mb-4">
        Placing an order through Ezyshop signifies your intent to purchase a product. All orders are subject to acceptance and availability. We reserve the right to cancel any order for any reason, including issues with inventory or fraudulent activity.


        </p>

        <h2 className="text-2xl font-bold mb-2">6. Payment Terms</h2>
        <p className="mb-4">
        All payments made through EzyShop are processed securely. However, it is your responsibility to ensure that the payment information you provide is accurate and complete.
        </p>

        <h2 className="text-2xl font-bold mb-2">7. Return and Refund Policy</h2>
        <p className="mb-4">
        Items purchased through EzyShop may be returned under certain conditions outlined in our return policy.Customers are required to initiate returns within the specified time frame and meet all conditions outlined in our return policy. Please review our full return policy for further details.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. Intellectual Property</h2>
        <p className="mb-4">
          All content provided on EzyShop is owned by us or our licensors. You may not copy, distribute, or use the content for commercial purposes without our permission.
        </p>

        <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions regarding these Terms and Conditions, please contact us at <a href="https://ezyshopz.vercel.app/" className='text-black dark:text-white hover:text-blue-700 no-underline'>EzyShop</a>
        </p>
      </div>
    </>
  );
};

export default Terms;
