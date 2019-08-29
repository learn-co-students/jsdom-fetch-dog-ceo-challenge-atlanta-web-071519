document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            for (let i = 0; i<json.message.length; i++) {
            let div = document.getElementById("dog-image-container")
            let img = document.createElement("img")
            img.src = json.message[i]
            div.append(img)
            }
        })

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            listBreeds(json)
            document.addEventListener("change", function() {
                let ul = document.getElementById("dog-breeds")
                let list = listBreeds(json)
                while (ul.firstChild) {
                  ul.removeChild(ul.firstChild);
                }
                console.log(list)
                for (i=0; i<list.length; i++){
                    if (dropdown.value == list[i].toString().charAt(0)){
                        const li = document.createElement("li")
                        
                        li.innerText = list[i].toString()
                        ul.append(li)
                    }
                }
               
                // then add lis if li first letter is equal to dropdown value
                // show the breed the has the first letter equal to value.
            })
        })
    
    let dropdown = document.getElementById("breed-dropdown")
    
    
})


function listBreeds(json) {
    let ul = document.getElementById("dog-breeds")
   let values = Object.values(json.message)
   let array = []
       for(let i=0; i<values.length; i++) {
            let breedsArray = values[i]
            for(let j=0; j<breedsArray.length; j++) {
                let li = document.createElement("li")
                li.innerText = breedsArray[j]
                ul.append(li)
                li.onclick = function() {
                    li.style.color = "red"
                }
                array.push(breedsArray[j])
            }
       }
       return array
       
    }
