let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>
// {
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>
// {
//    return res.json(); 
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// });

async function getFacts()
{
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
    }
    catch(err)
    {
        console.log("Error",err);
    }
}