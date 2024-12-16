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