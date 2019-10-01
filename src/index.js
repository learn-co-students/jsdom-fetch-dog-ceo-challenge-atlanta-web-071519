const IMGURL = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    console.log('dom loaded')
    fetchPics()
    
    

})

function fetchPics() {
    fetch(IMGURL)
    .then(resp => resp.json())
    .then(pics => {
        pics.message.forEach(pic => renderPic(pic))
        console.log('pics fetched')
    })
}

function renderPic(dogPicUrl) {
    let dogContainer = document.querySelector('#dog-image-container')
    let newImgEl = document.createElement('img')
    newImgEl.src = dogPicUrl
    dogContainer.appendChild(newImgEl)
}