const fetchSocial = async () => {
    let htmlSoc = "";
    let response = await fetch("http://localhost:3004/socialMedia");
    let data = await response.json();
    data.forEach((elem)=>{
        htmlSoc += `<span><a href="${elem.href}" class="fa-brands ${elem.icon}"></a></span>`
    })
    document.getElementById("media").innerHTML = htmlSoc

}

export default fetchSocial;