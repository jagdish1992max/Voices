export default async function handler(req,res){

const {text}=req.body

const response=await fetch(
"https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",
{
method:"POST",
headers:{
"xi-api-key":process.env.ELEVEN_API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text,
model_id:"eleven_monolingual_v1"
})
})

const audio=await response.arrayBuffer()

res.setHeader("Content-Type","audio/mpeg")

res.send(Buffer.from(audio))

}
