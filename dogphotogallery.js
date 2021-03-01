// toggleButtonState(){
//     let selectWord = window.getSelection().toString();
//     fetchAPI(selectWord);
// }

let button = document.getElementById("button");
button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      const ul = document.getElementById("dogList");
      const listItem = document.createElement("li");
      listItem.innerHTML = `<img src = "${data.message}"/>`;
      ul.appendChild(listItem);
    })

    .catch((error) => {
      console.error(error);
    });
});
// {
//     return new Promise(resolve => setTimeout()) => resolve(42), 1000));
// }
