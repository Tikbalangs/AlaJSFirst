const fetchMenu = async () => {
    let htmlMenu = "";
    let response = await fetch("http://localhost:3004/menu");
    let data = await response.json();
    data.forEach((elem)=>{
        htmlMenu += `<li><a href=${elem.href}>${elem.title}</a></li>`
    })
    document.querySelector("div.menu>nav.navbar>ul.menu-items").innerHTML = htmlMenu

}

export default fetchMenu;