async function generateVoice(){

const text=document.getElementById("text").value
const voice=document.getElementById("voice").value
const stability=document.getElementById("stability").value
const similarity=document.getElementById("similarity").value
const style=document.getElementById("style").value
const speed=document.getElementById("speed").value

const apiKey="YOUR_API_KEY"

const response=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}`,{
method:"POST",
headers:{
"xi-api-key":apiKey,
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text,
voice_settings:{
stability:parseFloat(stability),
similarity_boost:parseFloat(similarity),
style:parseFloat(style),
speed:parseFloat(speed)
}
})
})

const blob=await response.blob()
const url=URL.createObjectURL(blob)

document.getElementById("audio").src=url

}
