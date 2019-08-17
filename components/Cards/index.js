// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector(".cards-container")
axios.get("https://lambda-times-backend.herokuapp.com/articles")
   .then(res =>{
        
      
   })
   .catch(err => console.log(err))


const createCard = data =>{
   const card = document.createElement("div");
   card.classList.add("div");
   
   const headlines = document.createElement("div");
   headlines.classList.add("headline");
   headlines.textContent = data.headline;
   card.appendChild(headlines);

   const authors = document.createElement("div");
   authors.classList.add("author");
   
   const img = document.createElement("div");
   img.classList.add("img-container");

   const image = document.createElement("img");
   image.src = data.authorPhoto;
   image.appendChild(img);

   const authorNames = document.createElement("span");
   authorNames.textContent = data.authorName;
  

   
   return card;
}
Array.from(articles);
const newCard = res.map((item) => {
   return createCard(item.data);
})

for (let element of newCard){
   cards.appendChild(element);
}