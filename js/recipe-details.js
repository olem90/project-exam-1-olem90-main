const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const recipeId = params.get("id");
const paramsCat = new URLSearchParams()
const recipeDetailsContainer = document.querySelector(".recipe-details-container");
const modal = document.querySelector (".modal");
const captionUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + recipeId;
const recipeImage = document.querySelectorAll(".post-image > img");
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
    const imgs = doc.querySelector("img");
    
    
    

recipeDetailsContainer.innerHTML = 
    `
    <div class="recipe-content"> 
    ${details.content.rendered}
    </div>`;

    const modalImage = imgs.src ;

    console.log(imgs)

    modal.innerHTML = `
    <img src="${ modalImage}">
    `
    ;

    console.log(imgs[0])
};

