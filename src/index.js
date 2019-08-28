document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(results => results.json())
        .then(img => showDogImage(img))
    
    showDogImage = (img) => {
        img.message.forEach(dog => {
            const dogImage = document.createElement("img");
            dogImage.src = dog;
            const container = document.getElementById("dog-image-container");
            container.append(dogImage); 
        })
    }


    fetch("https://dog.ceo/api/breeds/list/all")
    .then(results => results.json())
    .then(breed => showBreed(breed))

    showBreed = (breed) => {
        Object.keys(breed.message).map(breed => {
            const breedLi = document.createElement("li");
            breedLi.innerText = breed; 
            const container = document.getElementById("dog-breeds");
            container.append(breedLi); 
            breedLi.addEventListener("click", () => {
                breedLi.style.color = "red"; 
            })
          
            })
        }
        const doggieDropdown = document.getElementById("breed-dropdown");
        doggieDropdown.addEventListener("change", (e) => {
         
            const breedListNodes = document.querySelectorAll("li");
            
            const hideNodes = document.getElementsByClassName("hide"); 

            const breedList = document.querySelector("ul"); 
            const letterClicked = e.target.value; 
           
           
            editList = (letterClicked) => {
                for (node of breedListNodes){
                    node.style.display = ""; 
                    if (node.innerText.charAt(0) != letterClicked){
                        node.style.display = "none"; 
                    } 
                        // node.remove();  
                        
                    }  
                }
           
            editList(letterClicked); 
            })
        })


    
   
  

    

