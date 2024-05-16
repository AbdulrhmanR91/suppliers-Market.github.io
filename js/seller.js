let loader = document.querySelector('.loader');

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
    if (sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            if(!user.seller){
                becomeSellerElement.classList.remove('hide');
            } else{
                productListingElement.classList.remove('hide');
            }
        }else {
            location.replace('/login');
        }
    } else {
        location.replace('/login');
    }
}

// Add event listener to the button
 showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
});

const applyFormButton = document.querySelector('#apply-form-btn');
const businessName = document.querySelector('#business-name');
const address = document.querySelector('#business-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');


applyFormButton.addEventListener('click', () => {
    if (!businessName.value.length || !address.value.length || !about.value.length || !number.value.length) {
        showAlert('fill all the inputs');
    } else {
        // Making server request
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName.value,
            address: address.value,
            about: about.value,
            number: number.value,
            email: JSON.parse(sessionStorage.user).email
        });
    }
});




