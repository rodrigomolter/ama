import { useParams } from "react-router-dom";
import { Message } from "./message";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRoomMessages } from "../http/get-room-messages";

export function Messages(){
  const { roomId } = useParams()

  if (!roomId) {
    throw new Error("Messages component must be used within room page")
  }

  const { data } = useSuspenseQuery({
    queryKey: ['messages', roomId],
    queryFn: () => getRoomMessages({ roomId }),
  })

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data.messages.map(message => {
        return (
          <Message 
            key={message.id}
            text={message.text}
            amountOfReactions={message.amountOfReactions}
            answered={message.answered}
          />
        )
      })}
    </ol>
  )
}