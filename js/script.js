//دسترسی به تمامی المنت هایی که لازم داریم
let titleElem = document.querySelector('.title')
let liElems = document.querySelectorAll('li')




//اضافه کردن مقدار به صفحه 
function appendValueToDom(event) {
    if (event.code === 'Backspace') {
        return titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        return titleElem.innerHTML += '<br>'
    }
    if (event.code === 'ShiftRight' || event.code === 'ControlRight' || event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'ControlLeft' || event.code === 'ArrowRight' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'AltLeft') {
        return titleElem.innerHTML = titleElem.innerHTML
    }
    titleElem.innerHTML += event.key
}



liElems.forEach(liElem => {
    liElem.addEventListener('click', (event) => {
        let keyElem = document.querySelector(`#${event.target.id}`)
        keyElem.classList.add('hit')
        appendToDomWithClick(event.target.id)
        keyElem.addEventListener('animationend', event => {
            keyElem.classList.remove('hit')
        })
        // console.log(event.target.id);
    })
})


function appendToDomWithClick(key) {
    if (key === 'esc' || key === 'left-shift' || key === 'caps' || key === 'right-shift' | key === 'tab') {
        return titleElem.innerHTML = titleElem.innerHTML
    }
    if (key === 'back') {
        return titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
    }
    if (key === 'enter') {
        return titleElem.innerHTML += '<br>'
    }
    titleElem.innerHTML += key

}


document.addEventListener('keyup', (event) => {
    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase()

    let keyElem = document.querySelector(`#${userEventKey}`)
    keyElem.classList.add('hit')
    keyElem.addEventListener('animationend', event => {
        keyElem.classList.remove('hit')
    })
})
