// let n1 = document.getElementById("search1");
// let n2 = document.getElementById("search2");
// let btn1 = document.getElementById("b1");
// let btn2 = document.getElementById("b2");
// let im1=document.getElementById("im1")
// let Container =document.getElementById("Container")

// let c2 =document.getElementById("Container2")
// let token = "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";
// let flag=false
// let p1,p2
// btn1.onclick = function() 
// {
//     fetch(`https://api.github.com/users/${n1.value}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => response.json()) //Converting the response to a JSON object
//         .then((data) => {
//           let img = document.getElementById("im1");
//           img.setAttribute("src", data.avatar_url);
//           console.log(data.avatar_url);
//           img.src = data.avatar_url;
//           let name = document.getElementById("name");
//           Container.innerHTML =``;
//           p1=data.public_repos
//             Container.innerHTML += ` 
//                      <div class="card_1">
//                      <p>number of repos ${data.public_repos}</p>
//                      <p> <span>public</span></p>
//                    </div>`;
                  
//         })
//         .catch((error) => console.error(error));
    
//       fetch(`https://api.github.com/users/${n1.value}/repos`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
        
    

// }

// btn2.onclick = function() 
// {
//     fetch(`https://api.github.com/users/${n2.value}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => response.json()) //Converting the response to a JSON object
//         .then((data) => {
//           let img2 = document.getElementById("im2");
//           img2.setAttribute("src", data.avatar_url);
//           console.log(data.avatar_url);
//           img2.src = data.avatar_url;
//           c2.innerHTML =``;
    
//           p2=data.public_repos
//             c2.innerHTML += ` 
//                      <div class="card_1">
//                      <p>number of repos : ${data.public_repos}</p>
//                      <p> <span>public</span></p>
//                    </div>`;
                   
//         })
//         .catch((error) => console.error(error));
//         flag=true
      
    

// }

// if(flag){
//     show_winner()
// }
// let show = document.getElementById("show")
// function show_winner(){
// console.log(p1);
// console.log(p2);

// if(p1>p2){
//     show.innerText="player one won"
// }
// else if(p1<p2){
//     show.innerText="player two won"
// }
// else
// {
//     show.innerText="draw"
// }

// }

let n1 = document.getElementById("search1");
let n2 = document.getElementById("search2");
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let im1=document.getElementById("im1")
let Container =document.getElementById("Container")

let c2 =document.getElementById("Container2")
let token = "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";
let flag=false
let p1,p2
btn1.onclick = function() 
{
    fetch(`https://api.github.com/users/${n1.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json()) //Converting the response to a JSON object
        .then((data) => {
          let img = document.getElementById("im1");
          img.setAttribute("src", data.avatar_url);
          console.log(data.avatar_url);
          img.src = data.avatar_url;
          let name = document.getElementById("name");
          Container.innerHTML =``;
          p1=data.public_repos
            Container.innerHTML += ` 
                     <div class="card_1">
                     <p>number of repos ${data.public_repos}</p>
                     <p> <span>public</span></p>
                   </div>`;
                  
        })
        .catch((error) => console.error(error));
    
      fetch(`https://api.github.com/users/${n1.value}/repos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        
    

}

btn2.onclick = function() 
{
    fetch(`https://api.github.com/users/${n2.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json()) //Converting the response to a JSON object
        .then((data) => {
          let img2 = document.getElementById("im2");
          img2.setAttribute("src", data.avatar_url);
          console.log(data.avatar_url);
          img2.src = data.avatar_url;
          c2.innerHTML =``;
    
          p2=data.public_repos
            c2.innerHTML += ` 
                     <div class="card_1">
                     <p>number of repos : ${data.public_repos}</p>
                     <p> <span>public</span></p>
                   </div>`;
          flag=true;
          if (flag) {
            show_winner();
          }
        })
        .catch((error) => console.error(error));
}

function show_winner() {
    console.log(p1);
    console.log(p2);
    if (p1 > p2) {
        show.innerText = "player one won"
    } else if (p1 < p2) {
        show.innerText = "player two won"
    } else {
        show.innerText = "draw"
    }
}