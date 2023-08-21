// const form = document.querySelector('form');
// const input = document.querySelectorAll('input')[0];
// const input1 = document.querySelectorAll('input')[1];

// const ul = document.querySelector('#tasks');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     const li = document.createElement('li');
//     li.innerHTML = `<b>${input.value}</b> - ${input1.value}`;
//     ul.append(li);
    
//     input.value = '';   // Reset values to blank

// })


const input = document.querySelector('input');
const h1 = document.querySelector('h1');


input.addEventListener('input', function (e) {
    
    if (input.value != ""){
        h1.innerText = `Welcome, ${input.value}`;
    }
    else{
        h1.innerText = 'Enter Your Username'
    }
    
})