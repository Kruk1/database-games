import { checkbox, menuDisplay, shuffling } from "./js/shuffle.js"
import { darkModeShuffle, lightModeShuffle } from "./js/darkLight.js"

const shuffleApp = 
{
    tagDisplay()
    {
        const tag = document.querySelector('.tag-option .open-btn')
        const tagCont = document.querySelector('.tags-container')

        tag.addEventListener('click', e =>
        {
            menuDisplay(tagCont)
            e.stopPropagation()
        })
    },
    genreDisplay()
    {
        const genre = document.querySelectorAll('.tag-option .open-btn')[1]
        const genreCont = document.querySelectorAll('.tags-container')[1]

        genre.addEventListener('click', e =>
        {
            menuDisplay(genreCont)
            e.stopPropagation()
        })
    },
    storeDisplay()
    {
        const store = document.querySelectorAll('.tag-option .open-btn')[2]
        const storeCont = document.querySelectorAll('.tags-container')[2]

        store.addEventListener('click', e =>
        {
            menuDisplay(storeCont)
            e.stopPropagation()
        })
    },
    platformDisplay()
    {
        const platform = document.querySelectorAll('.tag-option .open-btn')[3]
        const platformCont = document.querySelectorAll('.tags-container')[3]

        platform.addEventListener('click', e =>
        {
            menuDisplay(platformCont)
            e.stopPropagation()
        })
    },
    shuffle()
    {
        const btn = document.querySelector('.shuffle-btn')

        btn.addEventListener('click', e => 
        {
            shuffling()
            e.stopPropagation()
        })
    },
    checkboxes()
    {
        const storecheck = document.querySelectorAll('.check-store')
        const tagcheck = document.querySelectorAll('.check-tag')
        const platformcheck = document.querySelectorAll('.check-platform')
        const genrecheck = document.querySelectorAll('.check-genre')

        storecheck.forEach(item => 
        {
            item.addEventListener('click', () => checkbox(item))
        })
        tagcheck.forEach(item => 
        {
            item.addEventListener('click', () => checkbox(item))
        })
        platformcheck.forEach(item => 
        {
            item.addEventListener('click', () => checkbox(item))
        })
        genrecheck.forEach(item => 
        {
            item.addEventListener('click', () => checkbox(item))
        })
    },
    lightMode()
    {
        const checkbox = document.querySelector('#dark-light-mode')

        if(localStorage.getItem('color') === 'white')
        {
            checkbox.checked = true;
            lightModeShuffle()
        }
        else
        {
            checkbox.checked = false;
        }

        checkbox.addEventListener('change', () =>
        {
            if(checkbox.checked)
            {
                lightModeShuffle()
            }
            else
            {
                darkModeShuffle()
            }
        })
    }
}

shuffleApp.tagDisplay()
shuffleApp.genreDisplay()
shuffleApp.storeDisplay()
shuffleApp.platformDisplay()
shuffleApp.shuffle()
shuffleApp.checkboxes()
shuffleApp.lightMode()