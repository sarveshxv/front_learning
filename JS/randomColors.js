const but = document.querySelector('#hello');
const h1 = document.querySelector('h1')

but.addEventListener('click', function () {

    let r = Math.floor((Math.random()*255)+1);
    let g = Math.floor((Math.random()*255)+1);
    let b = Math.floor((Math.random()*255)+1);


    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;

    but.style.border = `2px solid rgb(${r}, ${g}, ${b})`
    but.style.color = `rgb(${r}, ${g}, ${b})`
})