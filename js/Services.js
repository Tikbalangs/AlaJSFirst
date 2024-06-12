const fetchServices = async () => {
    let htmlSer = "";
    let response = await fetch("http://localhost:3004/services");
    let data = await response.json();
    data.forEach((elem)=>{
        htmlSer += `<div class="box">
                    <span class="${elem.span}"></span>
                    <h1>${elem.h}</h1>
                    <p>${elem.p}</p>
                </div>`
    })
    document.getElementById("ServicesBox").innerHTML = htmlSer

}

export default fetchServices;