let previousActive

export const menuDisplay = item =>
{
    const list = item.querySelector('.tags-list')
    const tag = item.querySelector('.tag-option')
    const btn = item.querySelector('.tag-option .open-btn')

    btn.classList.toggle('radius')
    btn.classList.toggle('radius-open')
    tag.classList.toggle('tag-option-border-radius')
    tag.classList.toggle('tag-option-border-radius-open')
    list.classList.toggle('display-drop')
}

export const shuffling = async () =>
{
    const main = document.querySelector('.main-shuffle')
    const shuffleItem = document.querySelector('.shuffle-item')
    const shuffleClone = shuffleItem.content.cloneNode(true)
    const img = shuffleClone.querySelector('img')
    const title = shuffleClone.querySelector('h3')
    const list = document.querySelectorAll('.tags-list')
    const tag = document.querySelectorAll('.tag-option')
    const btn2 = document.querySelectorAll('.tag-option .open-btn')
    let tags = '&tags='
    let genre = '&genres='
    let platform = '&platforms='
    let store = '&stores='
    const storecheck = document.querySelectorAll('.check-store')
    const tagcheck = document.querySelectorAll('.check-tag')
    const platformcheck = document.querySelectorAll('.check-platform')
    const genrecheck = document.querySelectorAll('.check-genre')
    let page = Math.floor(Math.random() * 20 + 1)
    let item = Math.floor(Math.random() * 20)
    let link = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${page}&exclude_additions=true`
    list.forEach(item => 
    {
        item.classList.remove('display-drop')
    })
    tag.forEach(item => 
    {
        item.classList.add('tag-option-border-radius')
        item.classList.remove('tag-option-border-radius-open')
    })
    btn2.forEach(item =>
    {
        item.classList.add('radius')
        item.classList.remove('radius-open')
    })
    while(main.firstChild)
    {
        main.removeChild(main.lastChild)
    }
    for(let i = 0; i < storecheck.length; i++)
    {
        if(storecheck[i].checked)
        {
            store += `${storecheck[i].parentElement.nextElementSibling.children[0].textContent}`
        }
    }
    for(let i = 0; i < genrecheck.length; i++)
    {
        if(genrecheck[i].checked)
        {
            genre += `${genrecheck[i].parentElement.nextElementSibling.children[0].textContent}`
        }
    }
    for(let i = 0; i < tagcheck.length; i++)
    {
        if(tagcheck[i].checked)
        {
            tags += `${tagcheck[i].parentElement.nextElementSibling.children[0].textContent}`
        }
    }
    for(let i = 0; i < platformcheck.length; i++)
    {
        if(platformcheck[i].checked)
        {
            platform += `${platformcheck[i].parentElement.nextElementSibling.children[0].textContent}`
        }
    }
    if(store !== '&stores=')
    {
        link += store
    }
    if(genre !== '&genres=')
    {
        link += genre
    }
    if(tags !== '&tags=')
    {
        link += tags
    }
    if(platform !== '&platforms=')
    {
        link += platform
    }
    const api = await axios.get(link)
    img.src = api.data.results[item].background_image
    title.textContent = api.data.results[item].name
    const btn = shuffleClone.querySelector('.shuffle-btn')
    btn.addEventListener('click', e => 
    {
        shuffling()
        e.stopPropagation()
    })
    main.append(shuffleClone)
}

export const checkbox = active =>
{
    const storecheck = Array.from(document.querySelectorAll('.check-store'))
    const tagcheck = Array.from(document.querySelectorAll('.check-tag'))
    const platformcheck = Array.from(document.querySelectorAll('.check-platform'))
    const genrecheck = Array.from(document.querySelectorAll('.check-genre'))
    if(storecheck.indexOf(active) !== -1)
    {
        storecheck.forEach(item => 
        {
            item.checked = false
        })
        active.checked = true
    }
    if(tagcheck.indexOf(active) !== -1)
    {
        tagcheck.forEach(item => 
        {
            item.checked = false
        })
        active.checked = true
    }
    if(platformcheck.indexOf(active) !== -1)
    {
        platformcheck.forEach(item => 
        {
            item.checked = false
        })
        active.checked = true
    }
    if(genrecheck.indexOf(active) !== -1)
    {
        genrecheck.forEach(item => 
        {
            item.checked = false
        })
        active.checked = true
    }
    if(previousActive === active)
    {
        active.checked = false
        previousActive = ''
    }
    else
    {
        previousActive = active
    }
}