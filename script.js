close = document.querySelector('.close')
open = document.querySelector('.mainStuff');

close.addEventListener('click', function(){
    document.querySelector('.hover--box').classList.add('displayBox')
    document.querySelector('.container').classList.remove('displayBox')
    document.querySelector('.container').style.display = 'block'
})

open.addEventListener('click',function(){
    document.querySelector('.hover--box').classList.remove('displayBox')
    document.querySelector('.container').classList.add('displayBox')
    document.querySelector('.container').style.display = 'none'
})