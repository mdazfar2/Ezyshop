"use server"
import prismadb from "@/lib/prismadb";
import { Chat } from "@prisma/client";

export type ChatResponse = {
  success: boolean;
  data?: Chat;
  error?: string;
};


export async function createChat(
    userId: string,
    sellerId: string,
    productId: string,
    initialMessage: string
  ): Promise<ChatResponse> {
    try {
      const newChat = await prismadb.chat.create({
        data: {
          userId,
          sellerId,
          productId,
          messages: {
            create: {
              senderId: userId,
              content: initialMessage,
            },
          },
        },
      });
      return { success: true, data: newChat };
    } catch (error) {
      console.error("Error creating chat:", error);
      return { success: false, error: "Failed to create chat" };
    }
  }