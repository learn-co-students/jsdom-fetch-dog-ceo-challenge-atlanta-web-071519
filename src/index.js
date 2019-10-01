const IMGURL = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    console.log('dom loaded')
    fetchPics()
    
    

})

function fetchPics() {
    fetch(IMGURL)
    .then(resp => resp.json())
    .then(pics => {
        pics.message.forEach(pic => addPic(pic))

    })
}

