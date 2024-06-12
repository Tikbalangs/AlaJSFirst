const fetchElement = async () => {
    let htmlEle = "";
    let response = await fetch("http://localhost:3004/elements");
    let data = await response.json();
    data.forEach((elem)=>{
        htmlEle += `<div class="ele">
                <div class="icon">
                    <span class="${elem.icon}">
                    </span>
                </div>
                <h1>${elem.h}</h1>
                <p>${elem.p}</p>
            </div>`
    })
    document.querySelector("section.element>div.elementContainer").innerHTML = htmlEle

}

export default fetchElement;