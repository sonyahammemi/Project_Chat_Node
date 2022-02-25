const express = require ('express');
const cors = require ('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1353078",
  key: "7eea952f1003fc3d6667",
  secret: "f87b777a7f1ec87a127c",
  cluster: "mt1",
  useTLS: true
});

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200' ]   
    
}))

app.use(express.json())

app.post('/api/messages', async(req,res) => { 
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });
    res.json([])
})


console.log('listening to port 8000');
app.listen(8000)





