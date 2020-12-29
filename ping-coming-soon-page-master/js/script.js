const button = document.getElementById('button')
const input = document.getElementById('input')
const label = document.getElementById('label')

button.addEventListener('click', function() {

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value)){
         input.classList.remove('input-error')
         label.classList.remove('label-error')
         setTimeout(function() {
            document.querySelector('.form').submit()
        },1000)
    }else{
         input.classList.add('input-error')
         input.classList.add('input')
         label.classList.add('label-error')
         input.placeholder = 'example@email/com'
    }

    if(label.style.display != 'none'){
        button.style.marginTop = '20px'
    }
    else{
        button.style.marginTop = '0'
    }
})
