import "../scss/main.scss";

console.log("HELLO 🚀");



const buttonLoad = document.querySelector('.load--js');
const buttonSave = document.querySelector('.save--js');
let entryArea = document.querySelector('textarea');

const entry = localStorage.getItem('entry');

let result = "";

if (entry) {
  result = entry;
}

entryArea.innerHTML = result;

buttonLoad.addEventListener("click", () => {
  entryArea.value = entry;
});

buttonSave.addEventListener("click", () => {
  localStorage.setItem("entry", entryArea.value);
});
