document.querySelector('button').onclick = function() {
    alert('You clicked me!');
}

document.querySelector('button').onmouseover = function() {
    document.querySelector('button').style.backgroundColor = 'red';
}
