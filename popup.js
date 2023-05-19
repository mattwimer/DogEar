const tags=document.getElementById("tags")
const main=document.getElementById("main")
const result=document.getElementById("result")
const dogsEar=await chrome.storage.local.get('dogsEar')
const tag=Object.keys(dogsEar['dogsEar'])

for(let i=0;i<tag.length;i++){
    tags.innerHTML+=  `<option value="${tag[i]}">`
}


document.getElementById("findtag").addEventListener("submit",
async (e)=>{
    e.preventDefault()
    const tag=document.getElementById("find").value
    main.style.display="none"
    result.style.display="block"
    const dogsEar=await chrome.storage.local.get('dogsEar')
    const tagObject=dogsEar['dogsEar'][tag]
    document.getElementById("resultkey").innerText="Name : "+tag
    if(tagObject){
        
        const seachresult=document.getElementById("searchresult")
        let list=''
        for(let i of tagObject.data){
            list+=`<li>
            <div class="passage">${i.passage}</div>
            <br/>
            <div class="time">${i.time}</div>
            </li>
            <br/>
            `
            
        }
        seachresult.innerHTML=list
    }
    else{
        const seachresult=document.getElementById("searchresult")
        seachresult.innerHTML=`<h1>No result found</h1>`
    }


})
document.getElementById('back').addEventListener("click",
()=>{
    main.style.display="block"
    result.style.display="none"
})