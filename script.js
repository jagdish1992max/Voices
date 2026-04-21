async function generate(){

const text=document.getElementById("text").value

const res=await fetch("/api/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({text})
})

const blob=await res.blob()

document.getElementById("audio").src=URL.createObjectURL(blob)

}
