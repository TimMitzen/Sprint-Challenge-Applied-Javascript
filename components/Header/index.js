// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const head = document.createElement("div"); //header
  head.classList.add("header");

  const date = document.createElement("span"); // span date
  date.textContent = "March 28, 2019";
  date.classList.add("date");
  head.appendChild(date);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  head.appendChild(h1);

  const temp = document.createElement("span");
  temp.textContent = "98°";
  temp.classList.add("temp");
  head.appendChild(temp);

  return head;
}
const container = document.querySelector(".header-container");

container.append(Header());
