const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});



const name = document.getElementById('name');

const email = document.getElementById('emil');

const mobilenumber = document.getElementById('mobilenumber');

const password = document.getElementById('password');

const form = document.getElementById('form');

const name_error = document.getElementById('name_error');



form.addEventListener('submit',(e)=>
  {

if (email.valu ==='' || email.valu == null )
{
  e.preventDefault();
  name_error.innerHTML = "Mail is Required";
}














})