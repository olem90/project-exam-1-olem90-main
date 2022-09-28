const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const recipeId = params.get("id");
const paramsCat = new URLSearchParams()
const recipeDetailsContainer = document.querySelector(".recipe-details-container");
const captionUrl ="https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/"  +  recipeId + "?_embed" ;
const modal = document.querySelector('.modal');

async function getDetails(){
    const response = await fetch(captionUrl);
    const details = await response.json();
    
    createHTML(details);
}
getDetails();

function createHTML(details){

    const parser = new DOMParser();
    const content = { rendered: `${details.content.rendered}`};
    const doc = parser.parseFromString(content.rendered, "text/html");
    const ul = doc.querySelectorAll("ul");
    
    const parser1 = new DOMParser();
    const content1 = { rendered: `${details.content.rendered}`};
    const doc1 = parser1.parseFromString(content1.rendered, "text/html");
    const paragraph= doc1.querySelector("p");
    
    const parser2 = new DOMParser();
    const content2 = { rendered: `${details.content.rendered}`};
    const doc2 = parser2.parseFromString(content2.rendered, "text/html");
    const h3= doc.querySelector("h3")
    
    const parser3 = new DOMParser();
    const content3 = { rendered: `${details.content.rendered}`};
    const doc3 = parser3.parseFromString(content3.rendered, "text/html");
    const h4 = doc3.querySelector("h4");
    


  


recipeDetailsContainer.innerHTML = 
    `<div class="recipe-content"> 
    <h3>${details.title.rendered}</h3>
    <img class= "details-image" src="${details._embedded["wp:featuredmedia"][0].source_url}">

    <p class="caption-info">${paragraph.innerHTML}</p>
    
   <div class="cooking-info">${paragraph.nextSibling.nextSibling.innerHTML} </div>

    <div class="details-content">
    <div class="ingredients"><h4>${h3.innerHTML}</h4>
    <ul>${ul[0].innerHTML}</ul></div>

    <div class="method"><h4>${h4.textContent}</h4>
    <ul>${ul[1].innerHTML}</ul></div>
    </div>
    </div>`;

    modal.innerHTML = `
    <span class="close"></span>
    <div class="modal-content">
    <img class="modal-image" src="${details._embedded["wp:featuredmedia"][0].source_url}}">
    </div>
    </div>
    `

    recipeDetailsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains("details-image")) {
            modal.classList.add("show-modal")}
            
        else if (
            !event.target.closest(".modal")) {
                closeModal()
            }
},
);
 };
 
function closeModal() {
   modal.classList.remove("show-modal");
};
