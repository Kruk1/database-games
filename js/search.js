import { makeTile } from "./gameTile.js"

export const selectOptions = (resLink) =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    const existingModalOverlays = document.querySelectorAll('.modal-overlay')
    const existingModals = document.querySelectorAll('.modal-container')
    existingTile.forEach(tile => tile.remove())
    existingModalOverlays.forEach(tile => tile.remove())
    existingModals.forEach(tile => tile.remove())
    makeTile(resLink)
}

export const search = (resLink) =>
{
    const existingTile = document.querySelectorAll('.game-tile')
    existingTile.forEach(tile => tile.remove())
    makeTile(resLink)
}