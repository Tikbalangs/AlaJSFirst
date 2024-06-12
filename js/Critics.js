const fetchCritics = async () => {
    let htmlCri = "";
    let starsHtml = '';
    let response = await fetch("http://localhost:3004/critics");
    let data = await response.json();
    data.forEach((elem)=>{
        for (let i = 0; i < elem.stars ; i++) {
            starsHtml += '<span class="fa-solid fa-star"></span>';
        }
        htmlCri += `<div class="person">
            <div class="container">
                <div class="container-inner">
                    <img class="circle" src="${elem.backgroundImg}" alt="Blue">
                    <img class="img ${elem.classImg}" src="${elem.personImg}" alt="${elem.alt}">
                </div>
            </div>
            <div class="comment">
                <div class="logo">
                    <span class="fa-solid fa-quote-left"></span>
                </div>
                <div class="criticise">
                    <h2>${elem.comment}</h2>
                </div>
                <div class="stars"> 
                    ${starsHtml}
                </div>
            </div>
            <div class="name">
                <h1>${elem.name}</h1>
            </div>
        </div>`
        starsHtml = "";
    })
    document.querySelector("section.critics").innerHTML = htmlCri

}

export default fetchCritics;