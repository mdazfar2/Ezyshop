import prismadb from "@/lib/prismadb";
import { Message } from "@prisma/client";


export type MessageResponse = {
    success: boolean;
    data?: Message;
    error?: string;
  };

  

export async function editMessage(
    senderId: string,
    messageId: string,
    newContent: string
  ): Promise<MessageResponse> {
    try {
      const message = await prismadb.message.findUnique({ where: { id: messageId } });
      if (!message || message.senderId !== senderId) {
        return { success: false, error: "Message not found or sender mismatch" };
      }
      const updatedMessage = await prismadb.message.update({
        where: { id: messageId },
        data: { content: newContent },
      });
      return { success: true, data: updatedMessage };
    } catch (error) {
      console.error("Error updating message:", error);
      return { success: false, error: "Failed to update message" };
    }
  }