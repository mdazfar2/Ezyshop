"use server"
import prismadb from "@/lib/prismadb";
import { ChatResponse } from "./createChat";

export async function getSpecificChat(
    userId: string,
    sellerId: string,
    productId: string
  ): Promise<ChatResponse> {
    try {
      const chat = await prismadb.chat.findFirst({
        where: { userId, sellerId, productId },
        include: { messages: true },
      });
      if (!chat) {
        return { success: false, error: "Chat not found" };
      }
      return { success: true, data: chat };
    } catch (error) {
      console.error("Error fetching chat:", error);
      return { success: false, error: "Failed to fetch chat" };
    }
  }