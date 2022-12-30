const express = require('express') // Nạp express
const app = express() // Khi gọi hàm này thì sẽ trả ra 1 object 
const port = 3000

app.get('/', (req, res) => { // định nghĩa đoạn URL, ví dụ: google.com/condeptrai
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})