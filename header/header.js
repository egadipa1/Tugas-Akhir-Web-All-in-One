const header = document.getElementById('header');

fetch('../header/header.html').then(snap => snap.text()).then(result => {
    header.innerHTML = result;
})  