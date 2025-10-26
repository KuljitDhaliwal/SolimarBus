// Ham Button Function

const ham = document.querySelector('.ham');
const list = document.querySelector('nav ul');
function toggleHam(){
    ham.addEventListener('click', ()=>{
    list.classList.toggle('show')
    ham.classList.toggle('cross')
    })
}

toggleHam()


//Q&A

const questionCards = document.querySelectorAll('.question-card');
questionCards.forEach((card)=>{
    card.addEventListener('click', (e)=>{
        card.classList.toggle('show')
    })
})


// Adding Navbar Class

const navList = document.querySelectorAll('.nav-link');
window.addEventListener('load', getPage)
function getPage(){
    let currentPage = document.location.href.split('#')[0]
    console.log('currentPage', currentPage)
    navList.forEach((item)=>{
        item.classList.remove('active')
        if(item.href === currentPage){
        item.classList.remove('active')
            item.classList.add('active')
        }
    })
}



// Form Validation

const form = document.querySelector("form");
let username = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let emailError = document.getElementById('email-error');
let nameError = document.getElementById('name-error');
let msgError = document.getElementById('msg-error');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formValidation(){
    const form = document.querySelector('form');
    if(!form)return;
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();
    
        if(!emailPattern.test(email)){
            emailError.classList.add('show')
        }else{
            emailError.classList.remove('show')
        }
    
        if(name.length <= 0){
            nameError.classList.add('show')
        }else{
            nameError.classList.remove('show')
        }
        if(message.length <= 0){
            msgError.classList.add('show')
        }else{
            msgError.classList.remove('show')
        }
    })
    username.addEventListener('input', (e)=>{
        if(e.target.value.trim().length > 0){
            nameError.classList.remove('show')
        }
    })
    
    email.addEventListener('input', (e)=>{
        if(emailPattern.test(e.target.value.trim())){
            emailError.classList.remove('show')
        }
    })
    message.addEventListener('input', (e)=>{
        if(e.target.value.trim().length > 0){
            msgError.classList.remove('show')
        }
    })
}

formValidation()



