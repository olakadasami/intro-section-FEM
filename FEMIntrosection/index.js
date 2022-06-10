// Menu toggle

//to open menu
document.getElementById('menu-open').onclick = function () {
      
    document.getElementById('side-menu').style.display = "block";
    document.querySelector('.backdrop').style.display = "block";
};

// close menu
document.getElementById('close-menu').onclick = function () {
      
    document.getElementById('side-menu').style.display = "none";
    document.querySelector('.backdrop').style.display = "none";
};

// Toolgle side navigation

const featuresToogleHandler = () => {

    // Get button

    const featbtn = document.getElementById('featbtn');


    //get the hidden divs

    let featdrop = document.getElementById('featdrop')

    //get svg span
    let arrow = document.getElementById('updown-features')


    // when Features is clicked

    if (featdrop.style.display == 'none'){
        featdrop.style.display = 'block';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
        console.log('feature show')
    }else {
        featdrop.style.display = 'none';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>'
        console.log('Feature hide')
    }
    
    


}

const companyToogleHandler = () => {

    const compbtn = document.getElementById('compbtn');
    let compdrop = document.getElementById('compdrop')

      //get svg span
      let arrow = document.getElementById('updown-company')


    //when company is clicked

    if (compdrop.style.display == 'none'){
        compdrop.style.display = 'block';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
        console.log('Company show')
    }else {
        compdrop.style.display = 'none';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>'
        console.log('Company Hide')
    }
}

let featuresbtn = document.getElementById("featurebtn");
let companybtn = document.getElementById("companybtn");

let featuredrop = document.getElementById("featuredrop");
let companydrop = document.getElementById("companydrop");
let arrow = document.getElementById('updown-features')

featuresbtn.addEventListener('click', () => {

    
    // when Features is clicked
    companydrop.style.opacity = '0'; // closing the company div


    if (featuredrop.style.opacity == '0'){
        featuredrop.style.opacity = '1';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
        console.log('feature show')
    }else {
        featuredrop.style.opacity = '0';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>'
        console.log('Feature hide')
    }
    console.log('helloworld')
});

companybtn.addEventListener('click', () => {

    
    //when company is clicked
    featuredrop.style.opacity = '0'; //we close the features div

    if (companydrop.style.opacity == '0'){
        companydrop.style.opacity = '1';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
        console.log('Company show')
    }else {
        companydrop.style.opacity = '0';
        arrow.innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>'
        console.log('Company Hide')
    }
});

