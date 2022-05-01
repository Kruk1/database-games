let page = 1
let inputValue = ''
let selectValue = ''
let resLink = ``
let currLink =  ''
const input = document.querySelector('.input-bar')
const filter = document.querySelector('select')

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
                const makeDiv = document.createElement('div')
                const makeDiv2 = document.createElement('div')
                const makeDiv3 = document.createElement('div')
                const makeDiv4 = document.createElement('div')
                const makeDiv5 = document.createElement('div')
                const storeImg = document.createElement('img')
                const storeImg2 = document.createElement('img')
                const storeImg3 = document.createElement('img')
                const storeImg4 = document.createElement('img')
                const platformImg = document.createElement('img')
                const platformImg2 = document.createElement('img')
                const platformImg3 = document.createElement('img')
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


window.addEventListener('scroll', () =>
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
})

input.addEventListener('submit', e =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    existingTile.forEach(tile => tile.remove())
    inputValue = `&search=${input.children[0].value}`
    page = 1
    makeTile()
    e.preventDefault()
})

filter.addEventListener('change', () =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    existingTile.forEach(tile => tile.remove())
    selectValue = filter.options[filter.selectedIndex].value
    page = 1
    makeTile()
})

skeletonTile();
makeTile();