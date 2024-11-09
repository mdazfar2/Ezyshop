import prismadb from "@/lib/prismadb";
import { ChatsResponse } from "./getAllChatByUserId";

export async function getAllChatsBySellerId(sellerId: string): Promise<ChatsResponse> {
    try {
      const chats = await prismadb.chat.findMany({
        where: { sellerId },
        include: { messages: true },
      });
      return { success: true, data: chats };
    } catch (error) {
      console.error("Error fetching chats for seller:", error);
      return { success: false, error: "Failed to fetch chats for seller" };
    }
  }