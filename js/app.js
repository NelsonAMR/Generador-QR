var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var qr = document.querySelector('.qr');
// var exito = document.querySelector('.exito');

btn.addEventListener('click', () => {
    let data = input.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?&data=${data}`
    console.log(url);
    if(data != '' && typeof(data) == 'string') qr.src = url;
    input.value = '';
    // exito.classList.remove('ban');
});