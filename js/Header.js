const fetchHeader = async () => {
    let html = "";
    let response = await fetch("http://localhost:3004/images");
    let data = await response.json();
    data.forEach((elem)=>{
        html += `<img src=${elem.src} alt=${elem.alt}>`
    })
    document.getElementById("logo").innerHTML = html
    console.log("hey bae")
}

export default fetchHeader;