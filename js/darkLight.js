export const lightMode = () =>
{
    const tiles = document.querySelectorAll('.game-tile-dark')
    const header = document.querySelector('header')
    const select = document.querySelector('select')
    const customArrow = document.querySelector('.custom-arrow-dark')
    const modal = document.querySelectorAll('.modal-container-dark')
    const rating = document.querySelectorAll('.r-content-dark')
    const arrowUp = document.querySelector('.arrow-up-dark')
    const links = document.querySelectorAll('.nav-item a')
    const navItem = document.querySelectorAll('.nav-item')
    const cancel = document.querySelectorAll('.cancel-dark')
    const h2 = document.querySelector('.input h2')
    const icon = document.querySelector('.icon-moon')
    document.body.style.background = '#ededed'
    document.body.style.color = 'black'
    tiles.forEach(tile => {
        tile.classList.remove('game-tile-dark')
        tile.classList.add('game-tile-light')
    })
    header.style.background = '#dbdbdb'
    select.style.background = '#dbdbdb'
    select.style.color = 'black'
    customArrow.classList.remove('custom-arrow-dark')
    customArrow.classList.add('custom-arrow-light')
    modal.forEach(modal2 => 
    {
        modal2.classList.remove('modal-container-dark')
        modal2.classList.add('modal-container-light')
    })
    rating.forEach(rate => 
    {
        rate.classList.remove('r-content-dark')
        rate.classList.add('r-content-light')
    })
    arrowUp.classList.remove('arrow-up-dark')
    arrowUp.classList.add('arrow-up-light')
    links.forEach(link => link.style.color = 'black')
    navItem.forEach(item =>
    {
        item.classList.remove('nav-item-dark')
        item.classList.add('nav-item-light')
    })
    cancel.forEach(can => 
    {
        can.classList.remove('cancel-dark')
        can.classList.add('cancel-light')
    })
    h2.style.color = 'black'
    icon.classList.remove('icon-moon')
    icon.classList.add('icon-sun')
    localStorage.setItem('color', 'white')
}

export const darkMode = () =>
{
    const tiles = document.querySelectorAll('.game-tile-light')
    const header = document.querySelector('header')
    const select = document.querySelector('select')
    const customArrow = document.querySelector('.custom-arrow-light')
    const modal = document.querySelectorAll('.modal-container-light')
    const rating = document.querySelectorAll('.r-content-light')
    const arrowUp = document.querySelector('.arrow-up-light')
    const links = document.querySelectorAll('.nav-item a')
    const navItem = document.querySelectorAll('.nav-item')
    const cancel = document.querySelectorAll('.cancel-light')
    const h2 = document.querySelector('.input h2')
    const icon = document.querySelector('.icon-sun')
    document.body.style.background = ''
    document.body.style.color = ''
    tiles.forEach(tile => {
        tile.classList.add('game-tile-dark')
        tile.classList.remove('game-tile-light')
    })
    header.style.background = ''
    select.style.background = ''
    select.style.color = ''
    customArrow.classList.add('custom-arrow-dark')
    customArrow.classList.remove('custom-arrow-light')
    modal.forEach(modal2 => 
    {
        modal2.classList.add('modal-container-dark')
        modal2.classList.remove('modal-container-light')
    })
    rating.forEach(rate => 
    {
        rate.classList.add('r-content-dark')
        rate.classList.remove('r-content-light')
    })
    arrowUp.classList.add('arrow-up-dark')
    arrowUp.classList.remove('arrow-up-light')
    links.forEach(link => link.style.color = '')
    navItem.forEach(item =>
    {
        item.classList.add('nav-item-dark')
        item.classList.remove('nav-item-light')
    })
    cancel.forEach(can => 
    {
        can.classList.add('cancel-dark')
        can.classList.remove('cancel-light')
    })
    h2.style.color = ''
    icon.classList.add('icon-moon')
    icon.classList.remove('icon-sun')
    localStorage.setItem('color', 'dark')
}