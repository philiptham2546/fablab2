const menu_btns = document.querySelectorAll(".menu_btn");
const tbody = document.querySelector("tbody");
const data_header = document.querySelector("#data_header");
const state_desc = document.getElementById("state_desc");
const paths = document.querySelectorAll("svg > path");

let svgObject;
let svg;


//nodes for states w no entries (vanilla)
let vanilla_row = document.createElement("tr");
for (let i = 0;i<5;i++){
    let vanilla_cell = document.createElement("td");
    vanilla_row.append(vanilla_cell);
    vanilla_cell.textContent = "-";
}
vanilla_row.style.textAlign = "center";


//nodes for cali
let cali_row = document.createElement("tr");
cali_row.innerHTML="<td>1.</td><td>Adrian Ortiz</td><td>2/26/21</td><td>Latino</td><td>19</td>";
cali_row.style.textAlign = "center";

//nodes for sc
let sc_row = document.createElement("tr");
sc_row.innerHTML="<td>1.</td><td>Jerome Jenkins Jr.</td><td>2019</td><td>Black</td><td>20</td>";
sc_row.style.textAlign = "center";

//nodes for az
let az_row = document.createElement("tr");
az_row.innerHTML="<td>1.</td><td>Bryan Patrick Miller</td><td>6/7/23</td><td>White</td><td>~15</td>";
az_row.style.textAlign = "center";

//nodes for fl
let fl_row1 = document.createElement("tr");
let fl_row2 = document.createElement("tr");
fl_row1.innerHTML="<td>1.</td><td>Christian Cruz</td><td>2019</td><td>Latino</td><td>19</td>";
fl_row2.innerHTML="<td>2.</td><td>Benjamin Smiley</td><td>2018</td><td>Black</td><td>20</td>";
fl_row1.style.textAlign = "center";
fl_row2.style.textAlign = "center";



    //click on path
    for (let path of paths){
        let style_map = path.computedStyleMap();
        let color = style_map.get("fill").toString();

        path.addEventListener("mouseover", (event)=>{
            event.target.setAttribute("style",`stroke-width:5;fill:${color}`);
        })
        path.addEventListener("mouseout",(event)=>{
            event.target.setAttribute("style",`stroke-width:0.97063118000000004;fill:${color}`)
        })
        path.addEventListener("click",(event)=>{
            tbody.innerHTML=''; //to clear the table row
            data_header.innerHTML = `<b>Sentencing data for ${event.target.dataset.name}<b>`; //change header
            //check for misc attribute
            if (!path.hasAttribute("misc")){
                state_desc.textContent="The death penalty is legal in this state."
            } else {
                state_desc.textContent=event.target.getAttribute('misc');
            }
            //append rows
            if (path.id=="FL"){
                tbody.append(fl_row1);
                tbody.append(fl_row2);
            } else if (path.id=="CA"){
                tbody.append(cali_row);
            } else if (path.id=="SC"){
                tbody.append(sc_row);
            } else if (path.id=="AZ"){
                tbody.append(az_row);
            } else {
                tbody.append(vanilla_row);
            }
        })
    };


//border bottom white if hover over the button

for (let menu_btn of menu_btns){
    menu_btn.addEventListener("mouseover",(event)=>{
        const target = event.target;
        target.setAttribute("style","border-bottom: 5px white solid");
    });
    menu_btn.addEventListener("mouseout",(event)=>{
        const target = event.target;
        target.setAttribute("style","border-bottom: none;")
    });
}



