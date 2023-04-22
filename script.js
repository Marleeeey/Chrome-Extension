// const { json } = require("react-router-dom");

//SAVE BTN 
let arrLinks = [];
let inputBtn = document.querySelector('.input-btn');
let clearBtn = document.querySelector('.clear-btn');
let link = document.querySelector('.url-link');
let orderList = document.querySelector('.ul-el');





//Get The Item From LocalStorage
const arrLinksFromLocalStorege = JSON.parse(localStorage.getItem("arrLinks"));

if (arrLinksFromLocalStorege) {
  arrLinks = arrLinksFromLocalStorege;
  showLinks(arrLinks);
}

//Render The OrderList

function showLinks(links) {
  let listItems = "";

  for (let i = 0; i < links.length; i++) {

    listItems += `<li>
      <a target = '_blank' href = '${links}' />
      ${links[i]}
      </a>
    </li>
    `
    
    //Another Methode
    /*
    const li = document.createElement('li');
    li.textContent = arrLinks[i];
    orderList.append(li);
    */
  }
  orderList.innerHTML = listItems;
}

//The Save Btn Function()

inputBtn.addEventListener('click', function(){
  arrLinks.push(link.value);
  link.value = "";

  //Store The Data Into LocalStorage
  localStorage.setItem("arrLinks", JSON.stringify(arrLinks));

  showLinks(arrLinks);
});

//CLear Btn

clearBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  arrLinks =  [];
  showLinks(arrLinks);
})





