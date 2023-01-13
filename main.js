const button = document.querySelector("button");
const responseArea = document.querySelector(".response-area");

button.addEventListener("click", getResidents);

function getResidents() {
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => addToView(res.data));
}

function addToView(dataArr) {
  responseArea.innerHTML = null;
  const residentURLs = dataArr.results[0].residents;
  for (let i = 0; i < residentURLs.length; i++) {
    axios.get(residentURLs[i]).then((res) => {
      const h2 = document.createElement("h2");
      h2.textContent = res.data.name;
      responseArea.appendChild(h2);
    });
  }
}
