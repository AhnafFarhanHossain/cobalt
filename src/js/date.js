export function dateInit() {
  const dateText = document.querySelector("#date");
  const date = new Date().getFullYear();
  dateText.innerHTML = date;
}
