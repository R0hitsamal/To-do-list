const item = document.querySelector("#item");
const toDOBox = document.querySelector(".todobox");

item.addEventListener("keyup", (evt) => {
  if (evt.key == "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});
const saveData = () => {
  const lists = document.querySelectorAll("li");
  const data = [];

  lists.forEach((list) => {
    data.push(list.innerText);
  });
  
  localStorage.setItem("Lists",JSON.stringify(data));
  
};
const addToDo = (item) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `${item}<i class="fas fa-times"> </i>`;
  toDOBox.appendChild(listItem);

  listItem.addEventListener("click", () => {
    listItem.style.backgroundColor = "green";
    listItem.style.color = "white";
  });
  const remove = listItem.querySelector("i");
  remove.addEventListener("click", (evt) => {
    toDOBox.removeChild(listItem);
  });
  const resetbtn = document.querySelector(".reset");
  resetbtn.addEventListener("click", (evt) => {
    toDOBox.innerHTML = "";
    localStorage.setItem("Lists",JSON.stringify(''));
  });
  
};
document.querySelector(".save").addEventListener("click", (evt) => {
  saveData();
});

(
  function () {
    const lsLists =JSON.parse(localStorage.getItem("Lists"));
    lsLists.forEach(list => {
      addToDo(list)
    });
    
  }
)()
