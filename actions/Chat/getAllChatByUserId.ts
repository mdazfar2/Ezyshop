import prismadb from "@/lib/prismadb";
import { Chat } from "@prisma/client";


export type ChatsResponse = {
    success: boolean;
    data?: Chat[];
    error?: string;
  };
  

export async function getAllChatsByUserId(userId: string): Promise<ChatsResponse> {
    try {
      const chats = await prismadb.chat.findMany({
        where: { userId },
        include: { messages: true },
      });
      return { success: true, data: chats };
    } catch (error) {
      console.error("Error fetching chats for user:", error);
      return { success: false, error: "Failed to fetch chats for user" };
    }
  }
  