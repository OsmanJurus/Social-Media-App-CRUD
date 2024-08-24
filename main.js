// make DOM simpler and easier my using Arow functions => 🤞!
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

/*
let form = document.getElementById("form");
let inputVal = document.getElementById("input");
let errorMsg = document.getElementsByClassName("error");
let posts = document.getElementById("posts");
*/

let form = id("form"),
  inputVal = id("input"),
  posts = id("posts"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button clicked!");
  formValidator();
});

let formValidator = () => {
  if (inputVal.value === "") {
    errorMsg[0].innerHTML = "Input message can't be blank!";
  } else {
    errorMsg[0].innerHTML = "";
    acceptData();
  }
};

// Accept and strore data!

let data = {};

let acceptData = () => {
  data["text"] = inputVal.value;
  console.log(data);
  createDate();
};

let createDate = () => {
  posts.innerHTML += ` 
<div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square edit"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash delete"></i>
    </span>
</div>
                `;
  inputVal.value = "";
};

let deletePost = (e) => {
  console.log(e);
  // e.remove();  //only deletes the clicked one
  // e.parentElement.remove();  //deletes both parent and the clicked
  e.parentElement.parentElement.remove(); //deletes clicked and the parents!
};

let editPost = (e) => {
  console.log(e);

  inputVal.value = e.parentElement.previousElementSibling.innerHTML;
  e.palrentEement.parentElement.remove();
};

// Done!
