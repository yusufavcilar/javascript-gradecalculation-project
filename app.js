const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const btnHesapla = document.querySelector(".btn")
const result = document.querySelector(".result")

let lesson1 = null
let lesson2 = null
let lesson3 = null

input1.addEventListener("input", (event) => {
   if(event.target.value < 0){
       alert("You can not write negative numbers")
   }
    lesson1 = Math.abs(event.target.value)
})

input2.addEventListener("input", (event) => {
    if(event.target.value < 0){
        alert("You can not write negative numbers")
    }
    lesson2 = Math.abs(event.target.value)
})

input3.addEventListener("input", (event) =>{
    if(event.target.value < 0){
        alert("You can not write negative numbers")
    }
    lesson3 = Math.abs(event.target.value)
})

btnHesapla.addEventListener ("click" ,() => {
 const result1 = (Number(lesson1) + Number(lesson2) + Number(lesson3)) / 3;

  result.innerHTML = result1;

  input1.value = ""
  input2.value = ""
  input3.value = ""

})





