import { makeTile } from "./gameTile.js"

export const selectOptions = (resLink) =>
{
    let existingTile = document.querySelectorAll('.game-tile-dark')
    const existingModalOverlays = document.querySelectorAll('.modal-overlay')
    let existingModals = document.querySelectorAll('.modal-container-dark')
    if(localStorage.getItem('color') === 'white')
    {
        existingModals = document.querySelectorAll('.modal-container-light')
        existingTile = document.querySelectorAll('.game-tile-light')
    }
    existingTile.forEach(tile => tile.remove())
    existingModalOverlays.forEach(tile => tile.remove())
    existingModals.forEach(tile => tile.remove())
    makeTile(resLink)
}

export const search = (resLink) =>
{
    let existingTile = document.querySelectorAll('.game-tile-dark')
    if(localStorage.getItem('color') === 'white')
    {
        existingTile = document.querySelectorAll('.game-tile-light')
    }
    existingTile.forEach(tile => tile.remove())
    makeTile(resLink)
}