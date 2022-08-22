const app = require('express')();

const PORT = 8888;

app.listen(
    PORT,
    console.log(`server is running on ${PORT}`)
)

app.get('/hey', (res, req) =>{
    res.send("hey")
})