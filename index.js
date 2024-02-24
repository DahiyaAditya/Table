const gettable = ()=>{
const trTag= document.querySelector(".trtag")
const getrow = document.querySelector(".inputRow")
const getcol = document.querySelector(".inputCol")
const row = getrow.value;
const col = getcol.value;
console.log(typeof row);
console.log(typeof col);

for(let i=0; i<row; i++){
    const newRow = document.createElement("tr")
     for(let j=0; j<col; j++){
        const newCol = document.createElement("td")
        newCol.style.width="60px"
        newCol.style.height="30px"
        newCol.style.border="1px solid black"
        newRow.appendChild(newCol)
     }
    trTag.appendChild(newRow)
}
}