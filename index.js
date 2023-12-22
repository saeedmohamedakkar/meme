let data = []

fetch("https://api.imgflip.com/get_memes")
   .then((response) => response.json())
   .then((all) => {
      data = all.data.memes
      show();
   })


//////////////////////////////////////////////////////////////////////////////////////

let input = document.querySelector("input")

let btn = document.querySelector("button")

let div = document.querySelector(".all")

let div2 = document.querySelector(".all2")

let delet = document.querySelector(".reset")

let box = ""

///////////////////////////////////////////////////////////////////////////////////////


function show() {


   btn.addEventListener("click", () => {


      if (input.value == "" || input.value < 0 || input.value > 99) { return }


      else {
         box = `<h2>${data[input.value].name}</h2>

      <img src="${data[input.value].url}" alt="memem">`

         div2.innerHTML = box
      }

   })

}

delet.addEventListener("click", (e) => {
   e.preventDefault()
   div2.innerHTML = ""
   input.value = ""
})