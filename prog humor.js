// let image = name.map((imageName) => {

fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.img);

    listItem.innerHTML = `<img src = "${data.img}"/>`;
  })

  .catch((error) => {
    console.error(error);
  });
