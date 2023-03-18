let turn=new Audio("ting.mp3");
let x=new Audio("tadaa-47995.mp3");
let gameover=new Audio("gameover.mp3");
let t="X";
let reset=document.getElementById("reset");
let isgameover=false;
let count=0;
const change=()=>{
    return t==="X"? "0":"X";
}
const check=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.getElementById("info").innerText=boxtext[e[0]].innerText+"  Won";
            isgameover=true;
            document.getElementById("image").style.width="15vw";
            highlight(e);
        }
    })
}
let boxes=Array.from(document.getElementsByClassName("box"));
boxes.forEach(element=>{
    let text=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(text.innerText===''){
            count++;
            text.innerText=t;
            turn.play();
            t=change();
            document.getElementById("info").innerText="Turn of "+t;
            check();
        }
        if(count==9){
            if(!isgameover){document.getElementById("info").innerText="Draw";}
            gameover.play();
        } 
    })
})
reset.addEventListener("click",()=>{
    //self  reload
    // boxes.forEach(e=>{
    //     let text=e.querySelector(".boxtext");
    //     text.innerText="";
    // })
    // document.getElementById("info").innerText="Turn Of "+t;
    // document.getElementById("image").style.width="0rem";
    location.reload();   /*direct reload*/
})
function highlight(e){
    x.play();
    e.forEach(s=>{
        boxes[s].classList.add("highlight");
    })
    boxes.forEach(b=>{
        b.classList.add("cursor");})
}