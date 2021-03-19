let messages = []

fetch('http://localhost:7070/messages/unread')
  .then(response => response.json())
  .then(data => console.log(data.messages))

  console.log(messages)