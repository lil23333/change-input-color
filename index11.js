let inp = document.querySelector('input');
let btn = document.querySelector('button');
function func () {
       let inpp =+inp.value;
       if (inpp < 0 || inpp < 100) {
inp.style.backgroundColor = 'green';

       } else {
        inp.style.backgroundColor = 'red';
       }
}

   

btn.addEventListener('click', func);


