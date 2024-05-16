//const { json } = require("body-parser");

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo subb.png" class="brand-logo" alt=""> 
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search Here">
                <button class="search-btn">search</button>
            </div>
            <a>
            <img src="img/user_3177440.png" id ="user-img" alt="">
            <div class="login-logout-popup hide">
                <p class = "account-Info">log in as, name</p>
                <button class = "btn" id="user-btn">Log out</button>
            </div>
            </a>
            <a href="#"><img src="img/shopping-cart_8214818.png" alt=""></a>
        </div>
    </div>
   
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#Clothes" class="link">Clothes</a></li>
        <li class="link-item"><a href="#Clothes" class="link">Vegetables and fruits</a></li>
        <li class="link-item"><a href="#accessories" class="link">accessories</a></li>
        <li class="link-item"><a href="#furniture" class="link">furniture</a></li>
        <li class="link-item"><a href="#Building supplies" class="link">Building supplies</a></li>
        <li class="link-item"><a href="#info" class="link">About Us</a></li>
        <a class = "a" href="seller.html">Become a seller</a>
    </ul>
    `;
}

createNav();

// nav popup

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-Info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', ()=>{
    userPopup.classList.toggle('hide');
})

window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user in logged in 
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    } else{
        //user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () =>{
            location.href = '/login';
        })
    }
}