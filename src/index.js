const IMGURL = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    console.log('dom loaded')
    fetchPics()
    
    

})

function fetchPics() {
    fetch(IMGURL)
    .then(resp => resp.json())
    .then(pics => {
        console.log(pics)
        renderPics(pics)

    })
}


function renderPics(pics) {
    pics.forEach(pic => {
        renderPic(pic)
    }
    )
}

function renderPic(pic) {
    const singlePic = document.createElement('li')
    const dogContainer = document.getElementById('dog-image-container')
    singlePic.dataset.id = pic.id
    dogContainer.appendChild(singlePic)
    
}