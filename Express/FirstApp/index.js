const express = require('express');
const app = express()


app.use( () => {
    console.log("New Req")
})

app.listen(3000, () => {
    console.log("Listning")
})
