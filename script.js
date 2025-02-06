let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let joke=await getJokes();
    let p=document.querySelector("#result");
    p.innerText=joke;
});

let url="https://v2.jokeapi.dev/joke/Any?safe-mode";
async function getJokes(){
    try{
        let res=await axios.get(url);
        return res.data.joke;
    } catch(e){
        console.log("error -",e);
        return "No found";
    }
}