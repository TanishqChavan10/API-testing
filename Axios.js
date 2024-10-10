// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=> {
//     let link=await getImg();
//     let img=document.querySelector("#res");
//     img.setAttribute("src",link);
//     console.log(link);
// });
// // let btn=document.querySelector("button");
// // btn.addEventListener("click",async ()=> {
// //     let fact=await getFacts();
// //     console.log(fact);
// //     let p=document.querySelector("#res");
// //     p.innerText=fact;
// // });
// //let url="https://catfact.ninja/fact";
// let url2="https://dog.ceo/api/breeds/image/random";

// // async function getFacts()
// // {
// //     try{
// //         let res=await axios.get(url);
// //         return res.data.fact;
// //     }
// //     catch(err)
// //     {
// //         console.log("Error",err);
// //         return "NO FACT FOUND";
// //     }
// // }
// async function getImg()
// {
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }
//     catch(err)
//     {
//         console.log("Error",err);
//         return "NO IMG FOUND";
//     }
// }

// const url="https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let res=await axios.get(url);
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let state=document.querySelector("input").value;
    let clgArr=await getColleges(state);
    show(clgArr);
});
function show(clgArr)
{
    let list=document.querySelector("#list");
    list.innerText="";
    for (const col of clgArr) {
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
let url="http://universities.hipolabs.com/search?country=India";
async function getColleges(state){
    try{
        let res=await axios.get(url+state);
        return res.data;
    }
    catch(err){
        console.log(err);
        return[];
        
    }
}


