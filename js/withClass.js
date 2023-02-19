



class keyBoard {
    constructor() {

        //دسترسی به تمامی المنت هایی که لازم داریم
        this.titleElem = document.querySelector('.title')
        this.liElems = document.querySelectorAll('li')
        this.render()
    }


    render() {
        //set animation on key
        this.liElems.forEach(liElem => {
            liElem.addEventListener('click', (event) => {
                let keyElem = document.querySelector(`#${event.target.id}`)
                keyElem.classList.add('hit')
                this.appendToDomWithClick(event.target.id)
                keyElem.addEventListener('animationend', () => {
                    keyElem.classList.remove('hit')
                })
            })
        })

        //set keyUp event on body and get key to add to dom
        document.addEventListener('keyup', (event) => {
            this.appendValueToDom(event)

            let userEventKey = event.key.toUpperCase()

            let keyElem = document.querySelector(`#${userEventKey}`)
            keyElem.classList.add('hit')
            keyElem.addEventListener('animationend', event => {
                keyElem.classList.remove('hit')
            })
        })
    }



    //اضافه کردن مقدار به صفحه 
    appendValueToDom(event) {
        if (event.code === 'Backspace') {
            return this.titleElem.innerHTML = this.titleElem.innerHTML.slice(0, -1)
        }
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            return this.titleElem.innerHTML += '<br>'
        }
        if (event.code === 'ShiftRight' || event.code === 'ControlRight' || event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'ControlLeft' || event.code === 'ArrowRight' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'AltLeft') {
            return this.titleElem.innerHTML = this.titleElem.innerHTML
        }
        this.titleElem.innerHTML += event.key
    }


    //append key to dom to click on key in body
    appendToDomWithClick(key) {
        if (key === 'esc' || key === 'left-shift' || key === 'caps' || key === 'right-shift' | key === 'tab') {
            return this.titleElem.innerHTML = this.titleElem.innerHTML
        }

        if (key === 'back') {
            return this.titleElem.innerHTML = this.titleElem.innerHTML.slice(0, -1)
        }

        if (key === 'enter') {
            return this.titleElem.innerHTML += '<br>'
        }

        this.titleElem.innerHTML += key
    }
}


new keyBoard()

