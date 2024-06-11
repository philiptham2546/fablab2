const menu_btns = document.querySelectorAll("button");

for (let btn of menu_btns){
    btn.addEventListener("mouseover",(event)=>{
        event.target.setAttribute("style","border-bottom: 5px white solid;")
    });
    btn.addEventListener("mouseout",(event)=>{
        event.target.setAttribute("style","border-bottom:none;")
    })
}