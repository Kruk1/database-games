import { makeTile, scrollLoading } from './js/gameTile.js'
import { selectOptions, search } from './js/search.js'
import { lightMode, darkMode } from './js/darkLight.js'

const gameApp = 
{
    page: 1,
    inputValue: '',
    selectValue: '',
    resLink: ``,
    currLink: '',
    makeGameTile()
    {
        this.resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
        makeTile(this.resLink)
        this.currLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
        this.page += 1
    },
    scroll()
    {
        window.addEventListener('scroll', () => {
            let arrow = document.querySelector('.arrow-up-dark')
            if(localStorage.getItem('color') === 'white')
            {
                arrow = document.querySelector('.arrow-up-light')
            }
            const scrollMaxValue = document.documentElement.scrollHeight - window.innerHeight
            const scrollValue = window.scrollY
            if(Math.ceil(scrollValue) === scrollMaxValue)
            {
                this.resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
                scrollLoading(this.currLink, this.resLink)
                this.currLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
                this.page += 1    
            } 
            if(scrollValue > 100)
            {
                arrow.classList.add('display')
            }
            else
            {
                arrow.classList.remove('display')
            }
        })
        window.addEventListener('touchmove', () => {
            const scrollMaxValue = document.documentElement.scrollHeight - window.innerHeight
            const scrollValue = window.scrollY
            if(Math.ceil(scrollValue) === scrollMaxValue)
            {
                this.resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
                scrollLoading(this.currLink, this.resLink)
                this.currLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
                this.page += 1    
            }
        })
    },
    sorting()
    {
        const filter = document.querySelector('select')
        filter.addEventListener('change', e =>
        {
            this.selectValue = filter.options[filter.selectedIndex].value
            this.page = 1
            this.resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
            selectOptions(this.resLink)
            this.currLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
            e.stopPropagation()
        })
    },
    search()
    {
        const input = document.querySelector('.input-bar')
        input.addEventListener('submit', e =>
        {
            this.inputValue = `&search=${input.children[0].value}`
            this.page = 1
            this.resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
            search(this.resLink)
            this.currLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${this.page + this.inputValue + this.selectValue}&exclude_additions=true`
            e.preventDefault()
        })
    },
    lightDarkMode()
    {
        const checkbox = document.querySelector('#dark-light-mode')

        if(localStorage.getItem('color') === 'white')
        {
            checkbox.checked = true;
            lightMode()
        }
        else
        {
            checkbox.checked = false;
        }

        checkbox.addEventListener('change', () =>
        {
            if(checkbox.checked)
            {
                lightMode()
            }
            else
            {
                darkMode()
            }
        })
    }
}

gameApp.makeGameTile()
gameApp.sorting()
gameApp.search()
gameApp.scroll()
gameApp.lightDarkMode()