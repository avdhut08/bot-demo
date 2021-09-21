import { fakeMessages } from './fake-messages'

export const messageService = {
  createMessage
}

function createMessage (text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let randomNumber = Math.floor(Math.random() * fakeMessages.length)
      let randomNumber = fakeMessages.find(msg => msg.que === text)
      resolve(randomNumber)
    }, 1000)
  })
}
