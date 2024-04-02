import ollama, { ChatResponse } from 'ollama'

async function iterateResponse (this: any, fn: (resp: ChatResponse) => void) {
  const result    = []
  const response  = await this

  // eslint-disable-next-line no-restricted-syntax
  for await (const part of response)
    result.push(fn(part))

  return result
}

export default function chat () {
  const message = {
    role: 'user',
    content: 'Why is the sky blue?'
  }

  const response = ollama.chat({
    model: 'llama2-uncensored',
    messages: [ message ],
    stream: true
  })

  const forEachChunkDescriptor = {
    value: iterateResponse.bind(response)
  }
  Object.defineProperty(response, 'forEachChunk', forEachChunkDescriptor)

  return response
}
