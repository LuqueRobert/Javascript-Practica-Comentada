var parrafos = document.getElementsByClassName('texto'),
    pequenio = document.getElementById('pequenio'),
    mediano = document.getElementById('mediano'),
    grande = document.getElementById('grande'),
    mayusculas = document.getElementById('mayusculas'),
    minusculas = document.getElementById('minusculas');

pequenio.addEventListener('click',function(){
    for(var i = 0; i < parrafos.length;i++){
        parrafos[i].style.fontSize = '10px';
    }
});


mediano.addEventListener('click',function(){
    for(var i = 0; i < parrafos.length;i++){
        parrafos[i].style.fontSize = '16px';
    }
});


grande.addEventListener('click',function(){
    for(var i = 0; i < parrafos.length;i++){
        parrafos[i].style.fontSize = '20px';
    }
});


mayusculas.addEventListener('click',function(){
    for(var i = 0; i < parrafos.length;i++){
        parrafos[i].style.textTransform = 'uppercase';
    }
});


minusculas.addEventListener('click',function(){
    for(var i = 0; i < parrafos.length;i++){
        parrafos[i].style.textTransform = 'lowercase';
    }
});