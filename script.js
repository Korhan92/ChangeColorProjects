//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let button1 = document.getElementById("button1")
let text = document.querySelector(".textField")

button1.addEventListener("click" , () => {

    let colorIndex = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[colorIndex]

})

let hexColor = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9"]

button2.onclick = () =>{
    let hexKorhan = "#"
   
    for(let index =0; index < 6; index++ ){
        hexKorhan = hexKorhan + hexColor[Math.floor(Math.random () * hexColor.length)]
    }
    document.body.style.backgroundColor = hexKorhan
    texField.innerHTML = hexKorhan
}
    

