const fetchGallery = async () => {
    let htmlGall = "";
    let response = await fetch("http://localhost:3004/gallery");
    let data = await response.json();
    htmlGall += `<div class="gallery__column">`
    data.forEach((elem)=>{
        if (elem.id % 3 === 0){
            htmlGall += `
                <a href="#" target="_blank" class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="${elem.src}" alt="${elem.alt}" class="gallery__image">
                    <figcaption class="gallery__caption">${elem.caption}</figcaption>
                </figure>
            </a>`
            htmlGall += `</div>`
            if (elem.id != data.at(-1).id){
                htmlGall += `<div class="gallery__column">`
            }
        }
        else {
            htmlGall += `
                <a href="#" target="_blank" class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="${elem.src}" alt="${elem.alt}" class="gallery__image">
                    <figcaption class="gallery__caption">${elem.caption}</figcaption>
                </figure>
            </a>`
        }
    })
    document.querySelector("section.gallery").innerHTML = htmlGall

}

export default fetchGallery;