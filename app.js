let page = 1
let inputValue = ''
let selectValue = ''
let resLink = ``
let currLink =  ''
const input = document.querySelector('.input-bar')
const filter = document.querySelector('select')
const modalItem = document.querySelector('.modal')


const modal = (api, j) =>
{
    const modalClone = modalItem.content.cloneNode(true)
    const gameContainer = document.querySelector('.games-container')
    const title = modalClone.querySelector('.title')
    const choosableImg = modalClone.querySelector('.choosable-img')
    const mainImg = modalClone.querySelector('.main-gallery')
    const tags = modalClone.querySelector('.t-content')
    tags.textContent = ''
    const genre = modalClone.querySelector('.g-content')
    genre.textContent = ''
    const platforms = modalClone.querySelector('.p-content')
    platforms.textContent = ''
    const age = modalClone.querySelector('.m-content')
    age.textContent = ''
    const rating = modalClone.querySelector('.r-content')

    if(api.data.results[j].short_screenshots)
    {
        for(let i = 0; i < api.data.results[j].short_screenshots.length; i++)
        {
            const img = document.createElement('img')
            img.src = api.data.results[j].short_screenshots[i].image
            img.classList.add('choose')
            choosableImg.append(img)
        }
        mainImg.children[1].children[0].src = choosableImg.children[0].src
        choosableImg.children[0].classList.add('opacity')
    }

    if(api.data.results[j].tags)
    {
        for(let i = 0; i < api.data.results[j].tags.length - 1; i++)
        {
            if(api.data.results[j].tags[i].language === 'eng')
            {
                tags.textContent += `${api.data.results[j].tags[i].name}, `
            }
        }
        const lastItem = api.data.results[j].tags.length - 1
        if(api.data.results[j].tags[lastItem].language === 'eng')
        {
            tags.textContent += `${api.data.results[j].tags[lastItem].name}`
        }
        else
        {
            tags.textContent += `${api.data.results[j].tags[lastItem - 1].name}`
        }
    }

    if(api.data.results[j].genres)
    {
        for(let i = 0; i < api.data.results[j].genres.length - 1; i++)
        {
            genre.textContent += `${api.data.results[j].genres[i].name}, `
        }
        const lastItem = api.data.results[j].genres.length - 1
        genre.textContent += `${api.data.results[j].genres[lastItem].name}`
    }
    
    if(api.data.results[j].platforms)
    {
        for(let i = 0; i < api.data.results[j].platforms.length - 1; i++)
        {
            platforms.textContent += `${api.data.results[j].platforms[i].platform.name}, `
        }
        const lastItem = api.data.results[j].platforms.length - 1
        platforms.textContent += `${api.data.results[j].platforms[lastItem].platform.name}`
    }
    
    if(api.data.results[j].esrb_rating)
    {
        age.textContent += `${api.data.results[j].esrb_rating.name}`
        title.textContent = api.data.results[j].name
    }

    if(api.data.results[j].metacritic)
    {
        rating.textContent = api.data.results[j].metacritic
    }
    gameContainer.append(modalClone)
}

const makeTile = () =>
{
    skeletonTile()
    setTimeout(async () =>
    {
        try
        {
            resLink = `https://api.rawg.io/api/games?key=0f740dbb91404899b0d0fc48307b9f2c&page=${page + inputValue + selectValue}&exclude_additions=true`
            const apiData = await axios.get(resLink)
            const skeleton = document.querySelectorAll('.game-tile-skeleton')
            const gameContainer = document.querySelector('.games-container')
            for(let i = 0; i < apiData.data.results.length; i++)
            {
                const newTile = document.createElement('section')
                const img = document.createElement('img')
                img.setAttribute("alt", " ");
                const makeDiv = document.createElement('div')
                const makeDiv2 = document.createElement('div')
                const makeDiv3 = document.createElement('div')
                const makeDiv4 = document.createElement('div')
                const makeDiv5 = document.createElement('div')
                const storeImg = document.createElement('img')
                storeImg.setAttribute("alt", "steam")
                const storeImg2 = document.createElement('img')
                storeImg2.setAttribute("alt", "xbox");
                const storeImg3 = document.createElement('img')
                storeImg3.setAttribute("alt", "playstation");
                const storeImg4 = document.createElement('img')
                storeImg4.setAttribute("alt", "epic games");
                const platformImg = document.createElement('img')
                platformImg.setAttribute("alt", "pc");
                const platformImg2 = document.createElement('img')
                platformImg2.setAttribute("alt", "playstation");
                const platformImg3 = document.createElement('img')
                platformImg3.setAttribute("alt", "xbox");
                newTile.classList.add('game-tile')
                img.classList.add('img-tile')
                img.src = apiData.data.results[i].background_image
                newTile.append(img)
                makeDiv.classList.add('title-text')
                makeDiv.textContent = apiData.data.results[i].name
                newTile.append(makeDiv)
                makeDiv4.classList.add('platform-text')
                makeDiv4.textContent = 'Platforms:'
                makeDiv5.classList.add('stores-img')
                if(apiData.data.results[i].platforms !== null) 
                {
                    if(apiData.data.results[i].platforms.some(platform => platform.platform.id == 4))
                    {
                        platformImg.src = "images/pc.png"
                        platformImg.classList.add('store')
                        makeDiv5.append(platformImg)
                    }
                    if(apiData.data.results[i].platforms.some(platform => platform.platform.id == 16 || platform.platform.id == 18 || platform.platform.id == 187))
                    {
                        platformImg2.src = "images/ps.png"
                        platformImg2.classList.add('store')
                        makeDiv5.append(platformImg2)
                    }
                    if(apiData.data.results[i].platforms.some(platform => platform.platform.id == 14 || platform.platform.id == 1 || platform.platform.id == 186))
                    {
                        platformImg3.src = "images/xbox2.png"
                        platformImg3.classList.add('store')
                        makeDiv5.append(platformImg3)
                    }
                    if(!makeDiv5.firstChild)
                    {
                        makeDiv5.classList.add('stores-margin')
                        makeDiv5.append('No data!')
                    }
                }
                else
                {
                    makeDiv5.classList.add('stores-margin')
                    makeDiv5.append('No data!')
                }
                makeDiv4.append(makeDiv5)
                newTile.append(makeDiv4)
                makeDiv2.classList.add('platform-text')
                makeDiv2.textContent = 'Where you can buy or get:'
                makeDiv3.classList.add('stores-img')
                if(apiData.data.results[i].stores !== null) 
                {
                    if(apiData.data.results[i].stores.some(store => store.store.id == 1))
                    {
                        storeImg.src = "images/steam.png"
                        storeImg.classList.add('store')
                        makeDiv3.append(storeImg)
                    }
                    if(apiData.data.results[i].stores.some(store => store.store.id == 2 || store.store.id == 7))
                    {
                        storeImg2.src = "images/xbox.png"
                        storeImg2.classList.add('store')
                        makeDiv3.append(storeImg2)
                    }
                    if(apiData.data.results[i].stores.some(store => store.store.id == 3))
                    {
                        storeImg3.src = "images/playstation.png"
                        storeImg3.classList.add('store')
                        makeDiv3.append(storeImg3)
                    }
                    if(apiData.data.results[i].stores.some(store => store.store.id == 11))
                    {
                        storeImg4.src = "images/epic2.png"
                        storeImg4.classList.add('store')
                        makeDiv3.append(storeImg4)
                    }
                    if(!makeDiv3.firstChild)
                    {
                        makeDiv3.classList.add('stores-margin')
                        makeDiv3.append('No data!')
                    }
                }
                else
                {
                    makeDiv3.classList.add('stores-margin')
                    makeDiv3.append('No data!')
                }
                makeDiv2.append(makeDiv3)
                newTile.append(makeDiv2)
                gameContainer.append(newTile)
                modal(apiData, i)
                const modalOpenBtn = document.querySelectorAll('.game-tile')
                modalOpenBtn.forEach(btn => 
                {
                    const cancel = btn.nextElementSibling.nextElementSibling.querySelector('.cancel')
                    const imgGallery = btn.nextElementSibling.nextElementSibling.querySelectorAll('.choose')
                    const previousArrow = btn.nextElementSibling.nextElementSibling.querySelector('.previous-arrow')
                    const nextArrow = btn.nextElementSibling.nextElementSibling.querySelector('.next-arrow')
                    const img = btn.nextElementSibling.nextElementSibling.querySelector('.main-img3')
                    const img2 = btn.nextElementSibling.nextElementSibling.querySelector('.main-img2')
                    const mainImg = btn.nextElementSibling.nextElementSibling.querySelector('.main-img')

                    btn.addEventListener('click', e =>
                    {
                        btn.nextElementSibling.classList.add('visible')
                        btn.nextElementSibling.style.display = 'block'
                        btn.nextElementSibling.nextElementSibling.classList.add('visible')
                        btn.nextElementSibling.nextElementSibling.style.display = 'flex'
                        document.body.style.overflow = 'hidden'
                        e.stopPropagation();
                    })
                
                    btn.nextElementSibling.addEventListener('click', e =>
                    {
                        btn.nextElementSibling.classList.remove('visible')
                        btn.nextElementSibling.style.display = 'none'
                        btn.nextElementSibling.nextElementSibling.classList.remove('visible')
                        btn.nextElementSibling.nextElementSibling.style.display = 'none'
                        document.body.style.overflow = 'auto'
                        mainImg.style.transform = 'translateX(0)'
                        img.style.transform = 'translateX(0)'
                        img2.style.transform = 'translateX(0)'
                        mainImg.src = imgGallery[currImg].src
                        previousArrow.removeAttribute('disabled', '')
                        nextArrow.removeAttribute('disabled', '')
                        e.stopPropagation();
                    })

                    cancel.addEventListener('click', e =>
                    {
                        btn.nextElementSibling.classList.remove('visible')
                        btn.nextElementSibling.style.display = 'none'
                        btn.nextElementSibling.nextElementSibling.classList.remove('visible')
                        btn.nextElementSibling.nextElementSibling.style.display = 'none'
                        document.body.style.overflow = 'auto'
                        mainImg.style.transform = 'translateX(0)'
                        img.style.transform = 'translateX(0)'
                        img2.style.transform = 'translateX(0)'
                        mainImg.src = imgGallery[currImg].src
                        previousArrow.removeAttribute('disabled', '')
                        nextArrow.removeAttribute('disabled', '')
                        e.stopPropagation();
                    })

                    let currImg = 0
                
                    imgGallery.forEach(img => 
                    {
                        img.addEventListener('click', e =>
                        {
                            const imgIndex = Array.from(imgGallery)
                            const gallery = btn.nextElementSibling.nextElementSibling.querySelector('.main-img')
                            imgGallery[currImg].classList.remove('opacity')
                            gallery.src = img.src
                            img.classList.add('opacity')
                            currImg = imgIndex.indexOf(img)
                            e.stopPropagation()
                        })
                    })
                
                    previousArrow.addEventListener('click', e =>
                    {
                        const img = btn.nextElementSibling.nextElementSibling.querySelector('.main-img3')
                        const mainImg = btn.nextElementSibling.nextElementSibling.querySelector('.main-img')
                        imgGallery.forEach(img => img.classList.remove('opacity'))
                        currImg -= 1
                        previousArrow.setAttribute('disabled', '')
                        if(currImg < 0)
                        {
                            imgGallery.forEach(img => img.classList.remove('opacity'))
                            currImg = imgGallery.length - 1
                            imgGallery[currImg].classList.add('opacity')
                            img.src = imgGallery[currImg].src
                            img.style.transition = '1s'
                            img.style.transform = 'translateX(100%)'
                            mainImg.style.transition = '1s'
                            mainImg.style.transform = 'translateX(100%)'
                            mainImg.addEventListener('transitionend', () =>
                            {
                                mainImg.src = img.src
                                img.style.transition = '0s'
                                mainImg.style.transition = '0s'
                                mainImg.style.transform = 'translateX(0)'
                                img.style.transform = 'translateX(0)'
                                previousArrow.removeAttribute('disabled', '')
                            })
                            e.stopPropagation()
                        }
                        imgGallery[currImg].classList.add('opacity')
                        img.src = imgGallery[currImg].src
                        img.style.transition = '1s'
                        img.style.transform = 'translateX(100%)'
                        mainImg.style.transition = '1s'
                        mainImg.style.transform = 'translateX(100%)'
                        mainImg.addEventListener('transitionend', () =>
                        {
                            mainImg.src = img.src
                            img.style.transition = '0s'
                            mainImg.style.transition = '0s'
                            mainImg.style.transform = 'translateX(0)'
                            img.style.transform = 'translateX(0)'
                            previousArrow.removeAttribute('disabled', '')
                        })
                        e.stopPropagation()
                    })
                
                    nextArrow.addEventListener('click', e =>
                    {
                        const img = btn.nextElementSibling.nextElementSibling.querySelector('.main-img2')
                        const mainImg = btn.nextElementSibling.nextElementSibling.querySelector('.main-img')
                        imgGallery.forEach(img => img.classList.remove('opacity'))
                        currImg += 1
                        nextArrow.setAttribute('disabled', '')
                        if(currImg >= imgGallery.length)
                        {
                            imgGallery.forEach(img => img.classList.remove('opacity'))
                            currImg = 0
                            imgGallery[currImg].classList.add('opacity')
                            img.src = imgGallery[currImg].src
                            img.style.transition = '1s'
                            img.style.transform = 'translateX(-100%)'
                            mainImg.style.transition = '1s'
                            mainImg.style.transform = 'translateX(-100%)'
                            mainImg.addEventListener('transitionend', () =>
                            {
                                mainImg.src = img.src
                                img.style.transition = '0s'
                                mainImg.style.transition = '0s'
                                mainImg.style.transform = 'translateX(0)'
                                img.style.transform = 'translateX(0)'
                                nextArrow.removeAttribute('disabled', '')
                            })
                            e.stopPropagation()
                        }
                        imgGallery[currImg].classList.add('opacity')
                        img.src = imgGallery[currImg].src
                        img.style.transition = '1s'
                        img.style.transform = 'translateX(-100%)'
                        mainImg.style.transition = '1s'
                        mainImg.style.transform = 'translateX(-100%)'
                        mainImg.addEventListener('transitionend', () =>
                        {
                            mainImg.src = img.src
                            img.style.transition = '0s'
                            mainImg.style.transition = '0s'
                            mainImg.style.transform = 'translateX(0)'
                            img.style.transform = 'translateX(0)'
                            nextArrow.removeAttribute('disabled', '')
                        })
                        e.stopPropagation()
                    })
                })
            }
            skeleton.forEach(block => block.remove())
            page += 1
        }
        catch(err)
        {
            const skeleton = document.querySelectorAll('.game-tile-skeleton')
            skeleton.forEach(block => block.remove())
            currLink = resLink
        }
    }, 1000)
}

const skeletonTile = () =>
{
    const gameContainer = document.querySelector('.games-container')
    for(let i = 0; i < 20; i++)
    {
        const makeSkeletonTile = document.createElement('section')
        const makeImgSkeleton = document.createElement('div')
        const makeTitleSkeleton = document.createElement('div')
        const makePlatformSkeleton = document.createElement('div')
        const makeTextSkeleton = document.createElement('div')
        const makeStoresSkeleton = document.createElement('div')
        const makeStoreSkeleton = document.createElement('div')
        const makeStoreSkeleton2 = document.createElement('div')
        const makeStoreSkeleton3 = document.createElement('div')
        const makeStoreSkeleton4 = document.createElement('div')
        //
        const makePlatformSkeleton2 = document.createElement('div')
        const makeTextSkeleton2 = document.createElement('div')
        const makeStoresSkeleton2 = document.createElement('div')
        const makeStoreSkeleton1 = document.createElement('div')
        const makeStoreSkeleton22 = document.createElement('div')
        const makeStoreSkeleton33 = document.createElement('div')
        const makeStoreSkeleton44 = document.createElement('div')

        makeImgSkeleton.classList.add('img-tile-skeleton')
        makeTitleSkeleton.classList.add('title-text-skeleton')

        makePlatformSkeleton.classList.add('platform-text-skeleton')
        makeTextSkeleton.classList.add('text-skeleton')
        makeStoresSkeleton.classList.add('stores-skeleton')
        makeStoreSkeleton.classList.add('store-skeleton')
        makeStoreSkeleton2.classList.add('store-skeleton')
        makeStoreSkeleton3.classList.add('store-skeleton')
        makeStoreSkeleton4.classList.add('store-skeleton')
        makeStoresSkeleton.append(makeStoreSkeleton, makeStoreSkeleton2, makeStoreSkeleton3, makeStoreSkeleton4)
        makePlatformSkeleton.append(makeTextSkeleton, makeStoresSkeleton)
        
        makePlatformSkeleton2.classList.add('platform-text-skeleton')
        makeTextSkeleton2.classList.add('text-skeleton')
        makeStoresSkeleton2.classList.add('stores-skeleton')
        makeStoreSkeleton1.classList.add('store-skeleton')
        makeStoreSkeleton22.classList.add('store-skeleton')
        makeStoreSkeleton33.classList.add('store-skeleton')
        makeStoreSkeleton44.classList.add('store-skeleton')
        makeStoresSkeleton2.append(makeStoreSkeleton1, makeStoreSkeleton22, makeStoreSkeleton33, makeStoreSkeleton44)
        makePlatformSkeleton2.append(makeTextSkeleton2, makeStoresSkeleton2)

        makeSkeletonTile.classList.add('game-tile-skeleton')
        makeSkeletonTile.append(makeImgSkeleton, makeTitleSkeleton, makePlatformSkeleton, makePlatformSkeleton2)
        gameContainer.append(makeSkeletonTile)
    }
}

const scrollLoading = () =>
{
    const scrollMaxValue = document.documentElement.scrollHeight - window.innerHeight
    const scrollValue = window.scrollY
    const arrow = document.querySelector('.arrow-up')

    if(Math.ceil(scrollValue) === scrollMaxValue)
    {
        setTimeout(() =>
        {
            if(currLink !== resLink)
            {
                makeTile()
            }
        }, 500)
    }

    if(scrollValue > 100)
    {
        arrow.classList.add('display')
    }
    else
    {
        arrow.classList.remove('display')
    }
}

window.addEventListener('scroll', () => scrollLoading())
window.addEventListener('touchmove', () => scrollLoading())

input.addEventListener('submit', e =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    existingTile.forEach(tile => tile.remove())
    inputValue = `&search=${input.children[0].value}`
    page = 1
    makeTile()
    e.preventDefault()
})

filter.addEventListener('change', e =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    const existingModalOverlays = document.querySelectorAll('.modal-overlay')
    const existingModals = document.querySelectorAll('.modal-container')
    existingTile.forEach(tile => tile.remove())
    existingModalOverlays.forEach(tile => tile.remove())
    existingModals.forEach(tile => tile.remove())
    selectValue = filter.options[filter.selectedIndex].value
    page = 1
    makeTile()
    e.stopPropagation()
})

skeletonTile();
makeTile();