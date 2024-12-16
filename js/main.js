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