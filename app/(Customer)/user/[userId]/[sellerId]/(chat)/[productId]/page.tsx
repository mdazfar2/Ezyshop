"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner"; // Assuming you have a Spinner component
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCardChatPage from "./components/productCardChatPage";

interface messageProps{
  senderId:string,
  content:string
}

interface chatProps{
  userId:string,
  sellerId:string,
  productId:string,
  messages:messageProps[]
}

const ChatPage = () => {
  const params = useParams<{
    userId: string;
    sellerId: string;
    productId: string;
  }>();

  const { userId, sellerId, productId } = params;
  const [chat, setChat] = useState<chatProps>(); // Holds the chat data
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!userId || !sellerId || !productId) {
      setIsLoading(false);
      console.log("control2");

      return;
    }
    console.log("control2");
    const fetchChat = async () => {
      try {
        const res = await fetch("/data/chat.json");
        const data = await res.json();

        const foundChat = data.chats.find(
          (chat: chatProps) =>
            chat.userId === userId &&
            chat.sellerId === sellerId &&
            chat.productId === productId
        );
        console.log(foundChat);

        if (foundChat) {
          setChat(foundChat);
        } else {
          setChat({
            userId,
            sellerId,
            productId,
            messages: [],
          });
        }
      } catch (error) {
        setError("Failed to load chat.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChat();
  }, [userId, sellerId, productId]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setSending(true);
    try {
      if (!chat) {
        toast.error("Error creating chat");
      } else {
        const updatedChat = {
          ...chat,
          messages: [...chat.messages, { senderId: userId, content: message }],
        };
        setChat(updatedChat);
      }
      setMessage("");
    } catch (error) {
      setError("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[url('/chatbgLight.png')] dark:bg-[url('/chatbg.png')] min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center w-full max-w-5xl">
        {/* Product Info */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-xl w-full md:w-3/4">
          <ProductCardChatPage
            id="3"
            // isStatic={true}
            name="Pizza"
            price={400}
            description="fresh pizza"
            images={[
              {
                productId: "product1",
                id: "image1",
                url: "/food1a.jpeg",
                createdAt: new Date("2024-01-01T10:00:00Z"),
                updatedAt: new Date("2024-01-01T10:00:00Z"),
              },
              {
                productId: "product1",
                id: "image2",
                url: "/food1b.jpeg",
                createdAt: new Date("2024-01-01T10:00:00Z"),
                updatedAt: new Date("2024-01-01T10:00:00Z"),
              },
            ]}
          />
        </div>

        {/* Chat Box */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-xl w-full md:w-3/4">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
            Chat with Seller
          </h1>

          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          {/* Chat Messages */}
          <div className="bg-white p-4 rounded-lg shadow-md space-y-4 max-h-64 md:max-h-96 overflow-y-auto">
            {chat ? (
              chat.messages.length > 0 ? (
                chat.messages.map((msg: messageProps, index: number) => (
                  <div
                    key={index}
                    className={
                      msg.senderId === userId ? "text-right" : "text-left"
                    }
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        msg.senderId === userId
                          ? "bg-customTeal dark:bg-Green text-white"
                          : "bg-gray-300 text-black"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No messages yet. Start a conversation!
                </p>
              )
            ) : (
              <p className="text-center text-gray-600">Loading chat...</p>
            )}
          </div>

          {/* Message Input */}
          <div className="flex mt-4 md:mt-6 items-center space-x-2 md:space-x-4">
            <Input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 py-2 md:py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button
              onClick={handleSendMessage}
              disabled={sending}
              className="bg-customTeal dark:bg-Green text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-customBlue transition"
            >
              {sending ? "Sending..." : "Send"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

// useEffect(() => {
//     if (!userId || !sellerId || !ProductId) {
//       setIsLoading(false);
//       return; // Wait for query params
//     }

//     const fetchChat = async () => {
//       try {
//         const { success, data, error } = await getSpecificChat(
//           userId as string,
//           sellerId as string,
//           ProductId as string
//         );
//         if (success) {
//           setChat(data);
//         } else {
//           if (!error) {
//             toast.error('error');
//             return;
//           }
//           toast.error(error);
//         }
//       } catch (error) {
//         setError('Failed to load chat.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchChat();
//   }, [userId, sellerId, ProductId]);

//   const handleSendMessage = async () => {
//     if (!message.trim()) return;

//     setSending(true);
//     try {
//       if (!chat) {
//         // Create a new chat if it doesn't exist
//         const { success, data, error } = await createChat(
//           userId as string,
//           sellerId as string,
//           ProductId as string,
//           message
//         );
//         if (success) {
//           setChat(data);
//         } else {
//           if (!error) {
//             toast.error('error');
//             return;
//           }
//           toast.error(error);
//         }
//       } else {
//         // Add message to the existing chat
//         const updatedChat = {
//           ...chat,
//           messages: [...chat.messages, { senderId: userId, content: message }],
//         };
//         setChat(updatedChat);
//       }
//       setMessage(''); // Clear message input
//     } catch (error) {
//       setError('Failed to send message');
//     } finally {
//       setSending(false);
//     }
//   };
