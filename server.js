const express=require("express")
const fetch=require("node-fetch")

const app=express()

app.use(express.json())
app.use(express.static(__dirname))

const API_KEY = process.env.ELEVEN_API_KEY"

app.post("/generate",async(req,res)=>{

const text=req.body.text

const response=await fetch("https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",{

method:"POST",

headers:{
"xi-api-key":API_KEY,
"Content-Type":"application/json"
},

body:JSON.stringify({
text:text,
model_id:"eleven_monolingual_v1"
})

})

const audio=await response.arrayBuffer()

res.set("Content-Type","audio/mpeg")
res.send(Buffer.from(audio))

})

app.listen(3000,()=>console.log("Server running"))
