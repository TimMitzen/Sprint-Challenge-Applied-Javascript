// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => tabs.append(tabCreate(res.data)))

  .catch(err => console.log(err));

const tabCreate = data => {
  const tab = document.createElement("div");
  tab.classList.add("tab");

  const topic1 = document.createElement("p");
  topic1.textContent = data.topics;
  tab.appendChild(topic1);

  const topic2 = document.createElement("p");
  topic2.textContent = data[1];
  tab.appendChild(topic2);

  const topic3 = document.createElement("p");
  topic3.textContent = data[2];
  tab.appendChild(topic3);

  const topic4 = document.createElement("p");
  topic4.textContent = data[3];
  tab.appendChild(topic4);

  const topic5 = document.createElement("p");
  topic5.textContent = data[4];
  tab.appendChild(topic5);

  return tab;
};

// const newTabs = res.map((tabs)=>{
//    return tab(data);
// })

// for(let element of newTabs){
//    tabs.appendChild(element)
// }
