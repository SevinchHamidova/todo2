const elForm = document.querySelector(".js-form-list");
const elInp = document.querySelector(".js-form-inp");
const elBtn = document.querySelector(".js-btn");
console.log(elBtn);
const list = document.querySelector("#list");
const newListTemp = document.querySelector(".js-list-template").content;
let newArr = [];
elBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (!elInp.value.trim()) {
        alert("Place the data!");
        return;
    }
    const listTemplateClone = newListTemp.cloneNode(true);
    
    listTemplateClone.querySelector(".list-about").textContent = elInp.value
    
    let obj = {
        name: elInp.value,
      };
    newArr.push(obj);
    console.log(newArr);
    list.appendChild(listTemplateClone);
    elInp.value = " ";
})

list.addEventListener("click", function (evt) {
    const target = evt.target;
    if (target.classList.contains("fa")) {
        const listItem = target.closest(".list-item");
        if (listItem) {
         
                listItem.remove();
                let obj = {
                    name: elInp.value,
                  };
                newArr.pop(obj);
        }
    }
});

