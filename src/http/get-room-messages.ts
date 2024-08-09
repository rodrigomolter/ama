interface GetRoomMessagesRequest {
  roomId: string
}

export async function getRoomMessages({ roomId }: GetRoomMessagesRequest) {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_ENDPOINT}/api/rooms/${roomId}/messages `)

  const data: Array<{
    ID: string
    RoomID: string
    Message: string
    ReactionCount: number
    Answered: boolean
  }> = await response.json()

  return {
    messages: data.map(messages => {
      return {
        id: messages.ID,
        text: messages.Message,
        amountOfReactions: messages.ReactionCount,
        answered: messages.Answered,
      }
    })
  }
}