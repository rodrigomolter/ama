interface CreateRoomRequest {
  theme: string
}

export async function createRoom({ theme }: CreateRoomRequest) {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_ENDPOINT}/api/rooms`, {
    method: 'POST',
    body: JSON.stringify({
      theme,
    })
  })

  const data: { id: string } = await response.json()

  return { roomId: data.id }
}