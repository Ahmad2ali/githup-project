//search users

let searchinput = document.getElementById("search");
let form = document.querySelector("form");
let Container = document.getElementById("card-container");

form.addEventListener("submit", function (e) {
    e.preventDefault()
  let search = searchinput.value;
  let token = "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";

  clientID = "26ceb91ec0050040fcd1";
  clientSecret = "763bcf6db51bd8ed48dc2d388f376a8644d8e4d4";
  // search = "AyhamZaid";
  const URL = `https://api.github.com/search/users?q=${search}&client_id=${clientID}&client_secret=${clientSecret}`;
  console.log(URL);
  fetch(`https://api.github.com/users/${search}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => {
      let img = document.getElementById("image-user");
      img.setAttribute("src", data.avatar_url);
      console.log(data.avatar_url);
      img.src = data.avatar_url;
      let name = document.getElementById("name");
      name.innerHTML = `${data.login}`;
    })
    .catch((error) => console.error(error));

  fetch(`https://api.github.com/users/${search}/repos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => {
        Container.innerHTML =``;
        let conut =0

      for (let i of data) {

        if (conut++ >5) {
            break
        }
        Container.innerHTML += ` 
                 <div class="card_1">
                 <p> ${i.name}</p>
                 <p> <span>public</span></p>
               </div>`;
      }
    });
});
