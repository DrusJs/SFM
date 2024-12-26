const dropdownItems = document.querySelectorAll('.catalog-filter-item')

if (dropdownItems.length > 0) {
    dropdownItems.forEach(el => {
        const drop = el.querySelector('.catalog-filter-item-dropdown')
        const head = el.querySelector('.catalog-filter-item-head')

        drop.style.height = '0px'

        head.addEventListener('click', ()=> {
            el.classList.toggle('active')

            if (el.classList.contains('active')) {
                drop.style.height = drop.scrollHeight + 'px'
            } else {
                drop.style.height = '0px'
            }
        })
    })
}

const materialTab = document.querySelectorAll('.materials__tab')
const materialTabConts = document.querySelectorAll('.materials-catalog-section .container')

if (materialTab.length > 0) {
    materialTab.forEach((el, index) => {
        console.log(index)
        el.addEventListener('click', (e) => {
            if (!e.currentTarget.classList.contains('active')) {
                const active = document.querySelector('.materials__tab.active')
                const activeTab = document.querySelector('.materials-catalog-section .container.active')

                if (active) { active.classList.remove('active') }
                if (activeTab) { activeTab.classList.remove('active') }
                e.currentTarget.classList.add('active')
                materialTabConts[index].classList.add('active')
            }
        })
    })
}

const colorLabels = document.querySelectorAll('.color-label')
const showButton = document.querySelectorAll('.text-button-show')

if (colorLabels.length > 0) {
    colorLabels.forEach(label => {
        const color = label.dataset.color
        const shadow = `0 0 0 1px ${color}`
        
        label.style.backgroundColor = color
        label.style.boxShadow = shadow
    })
}

if (showButton.length > 0) {
    showButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.toggle('active')
            
            if (e.currentTarget.parentElement.classList.contains('active')) {
                e.currentTarget.closest('.catalog-filter-item-dropdown').style.height = e.currentTarget.closest('.catalog-filter-item-dropdown').scrollHeight + 'px'
            } else {                
                e.currentTarget.closest('.catalog-filter-item-dropdown').style.height = '30px'
            }
        })
    })
}

//Маска
const phoneInputs = document.querySelectorAll('input[data-tel-input]');

function getInputNumbersValue(input) {
    return input.value.replace(/\D/g, '');
}

function onPhonePaste(e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
        let pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
            input.value = inputNumbersValue;
            return;
        }
    }
}

function onPhoneInput(e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

    if (!inputNumbersValue) {
        return input.value = "";
    }

    if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
            input.value = inputNumbersValue;
        }
        return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
    } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
}

function onPhoneKeyDown(e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
    }
}

for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
}


document.querySelectorAll('[data-modal]').forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        const modal = document.getElementById(e.currentTarget.dataset.modal)

        modal.classList.add('active')
    })
})
document.querySelectorAll('.modal-close').forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        e.currentTarget.closest('.modal-wrapper').classList.remove('active')
    })
})
document.querySelectorAll('.modal-wrapper').forEach(modal =>{
    modal.addEventListener('click', (e)=>{
        if (e.target.classList.contains('modal-wrapper')) {
            e.currentTarget.classList.remove('active')
        }
    })
})