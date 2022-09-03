const darkMode = document.querySelector('.dark-mode')

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    darkMode.classList.toggle('ativo');
    if(darkMode.classList.contains('ativo')){
        darkMode.innerHTML = '🌞';
    }else{
        darkMode.innerHTML = '🌓';
    }
});
console.log(darkMode.classList.contains('ativo'));