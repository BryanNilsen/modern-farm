const mainContainer = document.querySelector(".container")

export const Catalog = (harvestedPlants) => {
    let plantAsHTML = ""
    harvestedPlants.forEach(plant => {
        plantAsHTML += `<section class="plant">${plant.type}</section>`
    })
    mainContainer.innerHTML += plantAsHTML
}