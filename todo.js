const item = document.querySelector("#item");
const toDOBox = document.querySelector(".todobox");

item.addEventListener("keyup", (evt) => {
  if (evt.key == "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});

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
};
const reset = () =>{
  resetbtn.addEventListener("click", (evt) => {
    toDOBox.innerHTML=""
  });
}