import fetchHeader from "./Header.js";
import fetchMenu from "./Menu.js";
import fetchElement from "./Element.js";
import fetchGallery from "./Gallery.js";
import fetchServices from "./Services.js";
import fetchCritics from "./Critics.js";
import fetchSocial from "./Social.js";
// import renderSection from "./Footer.js";
// import fetchData from "./Footer.js";
fetchHeader()
fetchMenu()
fetchElement()
fetchGallery()
fetchServices()
fetchCritics()
fetchSocial()

// The dynamic footer is inserted here because I couldn't link it
function fetchData(endpoint) {
    return fetch(`http://localhost:3004/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${endpoint}`);
            }
            return response.json();
        });
}

function renderSection(sectionId, data) {
    const section = document.getElementById(sectionId);
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('contactItem');
        if (item.icon) {
            const span = document.createElement('span');
            span.classList.add('fa-solid', item.icon);
            div.appendChild(span);
        }
        const h3 = document.createElement('h3');
        h3.textContent = item.text;
        div.appendChild(h3);
        section.appendChild(div);
    });
}

Promise.all([
    fetchData('contact-us').then(data => renderSection('contact-us', data)),
    fetchData('servicesFoot').then(data => renderSection('services', data)),
    fetchData('about-us').then(data => renderSection('about-us', data))
]).then(() => {
    console.log('All sections have been rendered.');
}).catch(error => {
    console.error('Error fetching data:', error);
});
