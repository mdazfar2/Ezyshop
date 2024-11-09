import { MessageResponse } from "./editMessage";
import prismadb from "@/lib/prismadb";


export async function deleteMessage(
    senderId: string,
    messageId: string
  ): Promise<MessageResponse> {
    try {
      const message = await prismadb.message.findUnique({ where: { id: messageId } });
      if (!message || message.senderId !== senderId) {
        return { success: false, error: "Message not found or sender mismatch" };
      }
      await prismadb.message.delete({ where: { id: messageId } });
      return { success: true, data: message };
    } catch (error) {
      console.error("Error deleting message:", error);
      return { success: false, error: "Failed to delete message" };
    }
  }
  